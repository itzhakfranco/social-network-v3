import { Route } from "react-router-dom";

import ProtectedRoute from "../components/common/protectedRoute";
import Signin from "../components/forms/auth/signin";
import Signup from "../components/forms/auth/signup";
import Dashboard from "../components/pages/Dashbord/dashboard";

import ExperienceForm from "../components/forms/profile/experience-form";
import ProfileForm from "../components/forms/profile/profile-form";

const Routes = () => {
	return (
		<>
			<Route path='/user/signup' component={Signup} />
			<Route path='/user/signin' component={Signin} />
			<Route path='/user/create-profile' component={ProfileForm} />
			<Route path='/user/dashboard' component={Dashboard} />
			<Route path='/user/profile/experience' component={ExperienceForm} />
		</>
	);
};

export default Routes;
