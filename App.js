import { View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import Card from "./app/components/Card";

export default function App() {
	return (
		<>
			{/* <WelcomeScreen /> */}
			{/* <ViewImageScreen /> */}
			<View
				style={{
					paddingTop: 100,
					paddingHorizontal: 20,
					backgroundColor: "#f8f4f4",
					backgroundColor: "#aaa ",
				}}
			>
				<Card
					title="Red Jacket for sale!"
					subTitle="$100"
					image={require("./app/assets/images/jacket.jpg")}
				/>
			</View>
		</>
	);
}
