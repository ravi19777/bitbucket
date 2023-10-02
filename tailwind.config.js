/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    "zIndex": {
      '0': 0,
       '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '100': 100,
        'auto': 'auto',
        'own' : 150
    },
    extend: {
      colors: {
        'header-color' : '#D24115',
        'button-background' : '#D24115',
        'sub-header-color': '#1E293B',
        'white-color': '#F0E2C6',
        'header-hover-color' : '#EA580C',
        'search-border-color': '#E2E8EF',
        'search-icon-bg': '#FED7AA',
        'facebook-color': '#3E6FA7',
        'twitter-color': '#08BBEE',
        'whatsapp-color': '#06BA27',
        'linkedin-color': '#0A66C2',
        'footer-secondary-text-color': '#A7AEC4',
        'FAQ-background-color': '#F9FBFD',
        'mobile-menu-background': '#D24115',
        'mobile-menu-text-color': '#FFF7ED',
        'copy-text-color': '#E12115',
        'donate-background-color': '#FFEDD5'
      }
    },
    fontFamily: {
      'devnagri' : ['Noto Sans Devanagari', 'sans-serif'
    ],
      'intervar' : ["Inter var",
      "Inter"],
      'poppins': ['poppins','sans-serif'],
      'sans-serif' : ['sans-serif']
    }
  },
  screens: {
    'sm': '640px',
    'md': '769px',
    'lg': '1023px',
    'xl': '1200px',
    'xxl': '1400px'
  },
  plugins: [],
  corePlugins: {
    backgroundOpacity: false,
  }
}

