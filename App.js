import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./component/screens/HomeScreen";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./component/screens/SearchScreen";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.navigation}>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: "#000",
					headerStyle: { backgroundColor: "white" },
					tabBarStyle: {
						backgroundColor: "#3654d6",
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
					},
				}}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
					}}
				/>
				<Tab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarIcon: () => (
							<AntDesign name="search1" size={24} color="black" />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	navigation: {
		borderRadius: 10,
	},
});
