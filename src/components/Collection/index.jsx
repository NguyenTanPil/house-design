import { Box, Container, ImageListItem, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { BORDER_RADIUS, COLORS } from '../../constants';
import { collection } from '../../dummy';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@splidejs/splide-extension-grid';
import TitleSection from '../TitleSection';

const Collection = () => {
	const navigate = useNavigate();

	return (
		<Container
			sx={{
				mt: 8,
				img: {
					borderRadius: BORDER_RADIUS.image,
				},
			}}
		>
			<TitleSection
				title='DECOX SIGNATURE'
				subTitle='Collection'
			/>
			<Splide
				extensions={{ Grid }}
				options={{
					rewind: true,
					type: 'loop',
					autoplay: true,
					start: 1,
					pagination: true,
					focus: 'center',
					arrows: false,
					fixedHeight: '460px',
					autoScroll: {
						speed: 2,
					},
					grid: {
						rows: 2,
						cols: 3,
						gap: {
							row: '0.5rem',
							col: '0.5rem',
						},
					},
					breakpoints: {
						900: {
							fixedHeight: '400px',
						},
					},
				}}
			>
				{collection.map((item) => (
					<SplideSlide key={item.id}>
						<ImageListItem
							sx={{
								position: 'relative',
								height: '100% !important',
								cursor: 'pointer',
							}}
							onClick={() => navigate(`/details/${item.text}`)}
						>
							<img
								src={item.imgUrl}
								alt=''
								loading='lazy'
							/>
							<Box
								sx={{
									cursor: 'pointer',
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 2,
									opacity: 0,
									width: '100%',
									'&:hover': {
										opacity: 1,
										transition: '0.3s ease-in-out',
										background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 88%,transparent)',
									},
								}}
							>
								<Typography
									variant='h5'
									sx={{
										color: COLORS.backgroundColor,
									}}
								>
									{item.text}
								</Typography>
							</Box>
						</ImageListItem>
					</SplideSlide>
				))}
			</Splide>
		</Container>
	);
};

export default Collection;
