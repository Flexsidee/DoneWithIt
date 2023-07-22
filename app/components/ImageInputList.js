import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageInput from "./forms/ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
	const [imageUri, setImageUri] = useState();

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
		<View style={styles.container}>
			{imageUris.map((uri, index) => (
				<View key={index} style={styles.image}>
					<ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
				</View>
			))}
			<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
		</View>
	);
};

export default ImageInputList;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});
