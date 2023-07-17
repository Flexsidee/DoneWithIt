import { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
	const [imageUri, setImageUri] = useState();

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.canceled) setImageUri(result.uri);
		} catch (error) {
			console.log("Error reading an image", error);
		}
	};

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!granted) {
			alert("You need to enable permission to access the library");
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return (
		<>
			<Screens>
				<Button title="Select Image" onPress={selectImage} />
				<Image source={{ uri: imageUri }} style={{ width: 400, height: 400 }} />
			</Screens>
		</>
	);
}
