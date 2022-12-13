from flask import Flask, request 
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

@app.route("/joinSession")
def joinSession(sessionKey, userName, seatNum):
    for i in os.listdir():
        if i == (f"{sessionKey}.txt"):
            pass
        else: 
            return

# @app.route("/joinSession", methods=["POST", "GET"])
# def joinSession():
#     if request.method == "POST":
#         return "..."
    


#     sessionKey = request.args.get('sessionKey')
#     userName = request.args.get('userName')
#     seatNum = request.args.get('seatNum')
#     response_body = {
#         "sessionKey": sessionKey,
#         "userName": userName,
#         "seatNum": seatNum,
#     }
#     return response_body

@app.route("/createSession")
def newSession():
    os.chdir(os.path.join(".", "Sessions"))
    sessionName = str(uuid.uuid4())[:6]
    adminKey = str(uuid.uuid4())
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

def setClassroom():
    pass

@app.route("/")

@app.route("/")

@app.route("/")


def route():
    return 0

if __name__ == "__main__":
    app.run(debug=True)
