import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useTheme,ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Drawer from '@material-ui/core/Drawer';
import PropTypes from "prop-types";

const outerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: "#e71575"
        },
    },
    shadows: [
        0
    ]
});

const BookingDates = ({classes})=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [open,setOpen] = React.useState(false);
    return matches ? (
        <div className={classes.mobileView}>
            <Button variant="contained" className={classes.selectMobiletDate} onClick={()=>setOpen(true)}>
                Show Booking Dates
            </Button>
            <Drawer anchor="bottom" open={open} onClose={()=>setOpen(false)}>
               <div className={classes.bookingDiv}>
                    <Typography variant="subtitle1">
                        Starts At Kes 1200/Person
                    </Typography>
                    <hr className={classes.hr} />
                    <div className={classes.bookingDetails}>
                        <Grid style={{margin:"10px 0 0 0",padding:"0"}} direction="column" wrap="nowrap" container alignItems="flex-start">
                            <Typography variant="subtitle2">
                                Tue, June 12
                            </Typography>
                            <Typography variant="subtitle2">
                                1.00PM - 2.00PM
                            </Typography>
                        </Grid>
                        <ThemeProvider theme={outerTheme}>
                            <Button variant="contained" className={classes.selectDate}>
                                Select
                            </Button>
                        </ThemeProvider>
                    </div>
                    <hr className={classes.hr} />
                </div>
            </Drawer>
        </div>
    ):(
        <div className={classes.bookingDiv}>
            <Typography variant="subtitle1">
                Starts At Kes 1200/Person
            </Typography>
            <hr className={classes.hr} />
            <div className={classes.bookingDetails}>
                <Grid style={{margin:"10px 0 0 0",padding:"0"}} direction="column" wrap="nowrap" container alignItems="flex-start">
                    <Typography variant="subtitle2">
                        Tue, June 12
                    </Typography>
                    <Typography variant="subtitle2">
                        1.00PM - 2.00PM
                    </Typography>
                </Grid>
                <ThemeProvider theme={outerTheme}>
                    <Button variant="contained" className={classes.selectDate}>
                        Select
                    </Button>
                </ThemeProvider>
            </div>
            <hr className={classes.hr} />
        </div>
    )
}

BookingDates.propTypes = {
    classes:PropTypes.any.isRequired
}

export default BookingDates;
