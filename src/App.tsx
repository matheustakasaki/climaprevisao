import { useEffect, useState } from "react";
import CityInfo from "./components/CityInfo";
import CitySearch from "./components/CitySearch";

function App() {
	const [weather, setWeather] = useState();

	useEffect(() => {
		console.log("Dados do clima", weather);
	}, [weather]);
	return (
		<div className="App w-screen h-screen">
			<div className="flex flex-col justify-center items-center h-full">
				<div className="max-w-[920px] w-full flex-col gap-5 flex items-center px-4 mx-auto">
					<CityInfo data={weather} />

					<CitySearch />
				</div>
			</div>
		</div>
	);
}

export default App;
