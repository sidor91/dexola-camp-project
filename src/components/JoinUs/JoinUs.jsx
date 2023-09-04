import {
	Container,
	InformationContainer,
	Heading,
	Text,
	ArrowIcon,
} from "./JoinUs.styled";
import useWindowDimensions from '@/utils/hooks/useWindowDimensions';
import { useState, useEffect } from "react";
import Form from "@/components/JoinUs/Form/Form";
import iconArrowRight from "@/assets/Pics/icon_arrow-right.svg";

function JoinUs () {
    const [isDesktop, setIsDesktop] = useState(false);
    const dimensions = useWindowDimensions();

    useEffect(() => {
        if (dimensions >= 1440) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
    },[dimensions])
    
	return (
		<Container>
			<InformationContainer>
				<Heading>Experience the Power of StarRunner</Heading>
				<Text>
					{`Join Our Community and Embark on a Journey of Opportunities. Discover
					the full range of our services that cater to your needs. We've got
					you covered with top-notch solutions.`}
                </Text>
                {isDesktop && <ArrowIcon src={iconArrowRight} />}
            </InformationContainer>
            <Form/>
		</Container>
	);
}

export default JoinUs;