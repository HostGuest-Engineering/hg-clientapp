import {createMuiTheme} from "@material-ui/core/styles";

export const commonStyles = createMuiTheme({
    pallete: {
        primary: "#f73378" ,
        // {
        //     light: "#f73378",
        //     main: "#f50057",
        //     dark: "#ab003c"
        // },
        secondary: {
            light: "",
            main: "",
            dark: ""
        },

    },
    typography: {
        fontFamily: [
            'Nunito-SemiBold',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
})