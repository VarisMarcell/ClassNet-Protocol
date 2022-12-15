""" Server-draft for 215 final project, ClassNet """
# Sam Tooley
# Caeden Scott
# CPTR-215
# 12/6/2022 - first draft
# 12/9/2022 - another version
# 12/13/2022 - rreeeeee

import random
import os
import uuid
import json



# random information that needs to be auto-generated yet unique
session_key = str(uuid.uuid4())[:6]
admin_key = str(uuid.uuid4())

new_session = False

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

    return mainData


if __name__ == "__main__":
    import doctest
    doctest.testmod()

    createSession()

    