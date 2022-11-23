import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../data/Sunny.json";
export default function Sunny() {
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
