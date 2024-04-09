const apiKey ="5de9542d3f6aac7958fc3d433fcec834";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_Box = document.querySelector('.search');
const search_Btn = document.querySelector(' button');
const weatherIcon = document.querySelector('.weather_Icon');


async function chechWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data =await response.json()

    console.log(data)

    document.querySelector('.city_Name').innerHTML= data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind').innerHTML = data.wind.speed +"km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./img/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./img/images/snow.png";
    }

};
search_Btn.addEventListener("click",()=>{
    chechWeather(search_Box.value);
})
