module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        panelidle: {
          '0%': { transform: 'rotate3d(.3,-.4,-.3,15deg)' },
          '50%': { transform: 'rotate3d(-.3,1.5,.3,15deg)' },
          '100%': { transform: 'rotate3d(.3,-.4,-.3,15deg)' },
        },
        tweenin: {
          '0%': { transform: 'translate3d(0, 70%, 0) scale(0)', opacity: 0 },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1) rotate3d(.3,-.4,-.3,15deg)', opacity: 1 },
        },
        tweenout: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1) rotate3d(.3,-.4,-.3,15deg)', opacity: 1 },
          '100%': { transform: 'translate3d(0, -70%, 0) scale(0) rotate3d(.3,-.4,-.3,15deg)', opacity: 0 },
        },
      },
      animation: {
        'panelidle': 'panelidle 10s ease-in-out infinite',
        "tweenin": "panelidle 10s ease-in-out infinite,tweenin .4s ease-in-out",
        "tweenout": "tweenout .4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}