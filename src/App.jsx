import { MainContainer } from "./components/MainContainer/MainContainer";
import { Header } from "./components/Header/Header";
import { JoinNowBtn } from "./components/JoinNowBtn/JoinNowBtn";
import { Hero } from "./components/Hero/Hero";
import Logo from './assets/Pics/Logo.svg'

function App() {
 

  return (
    < >
      <Header>
        <img src={Logo} width={34.5} height={19.5}/>
        <JoinNowBtn/>
      </Header>
      <MainContainer>
        <Hero>
          
      </Hero>
      </MainContainer>
		</ >
	);
}

export default App
