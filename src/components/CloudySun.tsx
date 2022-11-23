import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../data/CloudySun.json";
export default function CloudySun() {
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
