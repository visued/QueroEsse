from celery import Celery
import requests
from bs4 import BeautifulSoup
import json
import nltk

# Celery configuration
CELERY_BROKER_URL = 'amqp://rabbitmq:rabbitmq@rabbit:5672/'
CELERY_RESULT_BACKEND = 'rpc://'

# Initialize Celery
celery = Celery('worker', broker=CELERY_BROKER_URL, backend=CELERY_RESULT_BACKEND)


@celery.task()
def crawler(agendamentoid, ecommerce, link):
    if(ecommerce == 'magazineluiza'):
        print('Worker magazine')
        mgluiza(agendamentoid, ecommerce, link)
    elif(ecommerce == 'casasbahia'):
        csbahia(usuarioid, ecommerce, link)
        print('entrou aqui casas bahia...')
    elif(ecommerce == 'pontofrio'):
        ptofrio(usuarioid, ecommerce, link)
        print('entrou aqui ponto frio...')
    else:
        print('pulou tudo....')
    
    


def mgluiza(agendamentoid, ecommerce, url):
    headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0'}
    pages = 1
    comments = []
    rLuiza = requests.get(url, headers)
    soup = BeautifulSoup(rLuiza.text, 'html.parser')
    productName = soup.select('.header-product__title')[0].text
    producRating = soup.select('.js-rating-value')[0].text
    productImage = soup.select_one('.showcase-product__big-img')['src']
    productInfo = soup.select('.description__container-text')[0].text
    productCode = str(soup.find('small', {'class': 'header-product__code'}).next_element).replace('Código ', '')
    apimgluiza = 'https://www.magazineluiza.com.br/review/'+str(productCode).strip()+'/?page='+str(pages)
    rLuiza = requests.get(apimgluiza, headers)
    getPages = rLuiza.json()
    pages = str(getPages['data']['pages'])
    for i in range(1,int(pages)):
        try:
            apimgluiza = 'https://www.magazineluiza.com.br/review/'+str(productCode).strip()+'/?page='+str(i)
            rLuiza = requests.get(apimgluiza, headers)
            getComments = rLuiza.json()
            for n in range(len(getComments['data']['objects'])):
                comments.append(getComments['data']['objects'][n]['review_text'])

        except Exception:
            print('URL: ' + apimgluiza + ' não existe ou está inacessível' )  
            pass

    from nltk.tokenize import word_tokenize
    from nltk.tokenize import sent_tokenize


    sents = [sent_tokenize(i) for i in comments]
    tokenized_sents = [word_tokenize(i.lower()) for i in comments]

    from nltk.corpus import stopwords
    from string import punctuation

    stopwords = set(stopwords.words('portuguese') + list(punctuation))
    words_without_stopwords = []
    forFrequency = []

    for m in tokenized_sents:
        stop_m = [i for i in m if str(i).lower() not in stopwords]
        words_without_stopwords.append(stop_m)
    from nltk import FreqDist

    for sub in words_without_stopwords:
        forFrequency.append(sub[0])

    frequency = FreqDist(forFrequency).most_common()

    if None not in (productName, producRating, productImage, productInfo, productCode, comments, frequency):
        print(productName)
        print(producRating)
        print(productImage)
        print(len(productInfo))
        print(productCode)

        payload = {
                        "descricao": productInfo,
                        "foto": productImage,
                        "modelo": "queroesse",
                        "nome": productName,
                        "rating": float(producRating.replace(',', '.')),
                        "especificacao_tecnica": "queroesse",
                        "agendamentoId": agendamentoid
                    }
        
        
        r = requests.post('http://192.168.1.66:4000/produtos', data=payload, headers=headers)
        id = r.json()['id']

        for i in range(len(comments)):
            payload = {
                        "link": url,
                        "comentario": comments[i],
                        "produtoId": id
                    }
            
            r = requests.post('http://192.168.1.66:4000/comentarios', data=payload, headers=headers)


def csbahia(usuarioid, ecommerce, url):
    comments = []
    rBahia = requests.get(url).headers.update(headers)
    soup = BeautifulSoup(rBahia.text, 'html.parser')
    productName = soup.select('h1.fn > b:nth-child(1)')[0].text
    productImage = soup.select('#ctl00_Conteudo_ctl02_prodImagens_imgFullImage')[0]['src']
    productInfo = soup.select('#descricao')[0].text
    productCode = soup.select('#IdProduto')[0]['value']

    apicsbahia = 'https://avaliacoes.api-casasbahia.com.br/V1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente=1&QuantidadeItensPagina=3&Criterio=Data'

    rBahia = requests.get(apicsbahia).headers.update(headers)
    getAssessments = rBahia.json()
    assessments = getAssessments['avaliacao']['quantidadeAvaliacoes']
    calcPages = int(float(assessments) / 3)

    for i in range(1, calcPages):
        try:
            apicsbahia = 'https://avaliacoes.api-casasbahia.com.br/V1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente='+str(i)+'&QuantidadeItensPagina=3&Criterio=Data'
            rBahia = requests.get(apicsbahia).headers.update(headers)
            getComments = rBahia.json()
            for n in range(len(getComments['avaliacao']['avaliacoes'])):
                comments.append(getComments['avaliacao']['avaliacoes'][n]['descricao'])
                
        except Exception:
            print('URL: ' + apicsbahia + ' não existe ou está inacessível')
            pass

    from nltk.tokenize import word_tokenize
    from nltk.tokenize import sent_tokenize


    tokenized_sents = word_tokenize(str(comments).lower())

    from nltk.corpus import stopwords
    from string import punctuation

    stopwords = set(stopwords.words('portuguese') + list(punctuation))
    words_without_stopwords = [i for i in tokenized_sents if i not in stopwords]

    from nltk import FreqDist

    frequency = FreqDist(words_without_stopwords).most_common()
    print(frequency)

def ptofrio(usuarioid, ecommerce, url):
    comments = []
    rFrio = requests.get(url).headers.update(headers)
    soup = BeautifulSoup(rFrio.text, 'html.parser')
    productName = soup.select('h1.fn > b:nth-child(1)')[0].text
    producRating = str(soup.select('.rating-value')[0].text).replace('Ponto:  ', '')
    productImage = soup.select('#ctl00_Conteudo_ctl03_prodImagens_imgFullImage')[0]['src']
    productInfo = soup.select('#descricao')[0].text
    productCode = soup.select('#IdProduto')[0]['value']

    apiptofrio = 'https://avaliacoes.api-pontofrio.com.br/v1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente=1&QuantidadeItensPagina=3&Criterio=Data'

    rFrio = requests.get(apiptofrio).headers.update(headers)
    getAssessments = rFrio.json()
    assessments = getAssessments['avaliacao']['quantidadeAvaliacoes']
    calcPages = int(float(assessments) / 3)

    for i in range(1, calcPages):
        try:
            apiptofrio = 'https://avaliacoes.api-pontofrio.com.br/v1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente='+str(i)+'&QuantidadeItensPagina=3&Criterio=Data'
            rFrio = requests.get(apiptofrio).headers.update(headers)
            getComments = rFrio.json()
            for n in range(len(getComments['avaliacao']['avaliacoes'])):
                comments.append(getComments['avaliacao']['avaliacoes'][n]['descricao'])

        except Exception:
            print('URL: ' + apiptofrio + ' não existe ou está inacessível')
            pass

    from nltk.tokenize import word_tokenize
    from nltk.tokenize import sent_tokenize


    tokenized_sents = word_tokenize(str(comments).lower())

    from nltk.corpus import stopwords
    from string import punctuation

    stopwords = set(stopwords.words('portuguese') + list(punctuation))
    words_without_stopwords = [i for i in tokenized_sents if i not in stopwords]

    from nltk import FreqDist

    frequency = FreqDist(words_without_stopwords).most_common()
    print(frequency)