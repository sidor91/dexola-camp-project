import {
	Container,
	Table,
	TH,
	TR,
	TD,
	Image,
	Text,
	Title,
	DynamicTD,
	DynamicTDText,
	ImageTD,
	NFTNameText,
} from "./Table.styled";
import data from './topNFTdata.json';
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
		<Container>
			<Table>
				{!isMobile && (
					<thead>
						<TR style={{ backgroundColor: "inherit" }}>
							<TH></TH>
							<TH>
								<Title>NFT Name</Title>
							</TH>
							<TH>
								<Title>Rarity Level</Title>
							</TH>
							<TH>
								<Title>Total games</Title>
							</TH>
							<TH>
								<Title>Games Won</Title>
							</TH>
							<TH>
								<Title>Price (ETH)</Title>
							</TH>
						</TR>
					</thead>
				)}
				<tbody>
					{data.palyers.map(
						({ nftName, price, rarityLevel, totalGames, gamesWon }, index) => (
							<TR key={index}>
								{isMobile && (
									<DynamicTD label={`${index + 1}. ${nftName}`}>
										<DynamicTDText>{price} ETH</DynamicTDText>
									</DynamicTD>
								)}

								<ImageTD>
									<Image src={images[index]} alt={nftName} aria-hidden='true' />
								</ImageTD>
								{!isMobile && (
									<TD label="NFT Name">
										<NFTNameText>{nftName}</NFTNameText>
									</TD>
								)}
								<TD label="Rarity:">
									<Text>{rarityLevel}</Text>
								</TD>
								<TD label="Total games:">
									<Text>{totalGames}</Text>
								</TD>
								<TD label="Games Won:">
									<Text>{gamesWon}</Text>
								</TD>
								{!isMobile && (
									<TD label="Price (ETH)">
										<Text>{price}</Text>
									</TD>
								)}
							</TR>
						)
					)}
				</tbody>
			</Table>
		</Container>
	);
}









