import {
	StyledTable,
	StyledThead,
	StyledTR,
	StyledTH,
	StyledTbody,
	StyledTD,
	PlayerContainer,
	SecondaryInformationContainer,
} from "./Table.styled";
import data from '../../topNFTdata.json';
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { useState, useEffect } from 'react';

export const Table = () => {
    const dimensions = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(dimensions < 744);

    useEffect(() => {
        setIsMobile(dimensions < 744);
    },[dimensions])


    return (
			<StyledTable>
				<StyledThead>
					<StyledTR>
						<StyledTH>NFT Name</StyledTH>
						<StyledTH>Rarity Level</StyledTH>
						<StyledTH>Total games</StyledTH>
						<StyledTH>Games Won</StyledTH>
						<StyledTH>Price (ETH)</StyledTH>
					</StyledTR>
				</StyledThead>
				<StyledTbody>
					{data.palyers.map((elem, index) => (
						// <PlayerContainer key={index}>
							<StyledTR key={index}>
								{isMobile ? (
									<StyledTD label={elem.nftName}>
										<span style={{ marginLeft: "auto", paddingBottom: 12 }}>
											{elem.price}
										</span>
									</StyledTD>
								) : (
									<StyledTD label="NFT Name">{elem.nftName}</StyledTD>
								)}

								<SecondaryInformationContainer>
									<StyledTD label="Rarity:">
										<span style={{ marginLeft: "auto" }}>
											{elem.rarityLevel}
										</span>
									</StyledTD>
									<StyledTD label="Total games:">
										<span style={{ marginLeft: "auto" }}>
											{elem.totalGames}
										</span>
									</StyledTD>
									<StyledTD label="Games Won:">
										<span style={{ marginLeft: "auto" }}>{elem.gamesWon}</span>
									</StyledTD>
									{!isMobile && (
										<StyledTD label="Price (ETH)">{elem.price}</StyledTD>
									)}
								</SecondaryInformationContainer>
							</StyledTR>
						// </PlayerContainer>
					))}
				</StyledTbody>
			</StyledTable>
		);
}









