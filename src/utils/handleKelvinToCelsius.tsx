export function handleKelvinToCelsius(kTemp: number) {
	let kToCelsius = (kTemp - 273.15).toFixed();
	return kToCelsius;
}
