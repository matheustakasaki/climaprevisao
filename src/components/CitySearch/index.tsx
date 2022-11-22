import axios from "axios";
import { useState } from "react";

export default function CitySearch() {
	const [city, setCity] = useState("");

	const getCity = async (name: string) => {
		try {
			const cityReq = await axios.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=a6564119b6b053c6c561774a3ed814bf`
			);
			const cityData = cityReq.data[0];

			return cityData;
		} catch (error) {
			console.log(error);
		}
	};

	const getWeather = async (cityName: string) => {
		const { name, lat, lon, state } = await getCity(cityName);

		try {
			const weatherReq = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a6564119b6b053c6c561774a3ed814bf`
			);

			const weatherData = await weatherReq.data;
			console.log(weatherData);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				getWeather(city);
			}}
			className="mt-6 right-0 pb-4 w-full flex gap-2 justify-center"
		>
			<input
				onChange={(e) => setCity(e.target.value)}
				type="text"
				name="city"
				id="city"
				placeholder="Digite o nome da cidade"
				className="p-3 rounded-md w-[85%] font-semibold"
			/>

			<input
				type="submit"
				value="Enviar"
				className="hover:cursor-pointer rounded-md w-[20%] bg-green-800 font-bold"
			/>
		</form>
	);
}
