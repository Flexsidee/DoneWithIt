import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const NewListingButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					color={colors.white}
					name="plus-circle"
					size={40}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default NewListingButton;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.primary,
		borderColor: colors.white,
		borderRadius: 40,
		borderWidth: 10,
		bottom: 20,
		justifyContent: "center",
		height: 80,
		width: 80,
	},
});
