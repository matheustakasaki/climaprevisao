import Cloudy from "../components/Cloudy";
import CloudySun from "../components/CloudySun";
import Coldy from "../components/Coldy";
import Sunny from "../components/Sun";
import Thunderstorm from "../components/Thunderstorm";

export function handleAnimationOfDay(temp: string, description: string) {
	const weatherTemp = parseInt(temp);

	if (weatherTemp >= 21 || description === "Sunny") {
		return <Sunny />;
	} else if (weatherTemp >= 21 || description === "Clouds") {
		return <CloudySun />;
	} else if (weatherTemp >= 15 && weatherTemp === 20) {
		return <Cloudy />;
	} else if (weatherTemp < 15) {
		return <Coldy />;
	} else if (description === "Thunderstorm") {
		return <Thunderstorm />;
	} else {
		return <CloudySun />;
	}
}
