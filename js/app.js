const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchWeather = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
}
const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text;
}
const displayWeather = (temperature) => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main)

    // set weather icon----

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}