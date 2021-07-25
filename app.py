import json

from flask import Flask, render_template

app = Flask(__name__, static_url_path="/", static_folder="static")

app.config['TEMPLATES_AUTO_RELOAD'] = True

with open("./static/projects.json") as file:
    projects = json.load(file)


@app.route('/')
def hello_world():
    return render_template("index.html", projects=projects["projects"])


if __name__ == '__main__':
    app.run()
