
const apiKey = '9bb9cff291msh91816893b1c05dep13b5d4jsnae4f85938cbc';
const apiHost = 'yahoo-weather5.p.rapidapi.com';

const fetchWeather = async (city) => {
  const url = `https://${apiHost}/weather?location=${city}&format=json&u=f`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Update HTML
    document.getElementById('cityName').innerText = `Weather in ${result.location.city}`;
    document.getElementById('temp').innerText = result.current_observation.condition.temperature + ' °F';
    document.getElementById('condition').innerText = result.current_observation.condition.text;
    document.getElementById('humidity').innerText = result.current_observation.atmosphere.humidity + ' %';
    document.getElementById('wind').innerText = result.current_observation.wind.speed + ' mph';
    document.getElementById('wind_dir').innerText = result.current_observation.wind.direction;
    document.getElementById('sunrise').innerText = result.current_observation.astronomy.sunrise ;
    document.getElementById('sunset').innerText = result.current_observation.astronomy.sunset ;  

    document.getElementById('d1day').innerText = result.forecasts[0].day;
    document.getElementById('d1hightemp').innerText = result.forecasts[0].high;
    document.getElementById('d1lowtemp').innerText = result.forecasts[0].low;
    document.getElementById('d1cond').innerText = result.forecasts[0].text; 

    document.getElementById('d2day').innerText = result.forecasts[1].day;
    document.getElementById('d2hightemp').innerText = result.forecasts[1].high;
    document.getElementById('d2lowtemp').innerText = result.forecasts[1].low;
    document.getElementById('d2cond').innerText = result.forecasts[1].text;
    
    document.getElementById('d3day').innerText = result.forecasts[2].day;
    document.getElementById('d3hightemp').innerText = result.forecasts[2].high;
    document.getElementById('d3lowtemp').innerText = result.forecasts[2].low;
    document.getElementById('d3cond').innerText = result.forecasts[2].text;

    document.getElementById('d4day').innerText = result.forecasts[3].day;
    document.getElementById('d4hightemp').innerText = result.forecasts[3].high;
    document.getElementById('d4lowtemp').innerText = result.forecasts[3].low;
    document.getElementById('d4cond').innerText = result.forecasts[3].text;

    document.getElementById('d5day').innerText = result.forecasts[4].day;
    document.getElementById('d5hightemp').innerText = result.forecasts[4].high;
    document.getElementById('d5lowtemp').innerText = result.forecasts[4].low;
    document.getElementById('d5cond').innerText = result.forecasts[4].text;

    document.getElementById('d6day').innerText = result.forecasts[5].day;
    document.getElementById('d6hightemp').innerText = result.forecasts[5].high;
    document.getElementById('d6lowtemp').innerText = result.forecasts[5].low;
    document.getElementById('d6cond').innerText = result.forecasts[5].text;

    document.getElementById('d7day').innerText = result.forecasts[6].day;
    document.getElementById('d7hightemp').innerText = result.forecasts[6].high;
    document.getElementById('d7lowtemp').innerText = result.forecasts[6].low;
    document.getElementById('d7cond').innerText = result.forecasts[6].text;

  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Could not fetch weather data. Please try again.');
  }
};

// Handle form submit
document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Fetch default city on load
fetchWeather('Delhi');

