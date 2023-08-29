import { Container } from "./Fallback.styled";
import { ThreeDots } from "react-loader-spinner";

function Fallback() {
	return (
		<Container>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#ffffff"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</Container>
	);
}

export default Fallback;