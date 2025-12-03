import axios from 'axios';

const API_KEY = ; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches current weather data for a given city
 * @param {string} city - The name of the city
 * @returns {Promise<Object>} Weather data object
 */
export const fetchWeatherData = async (city) => {
  try {
    if (!city || city.trim() === '') {
      throw new Error('Please enter a city name');
    }

    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Use 'imperial' for Fahrenheit
      },
    });

    // Transform the API response to a cleaner format
    return {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      main: response.data.weather[0].main,
    };
  } catch (error) {
    if (error.response) {
      // API responded with an error
      if (error.response.status === 404) {
        throw new Error('City not found. Please check the spelling and try again.');
      } else if (error.response.status === 401) {
        throw new Error('API key is invalid. Please check your configuration.');
      } else {
        throw new Error('Unable to fetch weather data. Please try again later.');
      }
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error. Please check your internet connection.');
    } else {
      // Something else happened
      throw new Error(error.message || 'An unexpected error occurred.');
    }
  }
};

/**
 * Gets the icon URL from OpenWeatherMap
 * @param {string} iconCode - The icon code from the API
 * @returns {string} Full URL to the weather icon
 */
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
