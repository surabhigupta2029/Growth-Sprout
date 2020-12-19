import requests
import json
response = requests.get(
    "http://harvesthelper.herokuapp.com/api/v1/plants?api_key=e88e4347a828f18f39dd2e42fd2a3e70")
i = 0
result = ''
# while(len(response.json()) > i):
#     result += response.json()[i]['name']
#     result += response.json()[i]['optimal_sun']
#     result += response.json()[i]['watering']

#     print('-----------------------------------')
#     i += 1
# print(len(response.json()))
mintemp1 = "10"
mintemp2 = "10.1"
maxtemp1 = "10"
maxtemp2 = "10.1"
minp1 = "0"
minp2 = "1"
partUrl = "range[minimum_temperature]=" + mintemp1+","+mintemp2 + \
    "&range[maximum_temperature]="+maxtemp1+","+maxtemp2+"&range[minimum_precipication]=" + \
    minp1+","+minp2+"&filter[vegetable]=true"
# trefleRes = requests.get(
#     "https://trefle.io/api/v1/species?token=XS6udQ_VAHaEuhEuSjowAhOyrmf6XqjYHqkMXCgHYbg&filter[edible_part]=roots,stem,leaves,flowers,fruits,seeds&filter_not[common_name]=null")
trefleRes = requests.get(
    "https://trefle.io/api/v1/plants?token=XS6udQ_VAHaEuhEuSjowAhOyrmf6XqjYHqkMXCgHYbg&"+partUrl+"filter[edible_part]=roots,stem,leaves,fruits,seeds&filter_not[common_name]=null")

# print(trefleRes.json())
j = 0
trefleStr = ''
textfile = open('plantInfo.txt', 'w')
#print('len', len(trefleRes.json()))
# print(trefleRes.json())
jsonObj = json.dumps((trefleRes.json()))
jsonObj2 = json.loads(jsonObj)
length = len(jsonObj2['data'])
while length > 0:
    value = jsonObj2['data']
    #print('data', value[j]['common_name'])
    j += 1
    length = length - 1

k = 0
length = len(jsonObj2['data'])
while(length > k):
    commonName = trefleRes.json()['data'][k]['common_name']
    if commonName not in trefleStr:
        trefleStr += commonName
        trefleStr += ","
        trefleStr += trefleRes.json()['data'][k]['scientific_name']
        trefleStr += ","
        trefleStr += trefleRes.json()['data'][k]['image_url']
        trefleStr += "\n"
    k += 1
textfile.write(trefleStr)
textfile.close()
print(trefleStr)


zipcode = "94538"
URL = "https://phzmapi.org/"+zipcode+".json"
zipcodeRes = requests.get(URL)

# print(zipcodeRes.json())
