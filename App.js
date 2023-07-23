import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Screens from "./app/components/Screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
	return (
		<>
			<NavigationContainer theme={navigationTheme}>
				<AuthNavigator />
			</NavigationContainer>
		</>
	);
}

const Tweets = ({ navigation }) => (
	<Screens>
		<Text>Tweets dfdfsdf </Text>
		<Button
			title="View Tweet"
			onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
		/>
	</Screens>
);

const Account = () => (
	<Screens>
		<Text> Account</Text>
	</Screens>
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
