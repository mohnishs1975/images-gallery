from flask import Flask, request
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL='https://api.unsplash.com/photos/random'
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")

app = Flask(__name__)
CORS(app)

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Authorization": "Client-ID " + UNSPLASH_KEY,
        "Accept-Version": "v1"

    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL,headers=headers, params=params)
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(debug=True)