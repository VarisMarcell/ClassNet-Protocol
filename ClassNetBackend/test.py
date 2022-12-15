import os
import json

def fetchData(sessionKey):
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
    os.chdir('..')

    return newData