import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import ListingsScreen from "../screen/ListingsScreen";

const FeedNavigation = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator mode="modal">
			<Stack.Screen name="Lists" component={ListingsScreen} />
			<Stack.Screen
				name="ListDetails"
				component={ListingDetailsScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default FeedNavigation;
