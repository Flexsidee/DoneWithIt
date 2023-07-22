import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageInput from "./forms/ImageInput";

const ImageInputList = () => {
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
		<View>
			<ImageInput
				imageUri={imageUri}
				onChangeImage={(uri) => setImageUri(uri)}
			/>
		</View>
	);
};

export default ImageInputList;

const styles = StyleSheet.create({});
