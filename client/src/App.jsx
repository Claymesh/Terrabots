import logo from '../assets/head.png'
import textlogo from '../assets/textlogo.png'

import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

// COMPONENTS
import Home from "./pages/Home"


// ASSETS
// import "../assets/styles/Custom.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
		<div>
			{/* <Route path="/home" component={NavBar}></Route> */}
			<Switch>
				<Route exact path="/" component={Home}></Route>
				{/* <Route exact path="/docs" component={Docs}></Route> */}
                {/* <Route exact path="/api" component={API}></Route> */}
			    {/* <Route exact path="/discord" component={Discord}></Route> */}
			</Switch>
			{/* <Route path="/store" component={Footer}></Route> */}
		</div>

    )
}

export default App