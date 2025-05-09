/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1E1E2E',
        surface: '#282838',
        primary: {
          DEFAULT: '#6C5CE7',
          light: '#8A7CF8',
          dark: '#5849C8',
        },
        secondary: {
          DEFAULT: '#00D2FF',
          light: '#66E0FF',
          dark: '#00AACC',
        },
        accent: {
          DEFAULT: '#FF5E7D',
          light: '#FF8CA2',
          dark: '#E63E5C',
        },
        success: {
          DEFAULT: '#00C896',
          light: '#33F4C9',
          dark: '#00A076',
        },
        warning: {
          DEFAULT: '#FFC43A',
          light: '#FFD269',
          dark: '#EAB232',
        },
        error: {
          DEFAULT: '#FF4E4E',
          light: '#FF7E7E',
          dark: '#E63E3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px 5px rgba(108, 92, 231, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};