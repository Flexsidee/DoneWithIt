import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

const Screens = ({ children, style }) => {
	return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flex: 1,
	},
});
export default Screens;
