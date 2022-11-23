import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../data/Cloudy.json";
export default function Cloudy() {
	return (
		<Player
			src={animationData}
			className="player"
			autoplay
			loop
			style={{ maxWidth: "445px" }}
		/>
	);
}
