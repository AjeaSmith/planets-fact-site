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
    },
    extend: {
      colors: {
        'white':'#ffff',
        'blueBlack': '#070724',
        'darkGray': '#38384F',
        'gray': '#838391',
        'skyBlue': '#419EBB',
        'lightOrange': '#EDA249',
        'purple': '#6f2ed6',
        'orange': '#D14C32',
        'red': '#D83A34',
        'darkOrange': '#CD5120',
        'teal': '#1ec2a4',
        'blue': '#2d68f0',
      }
    },
  },
  plugins: [],
}
