import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org';

const API_key = 'e2deec3919b698e6e2da44b14544310d';

async function getWeather(city) {
  const weatherData = await axios.get(
    `${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_key}`,
  );
  const result = weatherData.data;
  return result;
}

export default getWeather;
