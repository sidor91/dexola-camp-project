import { Header } from "./components/Header/Header";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { Section } from "./components/Section/Section";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { NFTTable } from "./components/TopNFT/NFTTable";
import { Footer } from "./components/Footer/Footer";
import { JoinUs } from "./components/JoinUs/JoinUs";
import { Toast } from "./components/ToastContainer";

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
				<Section sectionName="Join Us" sectionNumber="03">
					<JoinUs />
				</Section>
				<Toast/>
			</MainContainer>
			<Footer />
		</>
	);
}

export default App
