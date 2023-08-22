import {
	Table,
	THead,
	TR,
	TH,
	TD,
	DynamicTD,
	Image,
	TDText,
	DynamicTDText,
	ImageTD,
	ImageTH,
	HeadTR,
	NFTNameText,
	RarityLevelText,
	THText,
	NameTH,
	RarityTh,
	GamesTH,
	WonTH,
	PriceTH,
	GamesText,
WonText,
PriceText,
} from "./Table.styled";
import data from '../../topNFTdata.json';
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { useState, useEffect } from 'react';
import images from '../../assets/Pics/TopNFTPics/topNFTpics'

export const NFTTable = () => {
    const dimensions = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(dimensions < 744);

    useEffect(() => {
        setIsMobile(dimensions < 744);
    },[dimensions])

    return (
			<Table>
				{!isMobile && (
					<THead>
						<HeadTR>
							<TH>
								<ImageTH></ImageTH>
							</TH>
							<TH>
								<NameTH>NFT Name</NameTH>
							</TH>
							<TH>
								<RarityTh>Rarity Level</RarityTh>
							</TH>
							<TH>
								<GamesTH>Total games</GamesTH>
							</TH>
							<TH>
								<WonTH>Games Won</WonTH>
							</TH>
							<TH>
								<PriceTH>Price (ETH)</PriceTH>
							</TH>
						</HeadTR>
					</THead>
				)}
				<tbody>
					{data.palyers.map(
						({ nftName, price, rarityLevel, totalGames, gamesWon }, index) => (
							<TR key={index}>
								<ImageTD>
									<Image src={images[index]} />
								</ImageTD>
								{isMobile ? (
									<DynamicTD label={`${index + 1}. ${nftName}`}>
										<DynamicTDText>{price} ETH</DynamicTDText>
									</DynamicTD>
								) : (
									<TD label="NFT Name">
										<NFTNameText>{nftName}</NFTNameText>
									</TD>
								)}
								<TD label="Rarity:">
									<RarityLevelText>{rarityLevel}</RarityLevelText>
								</TD>
								<TD label="Total games:">
									<GamesText>{totalGames}</GamesText>
								</TD>
								<TD label="Games Won:">
									<WonText>{gamesWon}</WonText>
								</TD>
								{!isMobile && (
									<TD label="Price (ETH)">
										<PriceText>{price}</PriceText>
									</TD>
								)}
							</TR>
						)
					)}
				</tbody>
			</Table>
		);
}









