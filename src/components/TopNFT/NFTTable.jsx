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
import useWindowDimensions from "@/utils/hooks/useWindowDimensions";
import { useState, useEffect } from 'react';
import images from '@/assets/Pics/TopNFTPics/topNFTpics'

function NFTTable () {
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
							<TH aria-label="nft photo"></TH>
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
									<DynamicTD aria-label={`${index + 1}. ${nftName}`}>
										<DynamicTDText>{price} ETH</DynamicTDText>
									</DynamicTD>
								)}

								<ImageTD aria-label="nft photo">
									<Image
										src={images[index]}
										alt={nftName}
										aria-label={`${nftName} photo`}
									/>
								</ImageTD>
								{!isMobile && (
									<TD aria-label="NFT Name">
										<NFTNameText>{nftName}</NFTNameText>
									</TD>
								)}
								<TD aria-label="Rarity:">
									<Text>{rarityLevel}</Text>
								</TD>
								<TD aria-label="Total games:">
									<Text>{totalGames}</Text>
								</TD>
								<TD aria-label="Games Won:">
									<Text>{gamesWon}</Text>
								</TD>
								{!isMobile && (
									<TD aria-label="Price (ETH)">
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



export default NFTTable;





