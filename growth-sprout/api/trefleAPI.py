import requests
import json
import weather

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
mintemp1 = "5"
mintemp2 = "23"
maxtemp1 = "100"
maxtemp2 = "100"
#humidity = str(weather.humidity)
humidity = "20"

minp1 = "0"
minp2 = "10"
light = str(weather.uv_index)

# partUrl = "range[minimum_temperature]=" + mintemp1+","+mintemp2 + \
#     "&range[maximum_temperature]="+maxtemp1+","+maxtemp2+"&range[minimum_precipication]=" + \
#     minp1+","+minp2+"&filter[vegetable]=true&filter[light]=" + \
#     light+"&filter[atmospheric_humidity]="+humidity
partUrl = "filter[atmospheric_humidity]="+humidity + \
    "&range[minimum_temperature]=" + mintemp1+","+mintemp2
# trefleRes = requests.get(
#     "https://trefle.io/api/v1/species?token=XS6udQ_VAHaEuhEuSjowAhOyrmf6XqjYHqkMXCgHYbg&filter[edible_part]=roots,stem,leaves,flowers,fruits,seeds&filter_not[common_name]=null")
trefleRes = requests.get(
    "https://trefle.io/api/v1/plants?token=XS6udQ_VAHaEuhEuSjowAhOyrmf6XqjYHqkMXCgHYbg&"+partUrl+"&filter_not[common_name]=null")

# print(trefleRes.json())
j = 0
trefleStr = ''
textfile = open('plantInfo.txt', 'w')
#print('len', len(trefleRes.json()))
# print(trefleRes.json())
jsonObj = json.dumps((trefleRes.json()))
jsonObj2 = json.loads(jsonObj)
length = len(jsonObj2['data'])
tdata = {}
tdata['elements'] = []
while length > 0:
    value = jsonObj2['data']
    tdata['elements'].append({
        'common_name': value[j]['common_name'],
        'scientific_name': value[j]['scientific_name'],
        'image': value[j]['image_url']
    })
    j += 1
    length = length - 1
json_object = json.dumps(tdata, indent=4)
with open("test.json", "w") as outfile:
    outfile.write(json_object)
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
