import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.cardDetailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		marginBottom: 20,
		borderRadius: 15,
		overflow: "hidden",
	},
	image: { width: "100%", height: 200 },
	cardDetailsContainer: {
		padding: 20,
	},
	title: { marginBottom: 7 },
	subTitle: { color: colors.secondary },
});

export default Card;
