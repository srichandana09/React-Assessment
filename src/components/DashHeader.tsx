import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Grid } from '@material-ui/core';
import SelectBox from './SelectBox';
import { Measurement } from './Dashboard';
import Card from './Card';

const useStyles = makeStyles({
  taskBar: {
    backgroundColor: 'white',
  },
});

export default (props: {
  metrics: string[];
  selection: (string | undefined)[];
  setSelection: Function;
  latestData: Measurement[];
}) => {
  const { metrics, selection, setSelection, latestData } = props;
  const classes = useStyles();
  return (
    <CardContent className={classes.taskBar}>
      <Grid container spacing={4} justify="space-between">
        <Grid item xs={12} sm={6}>
          {
          }
          {latestData.map(measurement => {
            return selection.includes(measurement.metric) ? (
              <Card metric={measurement.metric} data={measurement.value.toString()} 
              measurement={measurement.unit} color={'antique white'} />
            ) : null;
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {
          }
          <SelectBox metrics={metrics} selection={selection} setSelection={setSelection} />
        </Grid>
      </Grid>
    </CardContent>
  );
};
