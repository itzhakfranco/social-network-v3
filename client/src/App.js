import Navbar from "./components/layout/navbar/navbar.jsx";
import { Route, Switch } from "react-router-dom";

import Routes from "./routing/routes";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main style={{ minHeight: "900px" }}>
				<Switch>
					<Route exact path='/' />
					<Route component={Routes} />
				</Switch>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
