import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import CityInfo from "./components/CityInfo";
import CitySearch from "./components/CitySearch";
import { WheatherContext } from "./context/WheaterContext";
import { IWeatherMain } from "./types/IWeather";

function App() {
	const [weather, setWeather] = useState();

	return (
		<div className="App w-screen h-screen">
			<div className="flex flex-col justify-center items-center h-full">
				<div className="max-w-[920px] w-full flex-col gap-5 flex items-center px-4 mx-auto">
					<WheatherContext.Provider value={{ weather, setWeather }}>
						<CityInfo />

						<CitySearch />
					</WheatherContext.Provider>
				</div>
			</div>
		</div>
	);
}

export default App;
