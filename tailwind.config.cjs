/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    /* DaisyUI react*/
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    textTransform: {
      none: 'none',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        "black": {
          primary: "#172d5e", // 9c2b40
          secondary: "#3b20b5", // ea76cb 
          accent: "#eabe76", // teal
          neutral: "#b2a981", // crust
          "base-100": "#eff1f5", // base
          info: "#209fb5", // sapphire
          success: "#40a02b", // green
          warning: "#df8e1d", // yellow
          error: "#d20f39", // red
        }
      }
    ],
  }

}