import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoe.json'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:40,
    margin:'0 auto'
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 20
  },
}));
function ProductItem() {
  const classes = useStyles();
  const {id} =  useParams();
  const shoe = Shoes[id]

  if(!shoe){
    return (<h2>Product Not Found</h2>)
  }
  console.log(shoe)
  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        
      <Grid item xs={12}>
          <Paper className={classes.paper}><h2>{shoe.name}</h2>
  <img src={shoe.img} height={500}/> </Paper>
      </Grid>
      </Grid>
   </div>
  );
}

export default ProductItem;
