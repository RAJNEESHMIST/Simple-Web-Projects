
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a936a3947amsha64df39fb36beb3p140d72jsn8d74e876d931',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            if (city == "India" || city == "india") {
                cloud_pct.innerHTML = response.cloud_pct
                temp3.innerHTML = response.temp
                humidity3.innerHTML = response.humidity
                wind_speed3.innerHTML = response.wind_speed
                feels_like1.innerHTML = response.feels_like
                min_temp1.innerHTML = response.min_temp
                max_temp1.innerHTML = response.max_temp
                wind_degrees1.innerHTML = response.wind_degrees
                sunrise1.innerHTML = response.sunrise
                sunset1.innerHTML = response.sunset

            }
            else {
                cloud_pct.innerHTML = 100
                temp3.innerHTML = 32
                wind_speed3.innerHTML = 2
                humidity3.innerHTML = 94
                feels_like1.innerHTML = 11
                min_temp1.innerHTML = 16
                sunrise1.innerHTML = 54155541
                max_temp1.innerHTML = 32
                sunset1.innerHTML = 45482441
                wind_degrees1.innerHTML = 50
            }
            // dubai

            if (city == "Dubai" || city == "dubai") {
                cloud_pct1.innerHTML = response.cloud_pct
                temp4.innerHTML = response.temp
                humidity4.innerHTML = response.humidity
                wind_speed4.innerHTML = response.wind_speed
                feels_like2.innerHTML = response.feels_like
                min_temp2.innerHTML = response.min_temp
                max_temp2.innerHTML = response.max_temp
                wind_degrees2.innerHTML = response.wind_degrees
                sunrise2.innerHTML = response.sunrise
                sunset2.innerHTML = response.sunset
            }
            else {
                cloud_pct1.innerHTML = 85
                temp4.innerHTML = 25
                wind_speed4.innerHTML = 3
                humidity4.innerHTML = 45
                feels_like2.innerHTML = 22
                min_temp2.innerHTML = 18
                sunrise2.innerHTML = 54985541
                max_temp2.innerHTML = 34
                sunset2.innerHTML = 45487941
                wind_degrees2.innerHTML = 60
            }   
            // russia 
            if(city=="Russia"||city=="russia"){
                cloud_pct2.innerHTML = response.cloud_pct
                temp5.innerHTML = response.temp
                humidity5.innerHTML = response.humidity
                wind_speed5.innerHTML = response.wind_speed
                feels_like3.innerHTML = response.feels_like
                min_temp3.innerHTML = response.min_temp
                max_temp3.innerHTML = response.max_temp
                wind_degrees3.innerHTML = response.wind_degrees
                sunrise3.innerHTML = response.sunrise
                sunset3.innerHTML = response.sunset
            }
            else{
                cloud_pct2.innerHTML = 95
                temp5.innerHTML = 30
                wind_speed5.innerHTML = 2.5
                humidity5.innerHTML = 48
                feels_like3.innerHTML = 26
                min_temp3.innerHTML = 19
                sunrise3.innerHTML = 54250541
                max_temp3.innerHTML = 33
                sunset3.innerHTML = 45033941
                wind_degrees3.innerHTML = 57

            }
            // New York
            if(city=="New York"||city=="New york"||city=="new york"){
                cloud_pct3.innerHTML = response.cloud_pct
                temp6.innerHTML = response.temp
                humidity6.innerHTML = response.humidity
                wind_speed6.innerHTML = response.wind_speed
                feels_like4.innerHTML = response.feels_like
                min_temp4.innerHTML = response.min_temp
                max_temp4.innerHTML = response.max_temp
                wind_degrees4.innerHTML = response.wind_degrees
                sunrise4.innerHTML = response.sunrise
                sunset4.innerHTML = response.sunset

            }
            else{cloud_pct3.innerHTML = 88
                temp6.innerHTML = 19
                wind_speed6.innerHTML = 4
                humidity6.innerHTML = 75
                feels_like4.innerHTML = 29
                min_temp4.innerHTML = 26
                sunrise4.innerHTML = 51585541
                max_temp4.innerHTML = 40
                sunset4.innerHTML = 45485744
                wind_degrees4.innerHTML =77

            }
            // England
            if(city=="England"||city=="england"){
                cloud_pct4.innerHTML = response.cloud_pct
                temp7.innerHTML = response.temp
                humidity7.innerHTML = response.humidity
                wind_speed7.innerHTML = response.wind_speed
                feels_like5.innerHTML = response.feels_like
                min_temp5.innerHTML = response.min_temp
                max_temp5.innerHTML = response.max_temp
                wind_degrees5.innerHTML = response.wind_degrees
                sunrise5.innerHTML = response.sunrise
                sunset5.innerHTML = response.sunset
            }
            else{
                cloud_pct4.innerHTML = 79
                temp7.innerHTML = 20
                wind_speed7.innerHTML =2.5
                humidity7.innerHTML = 97
                feels_like5.innerHTML = 09
                min_temp5.innerHTML = 05
                sunrise5.innerHTML = 22555541
                max_temp5.innerHTML =25
                sunset5.innerHTML = 11512741
                wind_degrees5.innerHTML =88

            }
            // France
            if(city=="France"||city=="france"){
                cloud_pct5.innerHTML = response.cloud_pct
                temp8.innerHTML = response.temp
                humidity8.innerHTML = response.humidity
                wind_speed8.innerHTML = response.wind_speed
                feels_like6.innerHTML = response.feels_like
                min_temp6innerHTML = response.min_temp
                max_temp6.innerHTML = response.max_temp
                wind_degrees6.innerHTML = response.wind_degrees
                sunrise6.innerHTML = response.sunrise
                sunset6.innerHTML = response.sunset
            }
            else{
                cloud_pct5.innerHTML =89
                temp8.innerHTML = 17
                wind_speed8.innerHTML = 3.5
                humidity8.innerHTML =99
                feels_like6.innerHTML =8
                min_temp6.innerHTML = 6
                sunrise6.innerHTML = 54785541
                max_temp6.innerHTML =18
                sunset6.innerHTML = 45957941
                wind_degrees6.innerHTML =90

            }
        })
        .catch (err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("New Delhi")