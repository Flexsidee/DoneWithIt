import { Platform, StatusBar, StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = (props) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: 20,
				}}
			>
				<View style={styles.closeIcon} />
				<View style={styles.deleteIcon} />
			</View>
			<Image
				source={require("../assets/images/chair.jpg")}
				style={styles.image}
				resizeMethod="resize"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
		paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},
	closeIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
	},
	deleteIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;
