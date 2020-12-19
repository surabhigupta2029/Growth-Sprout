import json

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/weather', methods=["GET"])
def get_weather():
    # weather = request.get_json()
    return "Weather acquired"


@app.route("/txtfile")
def file_sender():
    return flask.send_file("plantInfo.txt")


if __name__ == '__main__':
    app.run()
