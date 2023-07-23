import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import ListingsScreen from "../screen/ListingsScreen";
import routes from "./route";

const FeedNavigation = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
			<Stack.Screen name={routes.FEED} component={ListingsScreen} />
			<Stack.Screen
				name={routes.LISTING_DETAILS}
				component={ListingDetailsScreen}
			/>
		</Stack.Navigator>
	);
};

export default FeedNavigation;
