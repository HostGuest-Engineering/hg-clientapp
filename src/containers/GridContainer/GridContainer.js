import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme=>({
    parent:{
        display:'grid',
        gridTemplateColumns:'50% 50%',
        gridTemplateRows:'1fr',
        width:'100%',
        height:'100vh',
        [theme.breakpoints.down('sm')]:{
            // display:'block',
            // padding:'1rem'
            gridTemplateColumns:'1fr',
            gridTemplateRows:'10% 90%',
        },
        overflow:'hidden',
        gridGap:"2%"
    }
}));

const GridContainer = ({children})=>{
    const classes = useStyles();
    return (
        <div className={classes.parent}>
            {children}
        </div>
    )
}

GridContainer.propTypes = {
    children:PropTypes.any.isRequired
}

export default React.memo(GridContainer);