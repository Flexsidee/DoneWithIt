import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigation from "./FeedNavigation";
import ListingEditScreen from "../screen/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./route";

const AppNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen
				component={FeedNavigation}
				name={routes.FEED}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons color={color} name="home" size={size} />
					),
				}}
			/>
			<Tab.Screen
				component={ListingEditScreen}
				name={routes.LISTING_EDIT}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton
							onPress={() => navigation.navigate(routes.LISTING_EDIT)}
						/>
					),
				})}
			/>
			<Tab.Screen
				component={AccountNavigator}
				name={routes.ACCOUNT}
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
