import {createMuiTheme,makeStyles} from "@material-ui/core/styles";

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
});

export const CommonStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px 2px 8px',
    marginTop: '6.9px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '.8rem',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    '& .MuiButton-root.Mui-disabled': {
      color: 'white',
    },
  },
  label: {
    transform: 'translate(14px, 14px) scale(1)',
  },
  stepCompleted: {
    '& .MuiStepIcon - root.MuiStepIcon - completed': {
      color: 'white',
    },
  },
  iconButton: {
    padding: 5,
    backgroundColor: '#ffffff',
    border: '3px solid whitesmoke',
  },
  leftInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  textField: {
    backgroundColor: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 35,
    },
    '& .Mui-focused':{
      borderColor:"#00AFAA"
    },
    '& .MuiOutlinedInput-marginDense':{
      borderColor:"#00AFAA"
    },
    borderRadius: 35,
    width: '100%',
  },
  menuSelectField: {
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.white,
      borderRadius: '28px !important',
    },
  },
  selectField: {
    backgroundColor: theme.palette.white,
    borderRadius: '28px !important',
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
      borderColor:"black"
    },
  },
  columnDivs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  formControl: {
    width: '100%',
    backgroundColor: 'white',
  },
  accountMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '4.5rem',
    marginBottom: '30px',
  },
  btn: {
    backgroundColor: '$ffffff',
    borderRadius: '20px',
  },
}));

export default CommonStyles;
