import React from "react";
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import IconButton from "@material-ui/core/IconButton";
import StarRateIcon from '@material-ui/icons/StarRate';

const HostProfile = ({classes,details})=>{
    return (
        <div style={{padding:"2rem 2rem 2rem 0"}} className={classes.aboutExp}>
            <Grid style={{marginBottom:"20px"}} container alignItems="center" spacing={2} wrap="nowrap">
                <Avatar className={classes.large} src={details.img} alt="host profile">
                    {details.img}
                </Avatar>
                <Typography style={{marginLeft:"12px"}} variant="h6">
                    Steve Lorgan
                </Typography>
            </Grid>
            <Grid container alignItems="flex-start" spacing={2} wrap="nowrap" >
                <Typography style={{marginRight:"30px"}} component="span" variant="subtitle2">
                    <Typography component="span">
                        <IconButton size="small" color="secondary">
                            <StarRateIcon size="small" color="secondary" />
                        </IconButton>
                    </Typography>
                    <Typography className={classes.textDetailsDuration} variant="subtitle2" component="span">
                        122 Reviews
                    </Typography>
                </Typography>
                <Typography component="span" variant="subtitle2">
                    <Typography component="span">
                        <IconButton size="small" color="secondary">
                            <AcUnitIcon size="small" color="secondary" />
                        </IconButton>
                    </Typography>
                    <Typography className={classes.textDetailsDuration} component="span" variant="subtitle2">
                        Brand
                    </Typography>
                </Typography>
            </Grid>
            <Grid style={{marginTop:"20px"}} container alignItems="flex-start" wrap="nowrap">
                <Typography className={classes.textDetailsDuration} variant="subtitle1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </Typography>
            </Grid>
        </div>
    )
}

HostProfile.propType = {
    classes:PropTypes.any.isRequired,
    details:PropTypes.object.isRequired
}

export default HostProfile;