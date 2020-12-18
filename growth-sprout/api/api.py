import time
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/weather', methods=["GET"])
def get_weather():
    req = request.get_data("http://api.openweathermap.org/data/2.5/weather?q=campbell,ca,us&appid=29a2d65b7d930665b8c87efbbfd86372")
    print(req)
    return "yay"

app.run()