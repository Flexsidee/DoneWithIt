import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screens from "../components/Screens";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
	return (
		<Screens style={styles.container}>
			<AppForm
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={(values) => console.log("RegisterScreen.js: ", values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCorrect={false}
					icon="account"
					name="name"
					placeholder="Name"
					textContentType="name"
				/>
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
				<SubmitButton title="Register" />
			</AppForm>
		</Screens>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});
export default RegisterScreen;
