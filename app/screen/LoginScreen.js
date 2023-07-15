import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screens from "../components/Screens";

const validationSchemea = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

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
				validationSchema={validationSchemea}
			>
				{({ handleChange, handleSubmit, errors }) => (
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
						<AppText style={{ color: "red" }}>{errors.email}</AppText>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							oChangeText={handleChange("password")}
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<AppText style={{ color: "red" }}>{errors.password}</AppText>
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
