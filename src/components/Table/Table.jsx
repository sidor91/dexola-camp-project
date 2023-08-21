import {
    StyledTable,
    StyledThead,
    StyledTR,
    StyledTH,
    StyledTbody,
    StyledTD
} from './Table.styled';
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
						<StyledTR key={index}>
							{isMobile ? 
								<StyledTD label={elem.nftName}>{elem.price}</StyledTD> : <StyledTD label="NFT Name">{elem.nftName}</StyledTD>
							}
							
							<StyledTD label="Rarity:">{elem.rarityLevel}</StyledTD>
							<StyledTD label="Total games:">{elem.totalGames}</StyledTD>
							<StyledTD label="Games Won:">{elem.gamesWon}</StyledTD>
							{!isMobile && <StyledTD label="Price (ETH)">{elem.price}</StyledTD>}
						</StyledTR>
					))}
				</StyledTbody>
			</StyledTable>
		);
}









