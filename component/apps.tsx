import React from React
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home"
import NewChirp from "./NewChirp"
import AdminOptions from "./AdminOptions"

const App: React <AppProps> = (props: AppProps) => {
	return (
		<Router>
			<nav className ="navbar navbar-success">
				<Link className ="navbar-brand" to= {"/"}>Chirper</Link>
				<Link className ="navbar-brand" to= {"/add"}>New Chirp</Link>
			</nav>

			<Switch>
				<Route exact path= "/" component={Home}/>
				<Route exact path= "/add" component={NewChirp} />
				<Route exact path= "/chirp/:id" component={AdminOptions} />
			</Switch>
		</Router>
	)
};

interface AppProps { }

export default App;