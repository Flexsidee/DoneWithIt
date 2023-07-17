import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
	items,
	name,
	numberOfColumns,
	PickerItemComponent,
	placeholder,
	width,
}) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectedItem={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormPicker;
