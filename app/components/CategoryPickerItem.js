import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<Icon backgroundColor={item.backgroundColor} name={item.icon} />
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingHorizontal: 30,
		paddingVertical: 15,
		width: "33%",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});
export default CategoryPickerItem;
