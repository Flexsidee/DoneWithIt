import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";

const AccountNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Account" component={AccountScreen} />
			<Stack.Screen name="Messages" component={MessagesScreen} />
		</Stack.Navigator>
	);
};

export default AccountNavigator;
