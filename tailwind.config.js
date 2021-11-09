module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '0px',
        sm: '600px',
        md: '960px',
        lg: '1170px',
        xxl: '1590px',
        xl: '1920px',
      },
      backgroundColor: theme => ({
        'primary': '#1890ff',
        'secondary': '#60A5FA',
        'ternary': `rgb(230,247,255)`
      }),
      borderColor: theme =>({
        'primary': '#1890ff',
        'secondary': '#60A5FA'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
