import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";
import routes from "./route";

const AccountNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
			<Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
		</Stack.Navigator>
	);
};

export default AccountNavigator;
