import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from '../Layouts/Home';
import About from '../Layouts/About';
import Services from '../Layouts/Services';
import Products from '../Layouts/Products';
import Software from '../Layouts/Software';
import Contact from '../Layouts/Contact';
import NotFound from '../Layouts/Notfound';

const Routes = () => {
    return ( 
<Router>
<Switch>
<Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/services" component={Services}/>
    <Route path="/products" component={Products}/>
    <Route path="/software" component={Software}/>
    <Route path="/contact" component={Contact}/>
    <Route component={NotFound}/>
</Switch>
</Router>
     );
}
 
export default Routes;