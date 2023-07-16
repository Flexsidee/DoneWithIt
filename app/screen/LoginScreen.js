import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppErrorMessage from "../components/AppErrorMessage";
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
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							onBlur={() => setFieldTouched("email")}
							onChangeText={handleChange("email")}
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<AppErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							onBlur={() => setFieldTouched("password")}
							oChangeText={handleChange("password")}
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<AppErrorMessage
							error={errors.password}
							visible={touched.password}
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
