import { StyleSheet } from "react-native";

import AppText from "./AppText";

const AppErrorMessage = ({ error }) => {
	if (!error) return null;

	return <AppText style={styles.error}>{error}</AppText>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
	error: {
		color: "red",
	},
});
