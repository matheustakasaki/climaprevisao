import { useContext } from "react";
import { WheatherContext } from "../../context/WheaterContext";
import { handleAnimationOfDay } from "../../utils/handleAnimationOfDay";
import { handleKelvinToCelsius } from "../../utils/handleKelvinToCelsius";

export default function CityInfo() {
	// Consumir estado principal da aplicação
	const { weather } = useContext(WheatherContext);

	// Armazenar dados convertidos do contexto referentes à temperatura
	const tempMin = handleKelvinToCelsius(weather?.main.temp_min);
	const tempMax = handleKelvinToCelsius(weather?.main.temp_max);
	const temp = handleKelvinToCelsius(weather?.main.temp);

	// Armazenam informações referentes à estilização da temperatura e animação
	const weatherDescription = weather?.weather[0].description;
	const tempTextColor =
		parseInt(temp) >= 21
			? "text-orange-500"
			: parseInt(temp) < 15
			? "text-blue-500"
			: "";

	return (
		<>
			{weather ? (
				<>
					<section className="w-full flex-col md:flex-row flex justify-between items-center">
						<div className="max-h-[450px] flex-col flex justify-between items-start gap-6">
							<h1 className="text-5xl dark:text-zinc-100 font-bold md:text-left text-center w-full">
								{weather.name}
							</h1>

							<div className="flex gap-5 items-center">
								<div className="text-center">
									<p className="text-md dark:text-zinc-100">
										Mínima
									</p>
									<h3 className="text-md dark:text-zinc-100">{`${tempMin}ºC`}</h3>
								</div>
								<div className="text-center">
									<p className="text-2xl dark:text-zinc-100">
										Atual
									</p>
									<h3
										className={`text-2xl font-bold text-zinc-400 ${tempTextColor}`}
									>{`${temp}ºC`}</h3>
								</div>
								<div className="text-center">
									<p className="text-md dark:text-zinc-100">
										Máxima
									</p>
									<h3 className="text-md dark:text-zinc-100">{`${tempMax}ºC`}</h3>
								</div>
							</div>

							<p className="text-lg text-stone-900 dark:text-zinc-100 underline l font-semibold text-center md:text-left w-full capitalize">
								{weather.weather[0].description}
							</p>
						</div>

						<aside className="max-w-md drop-shadow-[0_0_0.75rem_rgba(156,156,156,1)]">
							{handleAnimationOfDay(temp, weatherDescription)}
						</aside>
					</section>
				</>
			) : (
				<div className="flex w-full justify-start items-start">
					<p className="text-xl font-semibold text-slate-400">
						Digite o nome da cidade abaixo
					</p>
				</div>
			)}
		</>
	);
}
