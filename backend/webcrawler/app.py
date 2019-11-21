from worker import crawler
from flask import (
   Flask,
   request,
   jsonify
)
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route('/crawler-scheduler', methods=['POST'])
def add():
    req_data = request.get_json(force=True)
    agendamentoid = req_data['agendamentoid']
    link = req_data['link']
    ecommerce = req_data['ecommerce']

    crawler.delay(agendamentoid, ecommerce, link)

    return "Crawler agendado!"        


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')



