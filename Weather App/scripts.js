const apiKey = '42777afc6b26917207a27440fe11934b'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

 const loader = document.createElement('img')
    loader.src = 'assets/images/Planet.gif';
    loader.classList.add('loader');
    document.querySelector('.card').appendChild(loader);


async function getWeather(city) {

    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    if (data.cod == 404) {

            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none'; 
        
    } else {
            document.querySelector('.error').style.display = 'none';
            document.querySelector('.weather-icon').src = `assets/images/${data.weather[0].main}.png`
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
            document.querySelector('.weather').style.display = 'block';
       
    }

    
};


searchBtn.onclick = async function btn(){

    if (searchInput.value !== "" && document.querySelector('.error').style.display === 'block') {
        document.querySelector('.error').style.display = 'none';
    }
    loader.style.display = 'block';

    if (document.querySelector('.weather').style.display === 'block') {
        document.querySelector('.weather').style.display = 'none';
        loader.style.display = 'block';
        setTimeout(() => {
       loader.style.display = 'none';
       getWeather(searchInput.value); 
    }, 3000);

    } else {
        setTimeout(() => {
        loader.style.display = 'none';
        getWeather(searchInput.value); 
    }, 3000);
    }
  
}