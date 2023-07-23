import { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
	return (
		<>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				<TabNavigator />
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
		<Button
			title="View Tweet"
			onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
		/>
		{/* <Link /> */}
	</Screens>
);

const TweetDetails = ({ route }) => (
	<Screens>
		<Text> Tweet Details {route.params.id}</Text>
	</Screens>
);

const Account = () => (
	<Screens>
		<Text> Account</Text>
	</Screens>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator
		initialRouteName="Tweets"
		screenOptions={{ headerStyle: { backgroundColor: "red" } }}
	>
		<Stack.Screen
			name="TweetDetails"
			component={TweetDetails}
			options={({ route }) => ({ title: route.params.id })}
		/>
		<Stack.Screen name="Tweets" component={Tweets} />
	</Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator
		tabBarOptions={{
			activeBackgroundColor: "tomato",
			activeTintColor: "yellow",
			inactiveBackgroundColor: "blue",
			inactiveTintColor: "white",
		}}
	>
		<Tab.Screen
			name="Feed"
			component={StackNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Account"
			component={Account}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="apps" size={size} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
);
