/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // solid
        'bg': '#24252A',
        'white': '#edf0f1',
        'whiteSec': '#aebbc0',
        'primary': '#09d0ac',
        'secondary': '#35a29f',
        'cursor': '#97feed',        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark"],
  // }
}
