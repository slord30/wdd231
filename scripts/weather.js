// select all HTML elements in weather.html document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionFig = document.querySelector('figcaption');

// create required variables for the URL
const myKey = "205cdf0e18d17ea786420f2be24c30d9";
const myLat = "49.75";
const myLong = "6.63";

// construct a full path using template literals
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;

// try to grab the current weather data. This code will catch any errors such as wrong api or a latitude or longitude that is not valid.
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// display the json data onto my web page
function displayResults(data) {
    console.log('hello')
    currentTemp.innerHTML = `${data.main.temp}&deg;F`

    const iconImg = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${iconImg}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionFig.textContent = `${desc}`;   
}

// start the process
apiFetch();
