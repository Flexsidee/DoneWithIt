import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigation from "./FeedNavigation";
import ListingEditScreen from "../screen/ListingEditScreen";
import NewListingButton from "./NewListingButton";

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
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton onPress={() => navigation.navigate("Create")} />
					),
				})}
			/>
			<Tab.Screen
				component={AccountNavigator}
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
