import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function SearchBar(props) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Search"
				value={props.search}
				onChangeText={(text) => props.setSearch(text)}
				onSubmitEditing={props.onSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		padding: 10,
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
		borderColor: "#000",
		borderWidth: 2,
	},
});
