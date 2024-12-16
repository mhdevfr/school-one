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
            animation: {
              'skew-scroll': 'skew-scroll 60s linear infinite',
            },
            keyframes: {
              'skew-scroll': {
                '0%': {
                  transform:
                    'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
                },
                '100%': {
                  transform:
                    'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
                },
              },
            },
            animation: {
              'marquee': 'marquee var(--duration) linear infinite',
              'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
            },
            keyframes: {
              'marquee': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(calc(-100% - var(--gap)))' },
              },
              'marquee-vertical': {
                from: { transform: 'translateY(0)' },
                to: { transform: 'translateY(calc(-100% - var(--gap)))' },
              },
            },
          },
        },
  plugins: [],

}


