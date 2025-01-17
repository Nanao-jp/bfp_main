import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: '#1E1E1E',
          dark: '#2D2D2D',
          darker: '#353535',
        },
        accent: {
          lime: 'var(--accent-lime)',
        }
      },
      backgroundColor: {
        'dark-surface': 'var(--dark-surface)',
        'dark-surface-2': 'var(--dark-surface-2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalSlideIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        kenburns: 'kenburns 10s ease-out infinite alternate',
        fadeIn: 'fadeIn 0.3s ease-out',
        modalSlideIn: 'modalSlideIn 0.3s ease-out',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
} satisfies Config;

export default config;
