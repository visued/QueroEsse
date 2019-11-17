import requests
from bs4 import BeautifulSoup
import json
import re
import nltk
nltk.download()

urlmgluiza = 'https://www.magazineluiza.com.br/smart-tv-led-32-samsung-j4290-wi-fi-2-hdmi-1-usb/p/193421800/et/elit/'
urlcsbahia = 'https://www.casasbahia.com.br/TelefoneseCelulares/Smartphones/Android/smartphone-motorola-moto-g7-plus-indigo-xt1965-64gb-tela-de-624-4gb-de-ram-dual-chip-android-9-0-camera-traseira-dupla-e-processador-octa-core-14536905.html?recSource=whome&recType=lx_mais_vendidos'
urlptofrio = 'https://www.pontofrio.com.br/Eletroportateis/FerrodePassar/FerroaVapor/ferro-black-decker-vapor-seco-aj2000-azul-2961091.html?recSource=whome&recType=lx_dicas_do_pinguim'
headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0'}

class crawler:
    def __init__(self):
        self.__session = requests.session()
        self.__session.headers.update(headers)
        

    def __get_mgluiza(self):
        pages = 1
        comments = []
        rLuiza = self.__session.get(urlmgluiza)
        soup = BeautifulSoup(rLuiza.text, 'html.parser')
        productName = soup.select('.header-product__title')[0].text
        producRating = soup.select('.js-rating-value')[0].text
        productImage = soup.select_one('.showcase-product__big-img')['src']
        productInfo = soup.select('.description__container-text')[0].text
        productCode = str(soup.find('small', {'class': 'header-product__code'}).next_element).replace('Código ', '')
        apimgluiza = 'https://www.magazineluiza.com.br/review/'+str(productCode).strip()+'/?page='+str(pages)
        rLuiza = self.__session.get(apimgluiza)
        getPages = rLuiza.json()
        pages = str(getPages['data']['pages'])
        for i in range(1,int(pages)):
            try:
                apimgluiza = 'https://www.magazineluiza.com.br/review/'+str(productCode).strip()+'/?page='+str(i)
                rLuiza = self.__session.get(apimgluiza)
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
        print(words_without_stopwords)
        from nltk import FreqDist

        for sub in words_without_stopwords:
            forFrequency.append(sub[0])

        frequency = FreqDist(forFrequency).most_common()
        print(frequency)


        
    
    def __get_csbahia(self):
        comments = []
        rBahia = self.__session.get(urlcsbahia)
        soup = BeautifulSoup(rBahia.text, 'html.parser')
        productName = soup.select('h1.fn > b:nth-child(1)')[0].text
        productImage = soup.select('#ctl00_Conteudo_ctl02_prodImagens_imgFullImage')[0]['src']
        productInfo = soup.select('#descricao')[0].text
        productCode = soup.select('#IdProduto')[0]['value']

        apicsbahia = 'https://avaliacoes.api-casasbahia.com.br/V1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente=1&QuantidadeItensPagina=3&Criterio=Data'

        rBahia = self.__session.get(apicsbahia)
        getAssessments = rBahia.json()
        assessments = getAssessments['avaliacao']['quantidadeAvaliacoes']
        calcPages = int(float(assessments) / 3)

        for i in range(1, calcPages):
            try:
                apicsbahia = 'https://avaliacoes.api-casasbahia.com.br/V1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente='+str(i)+'&QuantidadeItensPagina=3&Criterio=Data'
                rBahia = self.__session.get(apicsbahia)
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


    def __get_ptofrio(self):
        comments = []
        rFrio = self.__session.get(urlptofrio)
        soup = BeautifulSoup(rFrio.text, 'html.parser')
        productName = soup.select('h1.fn > b:nth-child(1)')[0].text
        producRating = str(soup.select('.rating-value')[0].text).replace('Ponto:  ', '')
        productImage = soup.select('#ctl00_Conteudo_ctl03_prodImagens_imgFullImage')[0]['src']
        productInfo = soup.select('#descricao')[0].text
        productCode = soup.select('#IdProduto')[0]['value']

        apiptofrio = 'https://avaliacoes.api-pontofrio.com.br/v1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente=1&QuantidadeItensPagina=3&Criterio=Data'
        
        rFrio = self.__session.get(apiptofrio)
        getAssessments = rFrio.json()
        assessments = getAssessments['avaliacao']['quantidadeAvaliacoes']
        calcPages = int(float(assessments) / 3)

        for i in range(1, calcPages):
            try:
                apiptofrio = 'https://avaliacoes.api-pontofrio.com.br/v1/api//produto/AvaliacoesPorProdutoPaginado?id='+str(productCode)+'&PaginaCorrente='+str(i)+'&QuantidadeItensPagina=3&Criterio=Data'
                rFrio = self.__session.get(apiptofrio)
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

    def find(self):
        #self.__get_mgluiza()
        self.__get_csbahia()
        #self.__get_ptofrio()


if __name__ == '__main__':
    c = crawler()
    c.find()
    