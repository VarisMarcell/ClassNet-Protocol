from flask import Flask, request, redirect 
from flask_cors import CORS, cross_origin

import os
import uuid
import json

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

# params = request.body
# session = params.session

@app.route("/joinData")
def getJoinData():
    with open(f"{session}.txt", "r") as newFile:
            newData = newFile.read()


@app.route("/joinSession", methods=["POST", "GET"])
def joinSession():
    if request.method == "POST":
        sessionKey = request.form["sessionKey"]
        userName = request.form["userName"]
        seatNum = request.form["seatPosition"]

        newResponse = {
            'session' : sessionKey,
            'username' : userName,
            'seat' : seatNum
        }
        return newResponse
        for i in os.listdir():
            if i == (f"{sessionKey}.txt"):
                return redirect(url_for(""))
            else: 
                return
    else:
        return {
            'bruh' : 3
        }
    

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
def createSession():
    os.chdir(os.path.join(".", "Sessions"))
    sessionName = str(uuid.uuid4())[:6]
    adminKey = str(uuid.uuid4())

    x = True # set to false if no matching file found
    y = False # set to true if theres no matching file found or the current directory is empty
    num = 0 # a basic counter to see how many times the while loop has looped

    while x:
        num += 1
        for i in os.listdir():
            if i == (f"{sessionName}.txt"):
                return
            else:
                y = True
        if os.listdir() == [] or y:
            x = False

        """ HERE IS A TON OF DATA FOR newSession"""
        mainData = {
            'sessionKey' : sessionName,
            'adminKey' : adminKey,

            
            'seats' : {
                'A1' : '',
                'A2' : '',
                'A3' : '',
                'A4' : '',
                'A5' : '',
                'A6' : '',
                'A7' : '',
                'A8' : '',
                'A9' : '',
                'A10' : '',
                'A11' : '',
                'A12' : '',
                'A13' : '',
                'A14' : '',
                'A15' : '',
                'A16' : '',
                'A17' : '',
                'A18' : '',
                'A19' : '',
                'A20' : '',
                
                'B1': '',
                'B2': '',
                'B3': '',
                'B4': '',
                'B5': '',
                'B6': '',
                'B7': '',
                'B8': '',
                'B9': '',
                'B10': '',
                'B11': '',
                'B12': '',
                'B13': '',
                'B14': '',
                'B15': '',
                'B16': '',
                'B17': '',
                'B18': '',
                'B19': '',
                'B20': '',
        
                'C1': '',
                'C2': '',
                'C3': '',
                'C4': '',
                'C5': '',
                'C6': '',
                'C7': '',
                'C8': '',
                'C9': '',
                'C10': '',
                'C11': '',
                'C12': '',
                'C13': '',
                'C14': '',
                'C15': '',
                'C16': '',
                'C17': '',
                'C18': '',
                'C19': '',
                'C20': '',
        
                'D1': '',
                'D2': '',
                'D3': '',
                'D4': '',
                'D5': '',
                'D6': '',
                'D7': '',
                'D8': '',
                'D9': '',
                'D10': '',
                'D11': '',
                'D12': '',
                'D13': '',
                'D14': '',
                'D15': '',
                'D16': '',
                'D17': '',
                'D18': '',
                'D19': '',
                'D20': '',
        
                'E1': '',
                'E2': '',
                'E3': '',
                'E4': '',
                'E5': '',
                'E6': '',
                'E7': '',
                'E8': '',
                'E9': '',
                'E10': '',
                'E11': '',
                'E12': '',
                'E13': '',
                'E14': '',
                'E15': '',
                'E16': '',
            },
            
            'packet0' : {
                    'source' : {
                        'section' : "",
                        'row' : "",
                        'seat' : "",
                    },
                    'destination' : {
                        'section' : "",
                        'row' : "",
                        'seat' : "",  
                    },
                    'sequence' : {
                        'Num' : "",
                        'total' : "",
                    },
                    'body' : {
                        "1": " ",
                        "2": " ",
                        "3": " ",
                        "4": " ",
                        "5": " ",
                        "6": " ",
                        "7": " ",
                        "8": " ",
                        "9": " ",
                        "A": " ",
                        "B": " ",
                        "C": " ",
                        "D": " ",
                        "E": " ",
                        "F": " ",
                    }
                }
            }

        json_object = json.dumps(mainData, indent=4)

        if x == False:
            with open(f"{sessionName}.txt", "w") as newFile:
                newFile.write(json_object)
                newFile.write('\n')

    os.chdir('..')
    return mainData



@app.route("/")

@app.route("/")

@app.route("/")


def route():
    return 0



if __name__ == "__main__":
    app.run(debug=True)
