# Weather Dashboard 🌤️

A modern, responsive weather dashboard built with React, Vite, and Tailwind CSS. Get real-time weather information for any city worldwide using the OpenWeatherMap API.

## Features

**Real-time Weather Data**: Fetch current weather conditions for any city 
**Smart Search**: Easy-to-use search functionality with validation
**Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
**Auto-refresh**: Automatically updates weather data every 5 minutes
**Beautiful UI**: Modern glassmorphism design with smooth animations 
**Fast Performance**: Built with Vite for lightning-fast development and builds
**Error Handling**: Comprehensive error handling with user-friendly messages

## Weather Information Displayed

-  Current temperature (Celsius)
-  "Feels like" temperature
-  Humidity percentage
-  Wind speed
-  Weather condition with icon
-  City and country

## Prerequisites

Before running this project, make sure you have:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

## Getting Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Create a free account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy the API key for use in the next step

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd "c:\Users\kr14r\OneDrive\Desktop\Capstone project Weather dashboard"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your API key:**
   
   Open `src/services/weatherApi.js` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key:
   
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

   **Alternative: Using Environment Variables (Recommended)**
   
   Create a `.env` file in the root directory:
   ```
   VITE_WEATHER_API_KEY=your_actual_api_key_here
   ```
   
   Then update `src/services/weatherApi.js`:
   ```javascript
   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

3. **Start searching for weather!**
   - Enter a city name in the search bar
   - Click "Search" or press Enter
   - View real-time weather information

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Netlify

1. **Install Netlify CLI (optional):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy using Netlify CLI:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

   Or simply drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

4. **Set environment variables in Netlify:**
   - Go to Site Settings > Environment Variables
   - Add `VITE_WEATHER_API_KEY` with your API key

### Deploy to Vercel

1. **Install Vercel CLI (optional):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel:**
   - Go to Project Settings > Environment Variables
   - Add `VITE_WEATHER_API_KEY` with your API key

### Alternative: GitHub Integration

Both Netlify and Vercel support automatic deployments from GitHub:

1. Push your code to a GitHub repository
2. Connect your repository to Netlify or Vercel
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in the platform settings

## Project Structure

```
weather-dashboard/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── ErrorMessage.jsx
│   ├── services/        # API services
│   │   └── weatherApi.js
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **OpenWeatherMap API** - Weather data provider

## Features Explained

### Auto-refresh
The dashboard automatically refreshes weather data every 5 minutes when enabled. You can toggle this feature on/off using the "Auto-refresh" button.

### Manual Refresh
Click the "Refresh" button to manually update the weather data for the current city.

### Responsive Design
The application uses Tailwind CSS's responsive utilities to provide an optimal viewing experience across all devices:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

### Error Handling
Comprehensive error handling for:
- Invalid city names
- Network connection issues
- API authentication errors
- Invalid API responses

## Troubleshooting

### API Key Issues
- Ensure your API key is correctly entered
- Check that the API key is activated (may take a few minutes after generation)
- Verify you haven't exceeded the free tier limits

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### CORS Issues
- The OpenWeatherMap API supports CORS, so this shouldn't be an issue
- If you encounter CORS errors, ensure you're using the correct API endpoint

## Contributing

Feel free to fork this project and submit pull requests with improvements!

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Check the [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- Review the [React Documentation](https://react.dev/)
- Check [Vite Documentation](https://vitejs.dev/)

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap
- Built with love using React and Tailwind CSS

---

**Happy Weather Tracking! **

