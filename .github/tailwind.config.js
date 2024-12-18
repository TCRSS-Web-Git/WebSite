/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'downriver': {
                    950: '#00205B',
                    900: '#003cb3',
                    800: '#003fe6',
                    700: '#004bff',
                    600: '#0066ff',
                    500: '#0090ff',
                    400: '#26baff',
                    300: '#6bd5ff',
                    200: '#a7e3ff',
                    100: '#ceeeff',
                    50: '#e9f8ff',
                },
            },
            spacing: {
                15: '3.75rem', // 60px
            }
        }
    },
}
