const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="340675dbc9a7e3ba8f1c8b459a4a4309";
const btn=document.querySelector(".search btn");
const city = document.querySelector(".search input");

async function weather(city){
    const res = await fetch(api +city+ `&appid=${apikey}`);
    const data = await res.json();
    console.log(data);


    document.getElementById('temp').innerHTML=`<P>${data.main.temp}<sup>o</sup>c</P>`
    document.getElementById('hum').innerHTML=`<p>${data.main.humidity}%</p>`
    document.getElementById('wind').innerHTML=`<p>${data.wind.speed}km/h</p>`

    
}

btn.addEventListener("click", ()=>{
   
    weather(city.value);
    city.value=" ";
})