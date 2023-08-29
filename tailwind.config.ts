import type { Config } from 'tailwindcss'
const config: Config = {
    content: [
        './src/**/*', // Include all files in the src directory
        './pages/**/*', // Include all files in the pages directory
    ],
    theme: {
        extend: {
            colors: {
                customBlueGray: 'rgba(126, 126, 155, 1)',
                customOrangeBrown: 'rgba(212, 115, 7, 0.40)',
                customDeepBlue: 'rgba(0, 0, 54, 1)',
                orangeBrownTransparent: 'rgba(173, 91, 0, 1)',
            },
            backgroundColor: {
                customOrangeBrownTransparent: 'rgba(173, 91, 0, 1)',
                background_colorr: 'rgba(242, 242, 250, 1)',
            },
            // fontFamily:{
            //     gelix: ['Gellix'],
            // },
        },

    },
    plugins: [],
}
export default config
