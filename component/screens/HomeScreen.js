import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Articals from "../Articals";
import axios from "axios";
export default function HomeScreen() {
	//APi key = 1985b17df1dd4018b3bd7efefd936114
	const [artical, setartical] = useState([]);

	const getNews = () => {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?country=us&apiKey=1985b17df1dd4018b3bd7efefd936114 ",
				{
					params: {
						category: "technology",
					},
				}
			)

			.then((response) => {
				// handle success
				//
				setartical(response.data.articles);
				console.log(artical);
			})
			.catch(function (error) {
				// handle error
				console.log("Home" + error);
			})
			.then(function () {});
	};

	useEffect(() => {
		getNews();
	}, []);
	return (
		<View style={styles.container}>
			<FlatList
				data={artical}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<Articals
						urlToImage={item.urlToImage}
						author={item.author}
						description={item.description}
						title={item.title}
						publishedAt={item.publishedAt}
						source={item.source.name}
						url={item.url}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
