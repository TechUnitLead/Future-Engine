import requests

image_url="https://images.crunchbase.com/image/upload/"
url = "https://api.crunchbase.com/v4/data/autocompletes?query=google"

headers = {
    "accept": "application/json",
    "X-cb-user-key": "c7690d363ed8b80d195747203cf2a26f",
    "query":"google"
}

response = requests.get(url, headers=headers)
data =response.json()

companies = []

for entity in data['entities']:
    for entity in data['entities']:
        company_info = {
            'name': entity['identifier']['value'],
            'id': entity['identifier']['uuid'],
             'image_id':image_url+ entity['identifier'].get('image_id', 'N/A'),
            'description': entity['short_description']
             
        }
        
        companies.append(company_info)
    

for company in companies:
    print(f"Name: {company['name']}\nID: {company['id']}\nDescription: {company['description']}\nimage :{company['image_id']}\n")
