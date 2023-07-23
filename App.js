import { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import AccountScreen from "./app/screen/AccountScreen";
import LoginScreen from "./app/screen/LoginScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import ListingsScreen from "./app/screen/ListingsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import RegisterScreen from "./app/screen/RegisterScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import Screens from "./app/components/Screens";

export default function App() {
	return (
		<>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</>
	);
}

const Link = () => {
	const navigation = useNavigation();
	return (
		<Button title="click" onPress={() => navigation.navigate("TweetDetails")} />
	);
};

const Tweets = ({ navigation }) => (
	<Screens>
		<Text>Tweets dfdfsdf </Text>
		{/* <Button
			title="View Tweet"
			onPress={() => navigation.navigate("TweetDetails")}
		/> */}
		<Link />
	</Screens>
);

const TweetDetails = () => (
	<Screens>
		<Text> Tweet Details</Text>
	</Screens>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator initialRouteName="Tweets">
		<Stack.Screen name="TweetDetails" component={TweetDetails} />
		<Stack.Screen name="Tweets" component={Tweets} />
	</Stack.Navigator>
);
