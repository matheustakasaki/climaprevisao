export default function CityInfo(data: any) {
	function kelvinToCelsius(kTemp: number) {
		let kToCelsius = kTemp - 273.15;
		let message = `${kToCelsius.toFixed()}º`;
		return message;
	}

	return (
		<>
			{data ? (
				<>
					<h1>{data.name}</h1>

					<div className="flex gap-5">
						<div className="text-center">
							<p className="text-lg">Mínima</p>
							<h3 className="text-xl">
								{kelvinToCelsius(data.main.temp_min)}
							</h3>
						</div>
						<div className="text-center">
							<p className="text-2xl">Atual</p>
							<h3 className="text-2xl">
								{kelvinToCelsius(data?.main.temp)}
							</h3>
						</div>
						<div className="text-center">
							<p className="text-lg">Máxima</p>
							<h3 className="text-xl">
								{kelvinToCelsius(data?.main.temp_max)}
							</h3>
						</div>
					</div>

					<div>
						<p className="text-lg">{data.weather[0].description}</p>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
}
