/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-brutalism light colors for note app
        primary: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        brutal: {
          yellow: '#FFF4B3',      // Soft yellow - slightly darker
          pink: '#FFD4E8',        // Light pink - more visible
          blue: '#C8EEFF',        // Light blue - better contrast
          green: '#C8FFE8',       // Light mint - more visible
          purple: '#E5D4FF',      // Light lavender - darker
          orange: '#FFD9B3',      // Light peach - more visible
          red: '#FFD4D4',         // Light red - better contrast
          cream: '#FFF9F0',       // Cream - warmer
          accent: {
            yellow: '#FFD54F',    // Accent yellow
            pink: '#FF80AB',      // Accent pink
            blue: '#40C4FF',      // Accent blue
            green: '#69F0AE',     // Accent green
            purple: '#B388FF',    // Accent purple
            orange: '#FFB74D',    // Accent orange
          }
        },
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-xl': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-hover': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
    },
  },
  plugins: [],
}
