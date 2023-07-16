import { useState } from "react";
import { FlatList } from "react-native";

import Screens from "../components/Screens";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
	{
		id: 1,
		title:
			"T1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
		description:
			"D1 T1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumT1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumT1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
		image: require("../assets/images/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/images/mosh.jpg"),
	},
	{
		id: 3,
		title: "T3",
		description: "D3",
		image: require("../assets/images/mosh.jpg"),
	},
	{
		id: 4,
		title: "T4",
		description: "D4",
		image: require("../assets/images/mosh.jpg"),
	},
];

const MessagesScreen = () => {
	const [refresh, setRefresh] = useState(false);
	const [messages, setMessages] = useState(initialMessages);

	const handleDelete = (message) => {
		//Delete the message from the message
		const newMessages = messages.filter((m) => m.id !== message.id);
		setMessages(newMessages);
	};

	return (
		<Screens>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => alert(`${item.title}  is selected`)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refresh}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/images/mosh.jpg"),
						},
						{
							id: 3,
							title: "T3",
							description: "D3",
							image: require("../assets/images/mosh.jpg"),
						},
					]);
				}}
			/>
		</Screens>
	);
};

export default MessagesScreen;
