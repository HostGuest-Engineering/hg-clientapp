import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

export default function NotFound(){
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item >
                <Typography>Wrong Place, <Link to="/experiences">Go Back</Link></Typography>
            </Grid>
        </Grid>
    )
}