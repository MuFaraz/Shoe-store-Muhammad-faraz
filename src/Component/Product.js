import React from 'react';
import Shoes from './../shoe.json'
import {Link} from 'react-router-dom'
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
function Product() {
  const classes = useStyles();

  // console.log(Shoes)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {Object.keys(Shoes).map(keyName=>{
          const shoe = Shoes[keyName];
          return(
            <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Link key={keyName} to={`/Product/${keyName}`}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} height={250} />
            </Link>
            </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
    // <div>
    //   <h1>Welcome to Product</h1>
    //   <div>
    //     {Object.keys(Shoes).map(keyName=>{
    //       const shoe = Shoes[keyName];
    //       return(
    //         <Link key={keyName} to={`/Product/${keyName}`}>
    //           <h2>{shoe.name}</h2>
    //           <img src={shoe.img} height={150} />
              
    //         </Link>
    //       )
    //     })}
    //   </div>
    // </div>
  );
}

export default Product;
