from flask import Flask, request, jsonify, render_template 
import requests
app = Flask(__name__,template_folder='template',static_folder='static')

CRUNCHBASE_API_KEY = 'c7690d363ed8b80d195747203cf2a26f'
image_url="https://images.crunchbase.com/image/upload/"

@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/main')
def main():
    return render_template('main.html') 




@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify({'error': 'No query provided'}), 400

    url = f"https://api.crunchbase.com/v4/data/autocompletes?"
    params = {
        "accept": "application/json",
         'query': query,
        'user_key': CRUNCHBASE_API_KEY
    }
    response = requests.get(url, params=params)

    if response.status_code != 200:
        return jsonify({'error': 'Error fetching data from Crunchbase'}), response.status_code

    data = response.json()
    
    return jsonify(data)
   


