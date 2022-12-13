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


# random information that needs to be auto-generated yet unique
session_key = str(uuid.uuid4())[:6]
admin_key = str(uuid.uuid4())

new_session = False

os.chdir(os.path.join(".", "Sessions"))

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



if __name__ == "__main__":
    import doctest
    doctest.testmod()

    newSession(session_key, admin_key)

    