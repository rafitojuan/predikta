/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'black': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'electric-blue': '#0066FF',
        'neon-pink': '#FF0066',
        'lime-green': '#00FF66',
        'neon-orange': '#FF6600',
        'neon-purple': '#6600FF',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-neon': {
          '0%': { boxShadow: '0 0 5px #ff0066, 0 0 10px #ff0066, 0 0 15px #ff0066' },
          '100%': { boxShadow: '0 0 10px #ff0066, 0 0 20px #ff0066, 0 0 30px #ff0066' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 20px #ff0066',
        'neon-blue': '0 0 20px #0066ff',
        'neon-green': '0 0 20px #00ff66',
      },
    },
  },
  plugins: [],
};
