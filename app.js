const API_KEY = '70bdbbdd9738ad007466bf51752fd366';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

const getWeatherData = (location) => {
  return fetch(`${API_URL}${location}`)
    .then(response => response.json())
    .catch(error => console.error(`Error fetching weather data: ${error}`));
}

const displayWeatherData = async () => {
  const location = document.querySelector('#location').value;
  try {
    const weatherData = await getWeatherData(location);
    document.querySelector('#temperature').textContent = `${weatherData.main.temp}°C`;
    document.querySelector('#description').textContent = weatherData.weather[0].description;
  } catch (error) {
    console.error(`Error displaying weather data: ${error}`);
  }
}
const handleFormSubmit = (event) => {
  event.preventDefault();
    displayWeatherData();
}
document.querySelector('#weather-form').addEventListener('submit', handleFormSubmit);
 
