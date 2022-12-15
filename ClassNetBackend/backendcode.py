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

""" HERE IS A TON OF DATA FOR newSession"""
mainData = {
    'sessionKey' : '',
    'adminKey' : '',

    
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


@app.route("/")
def listSessions():
    """Displays all sessions that are stored in the Sessions directory."""
    os.chdir(os.path.join(".", "Sessions"))
    sessionList = []
    for i in os.listdir():
        sessionList.append(i)
    x = {
        "sessions" : sessionList
    }

    os.chdir('..')
    return x


@app.route("/name", methods=['GET'])
def home():
    # response_body = {
    #     "name": "Ryan"
    # }
    # return response_body

    args = request.args
    print(args.get("name"))
    return args.to_dict()

# params = request.body
# session = params.session


@app.route("/joinData", methods=["GET"])
def getJoinData():
    """Displays all the current data about a given session."""
    sessionKey = request.args.get('sessionKey')
    newData = ''
    os.chdir(os.path.join(".", "Sessions"))
    for i in os.listdir():
        if f"{sessionKey}.txt" == i:
            newFile = open(f"{sessionKey}.txt", "r")
            newData = newFile.read()

    os.chdir('..')
    
    x = json.loads(newData)
    return x
    

@app.route("/joinSession", methods=["POST", "GET"])
def joinSession():
    if request.method == "POST":
        return "..."

    sessionKey = request.args.get('sessionKey')
    userName = request.args.get('userName')
    seatNum = request.args.get('seatPosition')

    os.chdir(os.path.join(".", "Sessions"))

    counter = 0
    while True:
        if counter >= len(os.listdir()):
            os.chdir('..')
            return "Invalid Session"
        elif f"{sessionKey}.txt" == os.listdir()[counter]:
            sessionFile = open(f"{sessionKey}.txt", "r")
            sessionData = sessionFile.read()
            break
        else:
            counter += 1
    
    newData = json.loads(sessionData)
    sessionFile.close()
    if newData["seats"][f"{seatNum}"] == '':
        newData["seats"][f"{seatNum}"] = userName
    else:
        os.chdir('..')
        return "Invalid Seat"

    originalFile = f"{sessionKey}.txt"
    oldFile = 'temp.txt'

    os.rename(originalFile, oldFile)
    json_object = json.dumps(newData, indent=4)

    with open(f"{sessionKey}.txt", "w") as newFile:
        newFile.write(json_object)
        newFile.write('\n')

    os.remove(oldFile)
    os.chdir('..')

    response_body = {
        "sessionKey": sessionKey,
        "userName": userName,
        "seatNum": seatNum,
    }
    return response_body


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

        newData = mainData
        newData["sessionKey"] = sessionName
        newData["adminKey"] = adminKey

        json_object = json.dumps(newData, indent=4)

        if x == False:
            with open(f"{sessionName}.txt", "w") as newFile:
                newFile.write(json_object)
                newFile.write('\n')

    os.chdir('..')
    return mainData



@app.route("/")
def new():
    pass


def route():
    return 0



if __name__ == "__main__":
    app.run(debug=True)
