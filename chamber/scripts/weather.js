// select html elements in the document for current weather
const myDesc = document.querySelector("#description");
const myTemp = document.querySelector("#temperature");
const myHigh = document.querySelector("#high");
const myLow = document.querySelector("#low");
const myHumidity = document.querySelector("#humidity");
const myIcon = document.querySelector("#icon");
// select html elements in the document for forecast
const forecastContainer = document.querySelector("#forecast-3day");


// create required variables for the url
const myKey = "205cdf0e18d17ea786420f2be24c30d9";
const myLat = "30.31171";
const myLong = "-95.45928";
const myCount = 3;

// URLs
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;



// ================= Fetch Current Weather. Grab any errors ===============
async function getCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayCurrentWeather(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// =============== Display Current Weather ===================

// display the json data onto my web page
function displayCurrentWeather(data) {
    myTemp.innerHTML = `<strong>${data.main.temp}</strong> &deg;F`;
    myDesc.innerHTML = data.weather[0].description;
    myHigh.innerHTML = `High: ${data.main.temp_max} &deg;F`;
    myLow.innerHTML = `Low: ${data.main.temp_min} &deg;F`;
    myHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;


    const iconImg = data.weather[0].icon
    const iconsrc = `https://openweathermap.org/img/wn/${iconImg}@2x.png`;
    
    myIcon.setAttribute('src', iconsrc); //assign src attribute
    myIcon.setAttribute('alt', data.weather[0].description); //assign alt attribute
    
}

// ============ Fetch 3-Day Forecast ================
async function getForecast() {
  try {
    const response = await fetch(forecastUrl); // use the global variable
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }        
}


// ============= Display Forecast ==================
function displayForecast(data) {
  // Filter for 18:00:00 (6pm) entries (one per day) and grab first 3
  const daily = data.list.filter(item => item.dt_txt.includes("18:00:00")).slice(0, 3);

// clear any existing content
forecastContainer.innerHTML = "";

  daily.forEach(day => {
    // format the date
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });

    //get weather description and temperature
    const desc = day.weather[0].description;
    const temp = day.main.temp;

    // create a div for each day
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("forecast-day"); //for css styling

    // add inner HTML for this day
    dayDiv.innerHTML = `
        <h3><strong>${date}</strong></h3>
        <p>${desc}</p>
        <p>${temp} &deg;F</p>
    `;

    // append the day to the container
    forecastContainer.appendChild(dayDiv);
  });
}



getCurrentWeather();
getForecast();

