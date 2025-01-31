// button par event listner lagao
const butt = document.getElementById("button");
// input read karo city ka
butt.addEventListener('click', () => {
    const place = document.getElementById("city").value;

    
    // function for printing the data on the screen
     function updateTemp(data)
    {
         const element = document.getElementById("weather-info")
        // element.innerHTML = `Current Tempreture in celcius: ${data.current.temp_c} <br>Current Tempreture in Farhenite: ${data.current.temp_f}`;
        element.innerHTML = `
        <p> Temperature in Celsius: ${data.current.temp_c}°C</p><br>
        <p> Temperature in Fahrenheit: ${data.current.temp_f}°F</p><br>
        <p> Wind speed :${data.current.wind_kph}kph</p>
    `;
    }
    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=5bb9f8fa0c81489e8e0172444253001&q=${place}&aqi=yes`)
    prom
        .then(response =>response.json())
        .then(data => updateTemp(data));
})
