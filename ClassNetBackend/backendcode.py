from flask import Flask
from flask_cors import CORS, cross_origin

import os
import uuid

# flask --app backendcode.py run
# pip install Flask-Cors 

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = "Content-Type"


app = Flask(__name__)

@app.route("/name")
def home():
    response_body = {
        "name": "Ryan"
    }
    return response_body

@app.route("/join")
def joinSession():
    pass

@app.route("/create")
def newSession(sessionName, adminKey):
    x = True
    y = False
    num = 0
    tempFile = 'z'
    while x:
        num += 1
        for i in os.listdir():
            if i == (f"{sessionName}.txt"):
                return
            else:
                y = True
        if os.listdir() == [] or y:
            x = False

        if x == False:
            with open(f"{sessionName}.txt", "w") as newFile:
                newFile.write(adminKey)
                newFile.write('\n')
                tempFile = newFile
        print(num)

    return tempFile

@app.route("/")

@app.route("/")

@app.route("/")


def route():
    return 0

if __name__ == "__main__":
    app.run(debug=True)
