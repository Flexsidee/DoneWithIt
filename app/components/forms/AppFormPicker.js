import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppPicker from "../AppPicker";

const AppFormPicker = ({ items, name, placeholder }) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				onSelectedItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<AppErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormPicker;
