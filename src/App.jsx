import { Suspense, lazy } from "react";
import Fallback from '@/components/Fallback/Fallback'

const Header = lazy(() => import("@/components/Header/Header"));
const Section = lazy(() => import("@/components/Section/Section"));
const Hero = lazy(() => import("@/components/Hero/Hero"));
const Features = lazy(() => import("@/components/Features/Features"));
const NFTTable = lazy(() => import("@/components/TopNFT/NFTTable"));
const Footer = lazy(() => import("@/components/Footer/Footer"));
const JoinUs = lazy(() => import("@/components/JoinUs/JoinUs"));
const Toast = lazy(() => import("@/components/ToastContainer"));
const MainContainer = lazy(() =>
	import("@/components/MainContainer/MainContainer")
);

function App() {
	return (
		<Suspense fallback={<Fallback/>}>
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
				<Toast />
			</MainContainer>
			<Footer />
		</Suspense>
	);
}

export default App;

