import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import UploadExperienceImages from "../../pages/ExperiencePages/UploadExperienceImages";
import AddExperienceDetails from "../../pages/ExperiencePages/AddExperienceDetails";
import SuccessPage from "../../pages/ExperiencePages/Success";

const StepContent = () => {
  const stepper = useSelector((state) => state.stepperReducer.stepper);
  switch (stepper) {
    case 0:
      return (
        <UploadExperienceImages />
      );
    case 1:
      return (
        <AddExperienceDetails />
      )
    case 2:
      return (
        <SuccessPage />
      )
    default:
      return <Grid>Not found</Grid>;
  }
};

export default StepContent;
