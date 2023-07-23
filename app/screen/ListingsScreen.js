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
		title: "Couch in great condition for sale",
		price: 1000,
		image: require("../assets/images/couch.jpg"),
	},
];

const ListingsScreen = ({ navigation }) => {
	return (
		<Screens style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(list) => list.id.toString()}
				renderItem={({ item }) => (
					<Card
						image={item.image}
						onPress={() => navigation.navigate("ListDetails", item)}
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
