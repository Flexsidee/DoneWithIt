import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import WelcomeScreen from "../screen/WelcomeScreen";

const AuthNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator initialRouteName="Welcome">
			<Stack.Screen
				component={WelcomeScreen}
				name="Welcome"
				options={{ headerShown: false }}
			/>
			<Stack.Screen component={LoginScreen} name="Login" />
			<Stack.Screen component={RegisterScreen} name="Register" />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
