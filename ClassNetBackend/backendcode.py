from flask import Flask
from flask_cors import CORS, cross_origin

# flask --app backendcode.py run
# pip install Flask-Cors 

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = "Content-Type"


app = Flask(__name__)

@app.route("/")
@cross_origin()
def home():
    response_body = {
        "name": "Ryan"
    }
    return response_body