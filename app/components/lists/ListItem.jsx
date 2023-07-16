import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "../AppText";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
	showChevrons = false,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}> {title}</AppText>
						{subTitle && <AppText> {subTitle}</AppText>}
					</View>
					{showChevrons && (
						<MaterialCommunityIcons
							color={colors.medium}
							name="chevron-right"
							size={25}
						/>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.white,
		flexDirection: "row",
		padding: 15,
	},
	image: {
		borderRadius: 35,
		height: 70,
		width: 70,
	},
	detailsContainer: {
		flex: 1,
		justifyContent: "center",
		marginLeft: 10,
	},
	title: {
		fontWeight: "500",
	},
	subTitle: {
		color: colors.medium,
	},
});

export default ListItem;
