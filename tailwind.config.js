module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
          '100%': { transform: 'rotate(-8deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
        rotate: 'rotate 2s linear infinite',
      },
    },
  },
  plugins: [],
}