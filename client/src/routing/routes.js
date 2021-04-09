import { Route } from "react-router-dom";

import Signin from "../components/auth/signin";
import Signup from "../components/auth/signup";

const Routes = () => {
	return (
		<>
			<Route path='/user/signup' component={Signup} />
			<Route path='/user/signin' component={Signin} />
		</>
	);
};

export default Routes;
