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
					<Route path='/user/signup' component={Signup} />
					<Route path='/user/signin' component={Signin} />
					<Route path='/user/dashboard' component={Dashboard} />
					<Route path='/user/create-profile' component={ProfileForm} />
					<Route path='/user/experience/edit/:id' component={ExperienceForm} />
					<Route path='/user/experience' component={ExperienceForm} />
				</Switch>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
