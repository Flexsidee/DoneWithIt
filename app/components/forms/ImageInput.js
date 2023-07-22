import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
	return (
		<>
			{imageUri ? (
				<TouchableOpacity onPress={() => alert("Select Image")}>
					<View style={styles.imageContainer}>
						<Image asset source={{ uri: imageUri }} />
					</View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={onChangeImage}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							color={colors.medium}
							name="camera"
							size={40}
						/>
					</View>
				</TouchableOpacity>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		backgroundColor: "#f8f4f4",
		borderRadius: 15,
		padding: 30,
		width: 100,
		height: 100,
	},
	imageContainer: {
		borderRadius: 15,
		width: 100,
		height: 100,
	},
});

export default ImageInput;
