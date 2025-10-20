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
          yellow: '#FFF9C4',      // Soft yellow
          pink: '#FFE0F0',        // Light pink
          blue: '#E0F7FF',        // Light blue
          green: '#E0FFF4',       // Light mint
          purple: '#F3E5FF',      // Light lavender
          orange: '#FFE8CC',      // Light peach
          red: '#FFE5E5',         // Light red
          cream: '#FFFBF0',       // Cream
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
