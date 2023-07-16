import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
	return (
		<View>
			<Image
				style={styles.image}
				source={require("../assets/images/jacket.jpg")}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for Sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/images/mosh.jpg")}
						title="Mosh Hamedani"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: { width: "100%", height: 300 },
	detailsContainer: {
		padding: 20,
	},
	title: { fontWeight: "500", fontSize: 24 },
	price: {
		color: colors.secondary,
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
