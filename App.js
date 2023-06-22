import { useState } from "react";
import { Text, View } from "react-native";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import AccountScreen from "./app/screen/AccountScreen";
import ListingsScreen from "./app/screen/ListingsScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import Screens from "./app/components/Screens";
import Card from "./app/components/Card";
import ListItem from "./app/components/ListItem";
import colors from "./app/config/colors";
import Icon from "./app/components/Icon";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
	const [firstName, setFirstName] = useState("");
	return (
		<>
			<Screens>
				<AppTextInput placeholder="Username" icon="email" />
			</Screens>
			{/* <WelcomeScreen /> */}
			{/* <ViewImageScreen /> */}
			{/* <ListingDetailsScreen /> */}
			{/* <MessagesScreen /> */}
			{/* <AccountScreen /> */}
			{/* <ListingsScreen /> */}
		</>
	);
}
