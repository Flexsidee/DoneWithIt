import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screen/AccountScreen";
import FeedNavigation from "./FeedNavigation";
import ListingEditScreen from "../screen/ListingEditScreen";

const AppNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen
				component={FeedNavigation}
				name="Feed"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons color={color} name="home" size={size} />
					),
				}}
			/>
			<Tab.Screen
				component={ListingEditScreen}
				name="Create"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons color={color} name="plus" size={size} />
					),
				}}
			/>
			<Tab.Screen
				component={AccountScreen}
				name="Account"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons color={color} name="account" size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
