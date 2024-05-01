import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        '50': '#fdf9ef',
        '100': '#fbf0d9',
        '200': '#f6deb2',
        '300': '#f2d096',
        '400': '#e8a64f',
        '500': '#e38d2c',
        '600': '#d47422',
        '700': '#b05a1e',
        '800': '#8d481f',
        '900': '#723c1c',
        '950': '#3d1d0d',
      },
      // Keep the existing colors
      secondary: {
        '50': '#f5f7fa',
        '100': '#e9eef5',
        '200': '#cfdae8',
        '300': '#a5bcd4',
        '400': '#7498bc',
        '500': '#537ca4',
        '600': '#406289',
        '700': '#355070',
        '800': '#2f445d',
        '900': '#2b3b4f',
        '950': '#1c2635',
      },
      accent: {
        '50': '#f4f9f5',
        '100': '#e6f2e8',
        '200': '#cfe3d3',
        '300': '#a8cdb0',
        '400': '#7aae85',
        '500': '#579064',
        '600': '#3e6b48',
        '700': '#385d41',
        '800': '#304b36',
        '900': '#283f2e',
        '950': '#122116',
      },
      'sunrise-yellow': {
        '50': '#fdf9ef',
        '100': '#fbf0d9',
        '200': '#f6deb2',
        '300': '#f2d096',
        '400': '#e8a64f',
        '500': '#e38d2c',
        '600': '#d47422',
        '700': '#b05a1e',
        '800': '#8d481f',
        '900': '#723c1c',
        '950': '#3d1d0d',
      },
      'twilight-blue': {
        '50': '#f5f7fa',
        '100': '#e9eef5',
        '200': '#cfdae8',
        '300': '#a5bcd4',
        '400': '#7498bc',
        '500': '#537ca4',
        '600': '#406289',
        '700': '#355070',
        '800': '#2f445d',
        '900': '#2b3b4f',
        '950': '#1c2635',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
    
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  
};
export default config;
