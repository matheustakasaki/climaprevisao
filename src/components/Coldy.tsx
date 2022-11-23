import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../data/Coldy.json";
export default function Coldy() {
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
