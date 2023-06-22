import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
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
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
	title: {
		fontWeight: "500",
	},
	subTitle: {
		color: colors.medium,
	},
});

export default ListItem;
