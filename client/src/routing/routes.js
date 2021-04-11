import { Route } from "react-router-dom";

import ProtectedRoute from "../components/common/protectedRoute";
import Signin from "../components/forms/auth/signin";
import Signup from "../components/forms/auth/signup";
import Dashboard from "../components/pages/Dashbord/dashboard";

import ProfileForm from "../components/forms/profile/profile-form";

const Routes = () => {
	return (
		<>
			<Route path='/user/signup' component={Signup} />
			<Route path='/user/signin' component={Signin} />
			<ProtectedRoute path='/user/dashboard' component={Dashboard} />
			<Route path='/user/create-profile' component={ProfileForm} />
		</>
	);
};

export default Routes;
