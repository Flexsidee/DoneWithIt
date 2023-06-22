import { View } from "react-native";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import Screens from "./app/components/Screens";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screen/AccountScreen";

export default function App() {
	return (
		<>
			{/* <WelcomeScreen /> */}
			{/* <ViewImageScreen /> */}
			{/* <ListingDetailsScreen /> */}
			{/* <MessagesScreen /> */}
			<AccountScreen />
		</>
	);
}
