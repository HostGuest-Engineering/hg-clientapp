import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Error({ error }) {
  return (
    <Typography color="secondary" style={{ fontSize: '.8rem' }} variant="body1">
      {error}
    </Typography>
  );
}
