/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      }
    },
    extend: {
      colors: {
        'primary-blue':'#0021A6',
        secondary: '#808080',
        'dark-blue':'#07061A'
      },
      fontFamily: {
        primary: "Outfit"
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        hero: 'url(https://images.unsplash.com/photo-1559171667-74fe3499b5ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }
    },
  },
  plugins: [],
}

