import { Image, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screens from "../components/Screens";
import { Formik } from "formik";

const LoginScreen = () => {
	return (
		<Screens style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo-red.png")}
			/>

			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							onChangeText={handleChange("email")}
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							keyboardType="password"
							oChangeText={handleChange("password")}
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<AppButton onPress={handleSubmit} title="Login" />
					</>
				)}
			</Formik>
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
