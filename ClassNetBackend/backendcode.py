from flask import Flask, request, redirect 
from flask_cors import CORS, cross_origin

import os
import uuid
import json

""" ENDPOINTS """
# / - lists all sessions
# /createSession - creates a session
# /joinData?sessionKey=x - returns all data
# /adminData?sessionKey=x&adminKey=x - returns all data
# /studentData?sessionKey=x&seatPosition=x - returns session name seat
# /joinSession?sessionKey=x&userName=x&seatPosition=x
# /removeSeat?sessionKey=x&seatPosition=x - removes a seat obviously

# /createPacket
# /name?name=x - a test endpoint

# venv\Scripts\Activate.ps1
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

    'messages' : {
        'A1' : [],
        'A2' : [],
        'A3' : [],
        'A4' : [],
        'A5' : [],
        'A6' : [],
        'A7' : [],
        'A8' : [],
        'A9' : [],
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
    
    'packets' : [
        {
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
    },

    ]
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


@app.route("/createSession", methods=["POST", "GET"])
@cross_origin()
def createSession():
    if request.method == "POST":
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            jsonData = request.json
            return jsonData
        else:
            response = {
                'canProceed' : False,
                'statusCode' : 400,
                'message' : 'Content-Type not supported!',
                'error' : 'Bad Request'
            }
            return response
    else:
        os.chdir(os.path.join(".", "Sessions"))
        sessionName = str(uuid.uuid4())[:6]
        adminKey = str(uuid.uuid4())
        print("somthin'")

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
        usefulData = {
            'sessionKey' : newData["sessionKey"],
            'adminKey' : newData["adminKey"]
        }
        return usefulData


def fetchData(sessionKey):
    os.chdir(os.path.join(".", "Sessions"))

    counter = 0
    while True:
        if counter >= len(os.listdir()):
            os.chdir('..')
            response = {
                'statusCode' : 404,
                'message' : 'A session with that key could not be found.',
                'error' : 'Not Found'
            }
            return response
        elif f"{sessionKey}.txt" == os.listdir()[counter]:
            sessionFile = open(f"{sessionKey}.txt", "r")
            sessionData = sessionFile.read()
            break
        else:
            counter += 1
    
    newData = json.loads(sessionData)
    sessionFile.close()
    os.chdir('..')

    return newData


@app.route("/joinData", methods=["GET"])
def getJoinData():
    """Displays all the current data about a given session."""
    sessionKey = request.args.get('sessionKey')
    return fetchData(sessionKey)


@app.route("/adminData")
def getAdminData():
    sessionKey = request.args.get('sessionKey')
    adminKey = request.args.get('adminKey')

    x = fetchData(sessionKey)
    if x['adminKey'] != adminKey:
        response = {
            'canProceed' : False,
            'statusCode' : 403,
            'message' : 'Invalid adminKey',
            'error' : 'Forbidden'
        }
        return response
    else:
        return x


@app.route("/studentData")
def getStudentData():
    sessionKey = request.args.get('sessionKey')
    seatNum = request.args.get('seatPosition')


@app.route("/joinSession", methods=["POST", "GET"])
def joinSession():
    if request.method == "POST":
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            jsonData = request.json
            return jsonData
        else:
            response = {
                'canProceed' : False,
                'statusCode' : 400,
                'message' : 'Content-Type not supported!',
                'error' : 'Bad Request'
            }
            return response
        

    sessionKey = request.args.get('sessionKey')
    userName = request.args.get('userName')
    seatNum = request.args.get('seatPosition')

    if seatNum == None:
        response = {
            'canProceed' : False,
            'statusCode' : 400,
            'message' : 'You must provide a valid seatNum.',
            'error' : 'Bad Request'
        }
        return response
    if sessionKey == None:
        response = {
            'canProceed' : False,
            'statusCode' : 400,
            'message' : 'You must provide a valid sessionKey.',
            'error' : 'Bad Request'
        }
        return response
    if userName == None:
        response = {
            'canProceed' : False,
            'statusCode' : 400,
            'message' : 'You must provide a valid userName.',
            'error' : 'Bad Request'
        }
        return response

    newData = fetchData(sessionKey)
    if newData["seats"][f"{seatNum}"] == '':
        newData["seats"][f"{seatNum}"] = userName
    else:
        response = {
            'canProceed' : False,
            'statusCode' : 400,
            'message' : 'You must provide a valid seatNum.',
            'error' : 'Bad Request'
        }
        return response

    originalFile = f"{sessionKey}.txt"
    oldFile = 'temp.txt'

    os.chdir(os.path.join(".", "Sessions"))
    os.rename(originalFile, oldFile)
    json_object = json.dumps(newData, indent=4)

    with open(f"{sessionKey}.txt", "w") as newFile:
        newFile.write(json_object)
        newFile.write('\n')

    os.remove(oldFile)
    os.chdir('..')

    response_body = {
        "canProceed" : True,
        "sessionKey": sessionKey,
        "userName": userName,
        "seatNum": seatNum,
    }
    return response_body


@app.route("/removeSeat", methods=["POST", "GET"])
def removeSeat():
    if request.method == "POST":
        return "..."

    sessionKey = request.args.get('sessionKey')
    seatNum = request.args.get('seatPosition')

    if seatNum == None:
        response = {
            'statusCode' : 400,
            'message' : 'You must provide a valid seatNum.',
            'error' : 'Bad Request'
        }
        return response
    if sessionKey == None:
        response = {
            'statusCode' : 400,
            'message' : 'You must provide a valid sessionKey.',
            'error' : 'Bad Request'
        }
        return response

    newData = fetchData(sessionKey)

    if newData["seats"][f"{seatNum}"] != '':
        newData["seats"][f"{seatNum}"] = ''
    else:
        response = {
            'statusCode' : 400,
            'message' : 'You must provide a valid seatNum.',
            'error' : 'Bad Request'
        }
        return response

    originalFile = f"{sessionKey}.txt"
    oldFile = 'temp.txt'

    os.chdir(os.path.join(".", "Sessions"))
    os.rename(originalFile, oldFile)
    json_object = json.dumps(newData, indent=4)

    with open(f"{sessionKey}.txt", "w") as newFile:
        newFile.write(json_object)
        newFile.write('\n')

    os.remove(oldFile)
    os.chdir('..')

    outputData = {
        'statusCode' : 200,
        'message' : f"{seatNum} has been removed successfully.",
        'error' : 'OK'
    }
    return f"{seatNum} has been removed from the classroom."


@app.route("/createPacket", methods=["POST", "GET"])
def createPacket():
    pass


# @app.route("/createMessage")
# def createMessage():
#     sessionKey = request.args.get('sessionKey')

#     newData = fetchData(sessionKey)
#     if newData["seats"][f"{seatNum}"] != '':
#         newData["seats"][f"{seatNum}"] = ''
#     else:
#         response = {
#             'statusCode' : 400,
#             'message' : 'You must provide a valid seatNum.',
#             'error' : 'Bad Request'
#         }
#         return response

#     originalFile = f"{sessionKey}.txt"
#     oldFile = 'temp.txt'

#     os.chdir(os.path.join(".", "Sessions"))
#     os.rename(originalFile, oldFile)
#     json_object = json.dumps(newData, indent=4)

#     with open(f"{sessionKey}.txt", "w") as newFile:
#         newFile.write(json_object)
#         newFile.write('\n')

#     os.remove(oldFile)
#     os.chdir('..')



def route():
    return 0



if __name__ == "__main__":
    app.run(debug=True)
