import { useEffect, useState } from "react";

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
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
	const [imageUris, setImageUris] = useState([]);

	const handleAddImage = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemoveImage = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};

	return (
		<>
			<Screens style={{ padding: 10 }}>
				<ImageInputList
					imageUris={imageUris}
					onAddImage={handleAddImage}
					onRemoveImage={handleRemoveImage}
				/>
			</Screens>
		</>
	);
}
