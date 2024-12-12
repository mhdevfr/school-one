/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
            animation: {
              gradient: 'gradient 8s linear infinite',
            },
            keyframes: {
              'shiny-text': {
                '0%, 90%, 100%': {
                  'background-position': 'calc(-100% - var(--shimmer-width)) 0',
                },
                '30%, 60%': {
                  'background-position': 'calc(100% + var(--shimmer-width)) 0',
                },
              },
              gradient: {
                to: {
                  backgroundPosition: 'var(--bg-size) 0',
                },
              },
              
            },
          },
        },
  plugins: [],

}


