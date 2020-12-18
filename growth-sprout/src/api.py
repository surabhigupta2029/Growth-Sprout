import requests

response = requests.get(
    "http://harvesthelper.herokuapp.com/api/v1/plants?api_key=e88e4347a828f18f39dd2e42fd2a3e70")
i = 0
while(len(response.json()) > i):
    print(response.json()[i]['id'])
    print('name:', response.json()[i]['name'])
    print('optimal sun:', response.json()[i]['optimal_sun'])
    print('-----------------------------------')
    i += 1
