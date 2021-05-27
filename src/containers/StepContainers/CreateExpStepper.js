import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CreateExperience from "../../pages/ExperiencePages/CreateExperience";
import AddExperienceDetails from "../../pages/ExperiencePages/AddExperienceDetails";

const StepContent = () => {
  const stepper = useSelector((state) => state.stepperReducer.stepper);
  switch (stepper) {
    case 0:
      return (
        <CreateExperience />
      );
    case 1:
      return (
        <AddExperienceDetails />
      )
    default:
      return <Grid>Not found</Grid>;
  }
};

export default StepContent;
