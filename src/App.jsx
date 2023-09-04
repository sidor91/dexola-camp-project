import { Suspense, lazy } from "react";
import Fallback from "@/components/Fallback/Fallback";
import useWindowDimensions from "@/utils/hooks/useWindowDimensions";
import { useState, useEffect } from "react";

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
const StarRunner = lazy(() =>
	import("@/components/StarrunnerAnimation/StarrunnerAnimation")
);

function App() {
	const dimensions = useWindowDimensions();
	const [isStarRunnerShown, setIsStarRunnerShown] = useState(false);

	useEffect(() => {
		if (dimensions >= 1440) {
			setIsStarRunnerShown(true);
		} else {
			setIsStarRunnerShown(false);
		}
	}, [dimensions]);

	return (
		<Suspense fallback={<Fallback/>}>
			<Header />
			<MainContainer>
				<Hero />
				{isStarRunnerShown && <StarRunner />}
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
