import {
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const Card = ({ imageUrl, onPress, subTitle, title }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image style={styles.image} source={{ uri: imageUrl }} />
				<View style={styles.cardDetailsContainer}>
					<AppText style={styles.title} numberOfLines={1}>
						{title}
					</AppText>
					<AppText style={styles.subTitle}>{subTitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		marginBottom: 20,
		borderRadius: 15,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	cardDetailsContainer: {
		padding: 20,
	},
	title: {
		marginBottom: 7,
		fontWeight: 600,
	},
	subTitle: {
		color: colors.secondary,
	},
});

export default Card;
