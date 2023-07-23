import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import routes from "./route";
import WelcomeScreen from "../screen/WelcomeScreen";

const AuthNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator initialRouteName="Welcome">
			<Stack.Screen
				component={WelcomeScreen}
				name={routes.WELCOME}
				options={{ headerShown: false }}
			/>
			<Stack.Screen component={LoginScreen} name={routes.LOGIN} />
			<Stack.Screen component={RegisterScreen} name={routes.REGISTER} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
