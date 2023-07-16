import { StyleSheet, FlatList } from "react-native";

import Screens from "../components/Screens";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: require("../assets/images/jacket.jpg"),
	},
	{
		id: 2,
		title:
			"Couch in great condition lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates! lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates!",
		price: 1000,
		image: require("../assets/images/couch.jpg"),
	},
];

const ListingsScreen = () => {
	return (
		<Screens style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(list) => list.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={"$" + item.price}
						image={item.image}
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
