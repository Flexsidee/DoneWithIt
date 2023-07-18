import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageInput from "./forms/ImageInput";

const ImageInputList = () => {
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
		<View>
			<ImageInput imageUri={imageUri} onChangeImage={selectImage} />
			{/* <Image source={{ uri: imageUri }} style={{ width: 400, height: 400 }} /> */}
		</View>
	);
};

export default ImageInputList;

const styles = StyleSheet.create({});
