import time
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/weather', methods=["GET"])
def get_weather():
    # check discord chat
    req = request.get_data("")
    print(req)
    return "yay"

app.run()