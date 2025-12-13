import React from 'react';

const LoadingSpinner = ({ message = 'Loading weather data...' }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center animate-fadeIn">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 shadow-2xl">
        {/* Animated Weather Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-24 h-24 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          {/* Rotating ring */}
          <svg className="absolute inset-0 w-24 h-24 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-semibold text-white mb-3">{message}</h2>
        
        {/* Loading Dots Animation */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>

        <p className="text-white/70 mt-4 text-sm">Please wait a moment</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
