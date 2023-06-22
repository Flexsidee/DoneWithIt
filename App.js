import { View } from "react-native";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";

export default function App() {
	return (
		<>
			{/* <WelcomeScreen /> */}
			{/* <ViewImageScreen /> */}
			{/* <ListingDetailsScreen /> */}
			<MessagesScreen />
		</>
	);
}
