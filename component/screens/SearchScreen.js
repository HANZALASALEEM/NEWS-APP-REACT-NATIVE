import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import SearchBar from "../SearchBar";
import axios from "axios";
import Articals from "../Articals";

export default function SearchScreen() {
	const [search, setSearch] = useState("");
	const [artical, setartical] = useState([]);

	const getNews = () => {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?country=us&apiKey=1985b17df1dd4018b3bd7efefd936114 ",
				{
					params: {
						category: "technology",
						q: search,
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
				console.log("Search" + error);
			})
			.then(function () {});
	};
	return (
		<View>
			<SearchBar search={search} setSearch={setSearch} onSubmit={getNews()} />

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
					/>
				)}
			/>
		</View>
	);
}
