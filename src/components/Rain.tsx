import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../data/Rain.json";
export default function Rain() {
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
