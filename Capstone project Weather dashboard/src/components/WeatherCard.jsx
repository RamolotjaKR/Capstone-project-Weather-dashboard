import React from 'react';
import { getWeatherIconUrl } from '../services/weatherApi';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center text-white px-4 sm:px-0">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-2xl animate-fadeIn">
          <svg
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 opacity-50 animate-pulse-soft"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Welcome to Weather Dashboard</h2>
          <p className="text-base sm:text-lg opacity-80">
            Search for a city to see current weather conditions
          </p>
        </div>
      </div>
    );
  }

  const {
    city,
    country,
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    description,
    icon,
    main,
  } = weatherData;

  return (
    <div className="w-full max-w-2xl mx-auto animate-fadeIn px-4 sm:px-0">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 break-words">
            {city}, {country}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 capitalize">{description}</p>
        </div>

        {/* Main Weather Display */}
        <div className="flex flex-col md:flex-row items-center justify-around mb-8">
          {/* Temperature */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={getWeatherIconUrl(icon)}
              alt={`${main} weather icon`}
              className="w-24 h-24 sm:w-32 sm:h-32"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                {temperature}°
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/70">
                Feels like {feelsLike}°C
              </div>
            </div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Humidity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex items-center touch-manipulation">
            <div className="bg-blue-500/30 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">
                Humidity
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{humidity}%</div>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex items-center touch-manipulation">
            <div className="bg-blue-500/30 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wide">
                Wind Speed
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {windSpeed} <span className="text-lg sm:text-xl">m/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
