import { Container, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';

const Signature = () => {
	return (
		<Container
			sx={{
				mt: 8,
			}}
		>
			<Typography
				variant='h6'
				sx={{
					textTransform: 'uppercase',
					fontWeight: '500',
				}}
			>
				Signature Design
			</Typography>
			<ImageList
				sx={{
					gridTemplateColumns: '4fr 2fr !important',
				}}
				cols={2}
				gap={8}
			>
				<ImageListItem>
					<img
						src='https://decoxdesign.com/upload/sanpham/large/centenial-house.jpg'
						alt=''
						loading='lazy'
					/>
					<ImageListItemBar
						title='CENTENIAL HOUSE'
						subtitle='For new home construction, ElectroServ is one of the largest service providers'
					/>
				</ImageListItem>
				<ImageListItem>
					<ImageList cols={1}>
						<ImageListItem>
							<img
								src='https://decoxdesign.com/upload/sanpham/la-sirena-villa.jpg'
								alt=''
								loading='lazy'
							/>
							<ImageListItemBar
								title='CENTENIAL HOUSE'
								subtitle='For new home construction, ElectroServ is one of the largest service providers'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								src='https://decoxdesign.com/upload/sanpham/d9-villa.jpg'
								alt=''
								loading='lazy'
							/>
							<ImageListItemBar
								title='CENTENIAL HOUSE'
								subtitle='For new home construction, ElectroServ is one of the largest service providers'
							/>
						</ImageListItem>
						<ImageListItem>
							<img
								src='https://decoxdesign.com/upload/sanpham/annam-villa.jpg'
								alt=''
								loading='lazy'
							/>
							<ImageListItemBar
								title='CENTENIAL HOUSE'
								subtitle='For new home construction, ElectroServ is one of the largest service providers'
							/>
						</ImageListItem>
					</ImageList>
				</ImageListItem>
			</ImageList>
		</Container>
	);
};

export default Signature;
