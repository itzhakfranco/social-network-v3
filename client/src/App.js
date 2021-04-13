import Navbar from "./components/layout/navbar/navbar.jsx";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/common/protectedRoute";
import Signin from "./components/forms/auth/signin";
import Signup from "./components/forms/auth/signup";
import Dashboard from "./components/pages/Dashbord/dashboard";

import ExperienceForm from "./components/forms/profile/experience-form";
import ProfileForm from "./components/forms/profile/profile-form";

import Routes from "./routing/routes";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main style={{ minHeight: "900px" }}>
				<Switch>
					<Route exact path='/user/signup' component={Signup} />
					<Route exact path='/user/signin' component={Signin} />
					<Route exact path='/user/create-profile' component={ProfileForm} />
					<Route exact path='/user/dashboard' component={Dashboard} />
					<Route
						exact
						path='/user/profile/experience'
						component={ExperienceForm}
					/>
				</Switch>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
