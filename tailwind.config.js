/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontSize: {
      H1: ['80px', '103px'],
      H2: ['40px', {
        lineHeight: '52px',
        letterSpacing: '-1.5'
      }],
      H3: ['12px', {
        lineHeight: '25px', 
        letterSpacing: '2.6'
      }],
      H4: ['11px', {
        lineHeight: '25px',
        letterSpacing: '1'
      }],
      H5: ['20px', {
        lineHeight: "25.88px",
        letterSpacing: -0.75
      }],
      SB: ['14px', {
        lineHeight: '22px'
      }]
    },
    extend: {
      colors: {
        'white':'#ffff',
        'blueBlack': '#070724',
      }
    },
  },
  plugins: [],
}
