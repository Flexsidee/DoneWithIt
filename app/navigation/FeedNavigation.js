import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import ListingsScreen from "../screen/ListingsScreen";

const FeedNavigation = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Lists" component={ListingsScreen} />
			<Stack.Screen name="ListDetails" component={ListingDetailsScreen} />
		</Stack.Navigator>
	);
};

export default FeedNavigation;
