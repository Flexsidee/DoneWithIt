import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import Screens from "../components/Screens";
import AppFormField from "../components/AppFormField";
import SubmitButton from "./../components/SubmitButton";

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
				{() => (
					<>
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							name="email"
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							name="password"
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<SubmitButton title="Login" />
					</>
				)}
			</Formik>
		</Screens>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	logo: {
		width: 80,
		height: 80,
		marginTop: 50,
		marginBottom: 70,
		alignSelf: "center",
	},
});

export default LoginScreen;
