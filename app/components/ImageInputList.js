import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageInput from "./forms/ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri, index) => (
						<View key={index} style={styles.image}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
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
