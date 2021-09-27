module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            joe: ["Josefin Sans", "sans-serif"],
            pac: ["Pacifico", "cursive"],
            lato: ["Lato", "sans-serif"],
            src: ["Source Sans Pro", "sans-serif"],
            pop: ["Poppins", "sans-serif"],
        },
        extend: {
            spacing: {
                "7vh": "70vh",
                "8vh": "80vh",
                "9vh": "90vh",
                "6vh": "60vh",
                "5vh": "50vh",
                "4vh": "40vh",
               
            },
            colors: {
                sec: "#FF6495",
                stroke: "#98C3FF",
                text: {
                    title: "#161F6D",
                    title1: "#003168",
                    dark: "#333333",
                },
                sec: {
                    1: "#f5f6fa91",
                    blue: "#F0F7FF",
                    pink: "#fff8fa",
                    off: "#FBFAFA",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
