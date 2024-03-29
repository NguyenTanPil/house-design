import { Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';

const Signature = () => {
	return (
		<Container
			sx={{
				mt: 8,
			}}
		>
			<ImageList sx={{}}>
				<ImageListItem
					key='Subheader'
					cols={3}
				>
					<ListSubheader component='div'>Signature Design</ListSubheader>
				</ImageListItem>
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
