import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchWeatherData } from './services/weatherApi';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastSearchedCity, setLastSearchedCity] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Auto-refresh weather data every 5 minutes
  useEffect(() => {
    if (!lastSearchedCity || !autoRefresh) return;

    const intervalId = setInterval(() => {
      handleSearch(lastSearchedCity, true); // Silent refresh
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(intervalId);
  }, [lastSearchedCity, autoRefresh]);

  const handleSearch = async (city, isSilentRefresh = false) => {
    if (!isSilentRefresh) {
      setIsLoading(true);
      setError('');
    }

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setLastSearchedCity(city);
      setError('');
    } catch (err) {
      setError(err.message);
      if (!isSilentRefresh) {
        setWeatherData(null);
      }
    } finally {
      if (!isSilentRefresh) {
        setIsLoading(false);
      }
    }
  };

  const handleRefresh = () => {
    if (lastSearchedCity) {
      handleSearch(lastSearchedCity);
    }
  };

  const handleDismissError = () => {
    setError('');
  };

  const toggleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh);
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            ☁️ Weather Dashboard
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 px-4">
            Get real-time weather information for any city worldwide
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Error Message */}
        <ErrorMessage message={error} onDismiss={handleDismissError} />

        {/* Loading State */}
        {isLoading && <LoadingSpinner message="Fetching weather data..." />}

        {/* Control Buttons */}
        {weatherData && !isLoading && (
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 px-4 animate-slideIn">
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/30 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg transition-all duration-200 flex items-center gap-2 touch-manipulation"
              aria-label="Refresh weather data"
            >
              <svg
                className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh
            </button>

            <button
              onClick={toggleAutoRefresh}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 touch-manipulation ${
                autoRefresh
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
              }`}
              aria-label={`Auto-refresh is ${autoRefresh ? 'enabled' : 'disabled'}. Click to ${autoRefresh ? 'disable' : 'enable'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}
            </button>
          </div>
        )}

        {/* Weather Card */}
        {!isLoading && <WeatherCard weatherData={weatherData} />}

        {/* Last Updated Info */}
        {weatherData && !isLoading && (
          <div className="text-center mt-6 text-white/70 text-xs sm:text-sm px-4">
            Last updated: {new Date().toLocaleTimeString()}
            {autoRefresh && (
              <span className="hidden sm:inline"> • Auto-refreshes every 5 minutes</span>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-8 sm:mt-12 text-white/70 text-xs sm:text-sm px-4">
          <p>
            Powered by{' '}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
              aria-label="Visit OpenWeatherMap website"
            >
              OpenWeatherMap API
            </a>
          </p>
          <p className="mt-2">Built with React, Vite, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
