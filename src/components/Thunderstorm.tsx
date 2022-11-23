import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../data/Thunderstorm.json";
export default function Thunderstorm() {
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
