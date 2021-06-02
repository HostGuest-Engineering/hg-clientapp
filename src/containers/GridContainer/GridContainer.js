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
            gridTemplateColumns:'1fr',
            gridTemplateRows:'10% 90%',
        },
        overflow:'hidden',
        gridGap:"2%"
    },
    centerCreateExperienceDiv:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'nowrap',
        height: '100vh',
        position: 'relative',
        background: "#faf3f3"
    },
    createExperience:{
        display:'grid',
        gridTemplateColumns:'25% 75%',
        gridTemplateRows:'1fr',
        width:'80%',
        height:'70vh',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            alignItems: 'flex-start',
            overflowY: 'auto',
            flexWrap: 'nowrap',
            width:"100%",
            height: '100vh',
            position: 'relative',
        },
        background: "rgb(242, 242, 242)",
        overflow:'hidden',
    }
}));

const GridContainer = ({children,createExperience})=>{
    const classes = useStyles();
    return createExperience ? (
            <div className={classes.centerCreateExperienceDiv} >
                <div className={classes.createExperience}>
                    {children}
                </div>
            </div>
            ):(
                <div className={classes.parent}>
                    {children}
                </div>
            )
}

GridContainer.propTypes = {
    children:PropTypes.any.isRequired,
    createExperience:PropTypes.bool
}

export default React.memo(GridContainer);