import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";

const ExperienceDetails = ({classes,details}) =>{
    return (
        <div className={classes.expDetails}>
            <div className={classes.aboutExp}>
                <div className={classes.aboutAuthor}>
                    <Grid container alignItems="flex-start" direction="column">
                        <Typography variant="body1">
                            {details.text}
                        </Typography>
                        <Typography variant="body2">
                            80mins
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
                    <Typography variant="h6">
                        About This Experience
                    </Typography>
                    <Typography variant="body2">
                        {details.text}
                    </Typography>
                </div>
                <hr className={classes.hr} />
                <div className={classes.expDesc}>
                    <Typography variant="h6">
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
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

ExperienceDetails.propTypes = {
    classes:PropTypes.any.isRequired,
    details:PropTypes.object.isRequired,
}

export default React.memo(ExperienceDetails)