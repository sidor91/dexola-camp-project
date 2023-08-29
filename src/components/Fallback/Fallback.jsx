import { Container } from "./Fallback.styled";
import { ThreeDots } from "react-loader-spinner";

function Fallback() {
	return (
		<Container>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#060412"
				ariaLabel="three-dots-loading"
				visible={true}
			/>
			;
		</Container>
	);
}

export default Fallback;