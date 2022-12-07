""" Server-draft for 215 final project, ClassNet """
# Sam Tooley
# Caeden Scott
# CPTR-215
# 12/6/2022 - first draft

import random
import os


new_session = False

os.chdir(os.path.join(".", "Sessions"))

random_number = random.randint(0, 10)

session_key = str(random_number)

def newSession(name):
    x = False
    for i in os.listdir():
        print(i)
        if i.endswith('.txt'):
            if i != (f"{name}.txt"):
                x = True
    if x:
        newFile = open(f"{name}.txt", "w")
    return newFile if x else 3
        
if __name__ == "__main__":
    new_session = True
    newSession(session_key)
    