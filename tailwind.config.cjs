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
          primary: "#111827", // 9c2b40
          secondary: "#209fb5", // ea76cb 
          accent: "#ea76cb", // teal
          neutral: "#dce0e8", // crust
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