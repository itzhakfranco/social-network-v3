import Navbar from "./components/layout/navbar/navbar.jsx";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/common/protectedRoute";
import Signin from "./components/forms/auth/signin";
import Signup from "./components/forms/auth/signup";
import Dashboard from "./components/pages/Dashbord/dashboard-page";

import ExperienceForm from "./components/forms/profile/experience-form";
import ProfileForm from "./components/forms/profile/profile-form";
import ProfilePage from "./components/pages/Profile/profile-page";

import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<header>
				<Navbar />
				<ToastContainer />
			</header>
			<main style={{ minHeight: "900px" }}>
				<Switch>
					<Route path='/user/signup' component={Signup} />
					<Route path='/user/signin' component={Signin} />
					<ProtectedRoute
						exact
						path='/user/profile/:id'
						component={ProfilePage}
					/>
					<ProtectedRoute path='/user/dashboard' component={Dashboard} />
					<ProtectedRoute path='/user/create-profile' component={ProfileForm} />
					<ProtectedRoute
						path='/user/experience/edit/:id'
						component={ExperienceForm}
					/>
					<ProtectedRoute
						path='/user/create-experience'
						component={ExperienceForm}
					/>
					<ProtectedRoute
						exact
						path='/user/profile/edit/:id'
						component={ProfileForm}
					/>
				</Switch>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
