import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

const Screens = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flex: 1,
	},
});
export default Screens;
