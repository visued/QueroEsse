import requests
from bs4 import BeautifulSoup
import json
import re

urlmgluiza = 'https://www.magazineluiza.com.br/geladeira-brastemp-frost-free-inverse-573-litros-branca-com-smart-bar-/p/9258928/ed/rinv/'
urlcsbahia = 'https://www.casasbahia.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/refrigerador-brastemp-brm44hb-frost-free-com-compartimento-para-latas-e-long-necks-branco-375l-12731686.html?rectype=p1_ov_f_s1&recsource=mar-62'
urlptofrio = 'https://www.pontofrio.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/refrigerador-brastemp-inverse-bre57ab-frost-free-com-espaco-adapt-443l-branco-11689367.html?recsource=busca-int&rectype=busca-14'


class crawler:
    def __init__(self):
        self.__session = requests.session()
        self.__session.headers.update({'Accept-Encoding' : 'gzip, deflate, br'})
        

    def __get_mgluiza(self):
        response = self.__session.get(urlmgluiza)
        id = re.search('(\d+)/', urlmgluiza).group(0)
        urlnew = 'https://www.magazineluiza.com.br/review/'+id+'?page=2'
        soup = BeautifulSoup(response.text, 'html.parser')

        productName = soup.select('.header-product__title')[0].text
        productImage = soup.select_one('.showcase-product__big-img')['src']
        productInfo = soup.select('.description__container-text')[0].text
        
        buttonMore = soup.select('.button__view-more')
        if(len(buttonMore) > 0):
            print('entreaqui')
            response = self.__session.get(urlnew)
            soup = BeautifulSoup(response.text, 'html.parser')
            comentarios = json.loads(str(soup))

        

        


    
    def __get_csbahia(self):
        pass

    def __get_ptofrio(self):
        pass

    def find(self):
        self.__get_mgluiza()


if __name__ == '__main__':
    c = crawler()
    c.find()
    