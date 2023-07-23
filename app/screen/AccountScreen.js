import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screens from "./../components/Screens";

const AccountScreen = ({ navigation }) => {
	const menuItems = [
		{
			title: "My Listings",
			icon: {
				name: "format-list-bulleted",
				backgroundColor: colors.primary,
			},
		},
		{
			title: "My Messages",
			icon: {
				name: "email",
				backgroundColor: colors.secondary,
			},
			targetScreen: "Messages",
		},
	];

	return (
		<Screens style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Daniel Somade"
					subTitle="flexsidee@gmail.com"
					image={require("../assets/images/daniel.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItems) => menuItems.title}
					renderItem={({ item }) => (
						<ListItem
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={
								item.targetScreen
									? () => navigation.navigate(item.targetScreen)
									: () => alert("No target screen yet")
							}
							title={item.title}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					IconComponent={
						<Icon name="logout" backgroundColor={colors.warning} />
					}
					onPress={() => alert("Log Out")}
					title="Log Out"
				/>
			</View>
		</Screens>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 10,
	},
});
export default AccountScreen;
