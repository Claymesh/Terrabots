import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext, Fragment } from 'react';

// PAGES
import Home from "./pages/Home"
// ** in dev **
import Docs from './pages/Docs';
import FAQ from './pages/FAQ';
import API from './pages/API/API';
import Support from './pages/Support';
// ** **

// COMPONENTS
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Header from './components/Header';


// ASSETS
import "../assets/styles/Custom.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
	return (
		<Fragment>
			<Route path="/" component={Header}></Route>
			<Route path="/" component={Navbar}></Route>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/docs" component={Docs}></Route>
				<Route exact path="/api" component={API}></Route>
				{/* <Route exact path="/discord" component={Discord}></Route> */}
			</Switch>
			<Route path="/" component={Footer}></Route>
		</Fragment>

	)
}

export default App