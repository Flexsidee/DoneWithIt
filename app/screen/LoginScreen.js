import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screens from "../components/Screens";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Screens style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo-red.png")}
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="email"
				keyboardType="email-address"
				onChangeText={(text) => setEmail(text)}
				placeholder="Email"
				textContentType="emailAddress"
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="lock"
				keyboardType="password"
				oChangeText={(text) => setPassword(text)}
				placeholder="Password"
				secureTextEntry
				textContentType="password"
			/>
			<AppButton
				onPress={() => alert(`Email: ${email}, Password: ${password}`)}
				title="Login"
			/>
		</Screens>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		marginTop: 50,
		marginBottom: 20,
		alignSelf: "center",
	},
});

export default LoginScreen;
