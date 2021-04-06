import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
  color: string;
  metric: string;
  data: string;
}

export default function SimpleCard(props: Props) {
  const useStyles = makeStyles({
    card: {
      width: 200,
      float: 'left',
      marginLeft: 15,
      backgroundColor: 'antiquewhite'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    metric: {
      color: props.color,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.metric}
        </Typography>
        <Typography className={classes.metric} variant="h5" component="h5">
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}
