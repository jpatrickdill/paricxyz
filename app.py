import json
import os
from flask import Flask, render_template, request, redirect

indev = True if os.environ.get("dev") else False

print(indev)
server_name = None
if not indev:
    server_name = "paric.xyz"

app = Flask(__name__, static_url_path="/", static_folder="static")
app.config["TEMPLATES_AUTO_RELOAD"] = True

with open("./static/projects.json") as file:
    projects = json.load(file)


@app.before_request
def before_request():
    if not indev:
        if not request.is_secure:
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.route("/")
def hello_world():
    return render_template("index.html", projects=projects["projects"])


@app.route("/resume")
def portfolio():
    return render_template("portfolio.html", projects=projects["projects"])


if __name__ == "__main__":
    app.run(debug=True)  # server_name=server_name, debug=True)
