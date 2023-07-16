import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";
import Screens from "../components/Screens";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	category: Yup.string().required().nullable().label("Category"),
	description: Yup.string().label("Description"),
});

const categories = [
	{
		label: "Furniture",
		value: 1,
	},
	{
		label: "Clothing",
		value: 2,
	},
	{
		label: "Cameras",
		value: 3,
	},
];

const ListingEditScreen = () => {
	const [category, setCategory] = useState();

	return (
		<Screens style={styles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					category: null,
					description: "",
				}}
				onSubmit={(values) => console.log("ListingEditScreen.js: ", values)}
				validationSchema={validationSchema}
			>
				<AppFormField maxLength={255} name="title" placeholder="TItle" />
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				/>
				<AppFormPicker
					items={categories}
					name="category"
					placeholder="Category"
				/>
				<AppFormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screens>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});