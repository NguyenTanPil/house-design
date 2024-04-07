import { Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TitleSection from '../TitleSection';
import { BORDER_RADIUS } from '../../constants';

const Signature = () => {
	const navigate = useNavigate();

	return (
		<Container
			sx={{
				mt: 8,
			}}
		>
			<TitleSection title='Signature Design' />
			<ImageList
				sx={{
					gridTemplateColumns: '4fr 2fr !important',
				}}
				cols={2}
				gap={8}
			>
				<ImageListItem
					sx={{
						cursor: 'pointer',
						img: {
							borderRadius: BORDER_RADIUS.image,
						},
					}}
					onClick={() => navigate('/details/house1')}
				>
					<img
						src='https://decoxdesign.com/upload/sanpham/large/centenial-house.jpg'
						alt=''
						loading='lazy'
					/>
					<ImageListItemBar
						sx={{
							borderRadius: `0 0 ${BORDER_RADIUS.image} ${BORDER_RADIUS.image}`,
						}}
						title='CENTENIAL HOUSE'
						subtitle='For new home construction, ElectroServ is one of the largest service providers'
					/>
				</ImageListItem>
				<ImageListItem onClick={() => navigate('/details/house1')}>
					<ImageList
						cols={1}
						gap={8}
					>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								img: {
									borderRadius: BORDER_RADIUS.image,
								},
							}}
						>
							<img
								src='https://decoxdesign.com/upload/sanpham/la-sirena-villa.jpg'
								alt=''
								loading='lazy'
							/>
							<ImageListItemBar
								sx={{
									borderRadius: `0 0 ${BORDER_RADIUS.image} ${BORDER_RADIUS.image}`,
								}}
								title='CENTENIAL HOUSE'
								subtitle='For new home construction, ElectroServ is one of the largest service providers'
							/>
						</ImageListItem>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								img: {
									borderRadius: BORDER_RADIUS.image,
								},
							}}
							onClick={() => navigate('/details/house1')}
						>
							<img
								src='https://decoxdesign.com/upload/sanpham/d9-villa.jpg'
								alt=''
								loading='lazy'
							/>
							<ImageListItemBar
								sx={{
									borderRadius: `0 0 ${BORDER_RADIUS.image} ${BORDER_RADIUS.image}`,
								}}
								title='CENTENIAL HOUSE'
								subtitle='For new home construction, ElectroServ is one of the largest service providers'
							/>
						</ImageListItem>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								img: {
									borderRadius: BORDER_RADIUS.image,
								},
							}}
							onClick={() => navigate('/details/house1')}
						>
							<img
								src='https://decoxdesign.com/upload/sanpham/annam-villa.jpg'
								alt=''
								loading='lazy'
							/>
							<ImageListItemBar
								sx={{
									borderRadius: `0 0 ${BORDER_RADIUS.image} ${BORDER_RADIUS.image}`,
								}}
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
