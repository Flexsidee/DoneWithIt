import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screens from "../components/Screens";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	category: Yup.string().required().nullable().label("Category"),
	description: Yup.string().label("Description"),
	images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
	{
		backgroundColor: "#fc5c65",
		label: "Furniture",
		icon: "floor-lamp",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		label: "Cars",
		icon: "car",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		label: "Cameras",
		icon: "camera",
		value: 3,
	},
	{
		backgroundColor: "#26de81",
		label: "Games",
		icon: "cards",
		value: 4,
	},
	{
		backgroundColor: "#2bcbba",
		label: "Clothing",
		icon: "shoe-heel",
		value: 5,
	},
	{
		backgroundColor: "#45aaf2",
		label: "Sports",
		icon: "basketball",
		value: 6,
	},
	{
		backgroundColor: "#4b7bec",
		label: "Movies & Music",
		icon: "headphones",
		value: 7,
	},
	{
		backgroundColor: "#a55eea",
		label: "Books",
		icon: "book-open-variant",
		value: 8,
	},
];

const ListingEditScreen = () => {
	const location = useLocation();

	return (
		<Screens style={styles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					category: null,
					description: "",
					images: [],
				}}
				onSubmit={(values) => console.log(location)}
				validationSchema={validationSchema}
			>
				<AppFormImagePicker name="images" />
				<AppFormField maxLength={255} name="title" placeholder="TItle" />
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<AppFormPicker
					items={categories}
					name="category"
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					width="50%"
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
