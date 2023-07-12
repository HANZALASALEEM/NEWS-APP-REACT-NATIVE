import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

export default function Articals(props) {
	const goToSource = () => {
		WebBrowser.openBrowserAsync(props.url);
	};
	return (
		<View style={styles.body}>
			<Pressable style={styles.card} onPress={() => goToSource()}>
				<View style={styles.container}>
					<Image
						source={{
							uri: props.urlToImage,
						}}
						style={styles.image}
					/>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.description} numberOfLines={3}>
						{props.description}
					</Text>
					<View style={styles.footer}>
						<Text>
							by: <Text style={styles.author}>{props.author}</Text>
						</Text>
						<Text style={styles.date}>
							{moment(props.publishedAt).format("MMM Do YY")}
						</Text>
					</View>
					<View>
						<Text>
							Source:
							<Text style={styles.source}>{props.source}</Text>
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	image: {
		height: 200,
		width: "100%",
	},
	container: {
		width: "90%",
		alignSelf: "center",
	},
	title: {
		fontSize: 23,
		fontWeight: "600",
		marginTop: 10,
	},
	description: {
		fontSize: 17,
		fontWeight: "400",
		marginTop: 10,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	author: {
		color: "red",
		fontWeight: "500",
	},
	date: {
		fontWeight: "bold",
		color: "#ae2012",
	},
	card: {
		backgroundColor: "#fff",
		marginTop: 10,
		borderRadius: 48,
		padding: 20,
		borderColor: "#000",
		borderWidth: 2,
		shadowOpacity: 0.5,
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowOffset: { height: 5, width: 5 },
		margin: 10,
	},
	source: {
		fontWeight: "bold",
		color: "#ae2012",
	},
	body: {
		backgroundColor: "#fff",
	},
});
