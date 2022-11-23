import { useState } from "react";
import CityInfo from "./components/CityInfo";
import CitySearch from "./components/CitySearch";

import { WheatherContext } from "./context/WheaterContext";

function App() {
	const [weather, setWeather] = useState();

	return (
		<div className="App w-screen h-screen bg-stone-100 dark:bg-neutral-900">
			<div className="flex flex-col justify-center items-center h-full ">
				<main className="max-w-[920px] w-full flex-col gap-5 flex items-center px-4 mx-auto">
					<WheatherContext.Provider value={{ weather, setWeather }}>
						<CityInfo />
						<CitySearch />
					</WheatherContext.Provider>
				</main>
			</div>
		</div>
	);
}

export default App;
