import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";
import HostProfile from "./HostProfile";
import BookingDates from "./BookingDates";

const ExperienceDetails = ({classes,details}) =>{
    return (
        <div className={classes.expDetails}>
            <div className={classes.aboutExp}>
                <div className={classes.aboutAuthor}>
                    <Grid container alignItems="flex-start" direction="column">
                        <Typography className={classes.textDetails} style={{marginBottom:".7rem"}} variant="body1">
                            {details.text}
                        </Typography>
                        <Typography className={classes.textDetailsDuration} variant="body2">
                            80 mins
                        </Typography>
                    </Grid>
                    <Avatar src={details.img} alt="author-avatar">
                        {details.img}
                    </Avatar>
                </div>
                <hr className={classes.hr} />
                <div className={classes.peopleAllowed}>
                    <PeopleAltIcon size="small" color="secondary" />
                    <Typography variant="subtitle1">Up to 15 people</Typography>
                </div>
                <hr className={classes.hr} />
                <div className={classes.expDesc}>
                    <Typography className={classes.textDetails} style={{marginBottom:".7rem"}} variant="h6">
                        About This Experience
                    </Typography>
                    <Typography className={classes.textDetailsDuration} variant="body2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </Typography>
                </div>
                <hr className={classes.hr} />
                <div className={classes.expDesc}>
                    <Typography className={classes.textDetails} style={{marginBottom:".7rem"}} variant="h6">
                        What to Bring
                    </Typography>
                    <Typography variant="body2">
                        <Typography component="span">
                            <IconButton color="secondary" size="small">
                                <DoneIcon />
                            </IconButton>
                        </Typography>
                        <Typography component="span" variant="body2">One two three</Typography>
                    </Typography>
                    <Typography variant="body2">
                        <Typography component="span">
                            <IconButton color="secondary" size="small">
                                <DoneIcon />
                            </IconButton>
                        </Typography>
                        <Typography component="span" variant="body2">One two three</Typography>
                    </Typography>
                    <Typography variant="body2">
                        <Typography component="span">
                            <IconButton color="secondary" size="small">
                                <DoneIcon />
                            </IconButton>
                        </Typography>
                        <Typography component="span" variant="body2">One two three</Typography>
                    </Typography>
                </div>
                <hr className={classes.hr} />
                <HostProfile details={details} classes={classes} />
            </div>
            <BookingDates classes={classes} />
        </div>
    )
}

ExperienceDetails.propTypes = {
    classes:PropTypes.any.isRequired,
    details:PropTypes.object.isRequired,
}

export default React.memo(ExperienceDetails)