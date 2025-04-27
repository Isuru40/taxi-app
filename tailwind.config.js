/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'laksiri-purple': '#A100A1',
                'laksiri-purple-hover': '#C715C7',
            },
        },
    },
    plugins: [],
};