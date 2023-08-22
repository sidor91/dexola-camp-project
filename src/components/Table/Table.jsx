import {
	StyledTable,
	StyledThead,
	StyledTR,
	StyledTH,
	StyledTbody,
	StyledTD,
	DynamicTD,
	StyledImage,
	TDText,
	DynamicTDText,
	ImageContainer,
} from "./Table.styled";
import data from '../../topNFTdata.json';
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { useState, useEffect } from 'react';
import images from '../../assets/Pics/TopNFTPics/topNFTpics'

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
					{data.palyers.map(
						({ nftName, price, rarityLevel, totalGames, gamesWon }, index) => (
							<StyledTR key={index}>
								{isMobile ? (
									<DynamicTD label={`${index + 1}. ${nftName}`}>
										<DynamicTDText>{price} ETH</DynamicTDText>
									</DynamicTD>
								) : (
									<StyledTD label="NFT Name">{nftName}</StyledTD>
								)}
								<ImageContainer>
									<StyledImage src={images[index]} />
								</ImageContainer>
								<StyledTD label="Rarity:">
									<TDText>{rarityLevel}</TDText>
								</StyledTD>
								<StyledTD label="Total games:">
									<TDText>{totalGames}</TDText>
								</StyledTD>
								<StyledTD label="Games Won:">
									<TDText>{gamesWon}</TDText>
								</StyledTD>
								{!isMobile && <StyledTD label="Price (ETH)">{price}</StyledTD>}
							</StyledTR>
						)
					)}
				</StyledTbody>
			</StyledTable>
		);
}









