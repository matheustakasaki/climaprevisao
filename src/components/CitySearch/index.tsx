import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { WheatherContext } from "../../context/WheaterContext";

export default function CitySearch() {
	// Requisições para busca de dados referentes à cidade desejada
	const handleGetCity = async (cityName: string) => {
		try {
			const cityReq = await axios.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=a6564119b6b053c6c561774a3ed814bf`
			);
			const cityData = await cityReq.data[0];

			return cityData;
		} catch (error) {
			console.log(error);
		}
	};
	const handleGetWeather = async (cityName: string) => {
		try {
			const { name, lat, lon, state } = await handleGetCity(cityName);

			if (!name) {
				alert("Digite um nome válido");
			}
			const weatherReq = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a6564119b6b053c6c561774a3ed814bf&lang=pt_br`
			);

			const weatherData = await weatherReq.data;

			setWeather(weatherData);
			return weather;
		} catch (error) {
			alert("Digite um nome válido");
		}
	};

	// Consumir Contexto Principal
	const { weather, setWeather } = useContext(WheatherContext);

	// Armazenar Estado da cidade desejada
	const [city, setCity] = useState("");

	useEffect(() => {}, [weather, city]);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleGetWeather(city);
			}}
			className="mt-6 right-0 pb-4 w-full flex gap-2 justify-center"
		>
			<input
				onChange={(e) => setCity(e.target.value)}
				type="text"
				name="city"
				id="city"
				value={city}
				placeholder="Digite o nome da cidade"
				className="p-3 rounded-md w-[85%] font-bold text-xl border border-black dark:border-zinc-100 dark:text-zinc-100 bg-transparent"
			/>

			<input
				type="submit"
				value="Enviar"
				className="hover:cursor-pointer rounded-md w-[20%] text-white text-xl bg-green-800 font-bold"
			/>
		</form>
	);
}
