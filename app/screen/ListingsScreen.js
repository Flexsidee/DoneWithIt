import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/route";
import Screens from "../components/Screens";

// const listings = [
// 	{
// 		id: 1,
// 		title: "Red jacket for sale",
// 		price: 100,
// 		image: require("../assets/images/jacket.jpg"),
// 	},
// 	{
// 		id: 2,
// 		title: "Couch in great condition for sale",
// 		price: 1000,
// 		image: require("../assets/images/couch.jpg"),
// 	},
// ];

const ListingsScreen = ({ navigation }) => {
	const [listings, setlistings] = useState([]);

	useEffect(() => {
		loadListings();
	}, []);

	const loadListings = async () => {
		const response = await listingsApi.getListings();
		setlistings(response.data);
	};

	return (
		<Screens style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(list) => list.id.toString()}
				renderItem={({ item }) => (
					<Card
						imageUrl={item.images[0].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						subTitle={"$" + item.price}
						title={item.title}
					/>
				)}
			/>
		</Screens>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
