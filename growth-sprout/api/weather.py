import requests
import json
import configEx

API_KEY = configEx.weatherAPIKey

city = "campbell"
state = "ca"
country = "us"

URL = "https://api.openweathermap.org/data/2.5/weather?q={city},{state},{country}&appid={API_KEY}".format(city=city, state=state, country=country, API_KEY=API_KEY)
response = requests.get(URL)

data = response.json()
humidity = data["main"]["humidity"]

weather_main = data["weather"][0]["main"]
weather_description = data["weather"][0]["description"]

uv_index = 0

if(weather_main == "Thunderstorm" or 
weather_main == "Drizzle" or 
weather_main == "Rain" or 
weather_main == "Snow" or 
weather_main == "Atmosphere"):
    uv_index = 0
elif(weather_main == "Clouds"):
    if(weather_description == "overcast clouds: 85-100%"):
        uv_index = 0
    else:
        uv_index = 5
else:
    uv_index = 10

print('UV Index and Humidity')
print(humidity)
print(uv_index)
