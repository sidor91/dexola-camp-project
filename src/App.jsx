import { Header } from "./components/Header/Header";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { Section } from "./components/Section/Section";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { NFTTable } from "./components/TopNFT/Table";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
		<>
			<Header />
			<MainContainer>
				<Hero />
				<Section sectionName="Features" sectionNumber="01">
					<Features />
				</Section>
				<Section sectionName="Top NFTs" sectionNumber="02">
					<NFTTable />
				</Section>
				<Section sectionName="Join Us" sectionNumber="03"></Section>
		  </MainContainer>
		  <Footer/>
		</>
	);
}

export default App
