/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glow: {
         '0%, 100%': {
            boxShadow: '0 0 10px #6b7280, 0 0 20px #6b7280',
          },
          '25%': {
            boxShadow: '0 0 15px #7d7d7d, 0 0 30px #7d7d7d',
          },
          '50%': {
            boxShadow: '0 0 20px #9ca3af, 0 0 40px #9ca3af',
          },
          '75%': {
            boxShadow: '0 0 15px #7d7d7d, 0 0 30px #7d7d7d',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        glow:   'glow 3s infinite ease-in-out',
        // optional: run fadeIn first, then start glow after 2s
        'fadeIn-glow': 'fadeIn 2s ease-in forwards, glow 2s ease-in-out 2s infinite',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
