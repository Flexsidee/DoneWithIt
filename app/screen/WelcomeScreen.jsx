import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			source={require("../assets/images/background.jpg")}
			style={styles.background}
			blurRadius={5}
		>
			<View style={styles.logoContainer}>
				<Image
					source={require("../assets/images/logo-red.png")}
					style={styles.logo}
				/>
				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title="Login" onPress={() => navigation.navigate("Login")} />
				<AppButton
					title="Register"
					onPress={() => navigation.navigate("Register")}
					color="secondary"
				/>
			</View>
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
	tagLine: {
		fontSize: 25,
		fontWeight: "bold",
		paddingVertical: 20,
	},
	buttonsContainer: {
		padding: 20,
		width: "100%",
	},
});

export default WelcomeScreen;
