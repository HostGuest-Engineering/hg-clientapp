import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
    root: {
        borderRadius:"10px",
        outline:"none",
        borderColor:"#e71575",
        '&:hover':{
            color:"#fff"
        },
        '> *':{
            color:"white"
        }
    },
    text:{
        color:"#e71575",
    }
});


export const HGButton = withStyles(styles)(({text,classes,...rest})=>{
    return (
            <Button variant="outlined" className={classes.root} {...rest}>
                <Typography className={classes.text} variant="subtitle1">
                    {text}
                </Typography>
            </Button>
    )
})

HGButton.propTypes = {
    text:PropTypes.string.isRequired
}