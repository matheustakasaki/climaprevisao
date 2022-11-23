import { useContext } from "react";
import { WheatherContext } from "../../context/WheaterContext";

export default function CityInfo() {
	function kelvinToCelsius(kTemp: number) {
		let kToCelsius = kTemp - 273.15;
		let message = `${kToCelsius.toFixed()}º`;
		return message;
	}
	const { weather } = useContext(WheatherContext);
	return (
		<>
			{weather ? (
				<>
					<h1>{weather.name}</h1>

					<div className="flex gap-5">
						<div className="text-center">
							<p className="text-lg">Mínima</p>
							<h3 className="text-xl">
								{kelvinToCelsius(weather.main.temp_min)}
							</h3>
						</div>
						<div className="text-center">
							<p className="text-2xl">Atual</p>
							<h3 className="text-2xl">
								{kelvinToCelsius(weather.main.temp)}
							</h3>
						</div>
						<div className="text-center">
							<p className="text-lg">Máxima</p>
							<h3 className="text-xl">
								{kelvinToCelsius(weather.main.temp_max)}
							</h3>
						</div>
					</div>

					<div>
						<p className="text-lg">
							{weather.weather[0].description}
						</p>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
}
