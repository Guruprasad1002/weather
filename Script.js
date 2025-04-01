const API_KEY="1e856955b892da40ac08fae4a049f299";
const urlparam=new URLSearchParams(window.location.search);
var city=urlparam.get('city');

const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

fetch(API_URL)
.then(res=>res.json())
.then(data=>{console.log(data);

document.getElementById("temperature").innerText=data.main.temp;
document.getElementById("city").innerText=data.name;
document.getElementById("country").innerText=data.sys.country;
document.getElementById("clouds").innerText=data.weather[0].main;
document.getElementById("description").innerText=data.weather[0].description;
document.getElementById("temp").innerText=data.main.temp;
document.getElementById("wind_speed").innerText=data.wind.speed;
document.getElementById("humidity").innerText=data.main.humidity;
document.getElementById("desc_image").src=` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
})