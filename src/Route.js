import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'
import ProductItem from './Component/ProductItem'
import NavBar from './Component/NavBar'


function RouterConfig() {
  return (
    <div>
     <Router>
         <NavBar />
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/About" component={About}/>
             <Route exact path="/Product" component={Product}/>
             <Route  path="/Product/:id" component={ProductItem}/>
             
             <Route path="*" component={()=><h1>404 Not Found</h1>}/>
         </Switch>
     </Router>
    </div>
  );
}

export default RouterConfig;
