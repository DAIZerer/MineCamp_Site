/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        
        'minecraft-img': "url('/assets/img/bg-panel.png)",
      }
    },
    colors:{
      'green-lz': '#2BAD72',
      'red-lz': '#884444',
      'white-lz': '#FFFFFF',
      'black-lz': '#080808',
      'signal-lz': '#2D2D2D',
      'gray-brown-lz': '#363636',
      'asphalt-lz': '#505050',
      'gray-lz': '##272727',
      'light-gray': '#303030',
      'background-dark-mc': '#0d0d11',
      'sp-light-grey': '#151519',
    }

}
};
