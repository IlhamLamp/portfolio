/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // solid
        'bg': '#24252A',
        'white': '#edf0f1',
        'whiteSec': '#aebbc0',
        'primary': '#09d0ac',
        'secondary': '#35a29f',
        'tertiary': '#27e1c1',
        'close': '#eb4d4b',
        'closeHover': '#ff7979',
        'closeRing': '#fc5c65',
        'light': '#50cb93',
        'cursor': '#97feed',
        'popup': '#d1d8e0',        
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
