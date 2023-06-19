import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
	return (
		<ImageBackground
			source={require("../assets/images/background.jpg")}
			style={styles.background}
		>
			<View style={styles.logoContainer}>
				<Image
					source={require("../assets/images/logo-red.png")}
					style={styles.logo}
				/>
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logoContainer: { position: "absolute", top: 70, alignItems: "center" },
	logo: { width: 100, height: 100 },
	loginButton: {
		width: "100%",
		height: 70,
		backgroundColor: colors.primary,
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: colors.secondary,
	},
});

export default WelcomeScreen;
