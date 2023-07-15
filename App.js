import { useState } from "react";
import { Switch, Text, View } from "react-native";

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
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screen/LoginScreen";

// const categories = [
// 	{
// 		label: "Furniture",
// 		value: 1,
// 	},
// 	{
// 		label: "Clothing",
// 		value: 2,
// 	},
// 	{
// 		label: "Cameras",
// 		value: 3,
// 	},
// ];

export default function App() {
	// 	const [category, setCategory] = useState();
	return (
		<>
			{/* <Screens>
				<AppPicker
					item={categories}
					selectedItem={category}
					onSelectedItem={(item) => setCategory(item)}
					icon="apps"
					placeholder="Select Category"
				/>
			</Screens> */}

			<LoginScreen />
		</>
	);
}
