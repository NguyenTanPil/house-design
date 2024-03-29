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
			<ImageList cols={3}>
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
						src='https://decoxdesign.com/upload/sanpham/the-opera-180m2.jpg'
						alt=''
						loading='lazy'
					/>
					<ImageListItemBar
						title='CENTENIAL HOUSE'
						subtitle='For new home construction, ElectroServ is one of the largest service providers'
					/>
				</ImageListItem>
			</ImageList>
		</Container>
	);
};

export default Signature;
