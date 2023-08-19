import { Header } from "./components/Header/Header";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { Hero } from "./components/Hero/Hero";

function App() {
 

  return (
		<>
			<Header />
			<MainContainer>
				<Hero />
			</MainContainer>
		</>
	);
}

export default App
