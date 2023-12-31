import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const Icon = ({
	name,
	size = 50,
	backgroundColor = colors.black,
	iconColor = colors.white,
}) => {
	return (
		<View
			style={{
				backgroundColor: backgroundColor,
				width: size,
				height: size,
				borderRadius: size / 2,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
		</View>
	);
};

export default Icon;
