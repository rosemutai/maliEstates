/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#FFAC12',
        'greyish': '#E4E4E4'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/house1.jpg')",
        'team-image': "url('/images/team.jpg')",
        'house-image': "url('/images/house2.jpg')",
        'about-image': "url('/images/hse.jpg')",

      },
      spacing: {
        '2/3': '66.666667%'
      },
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs")
  ],
}
