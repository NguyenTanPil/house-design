import { Box, Container, ImageListItem, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { COLORS } from '../../constants';
import { collection } from '../../dummy';

const Collection = () => {
	return (
		<Container sx={{ mt: 8 }}>
			<Typography
				variant='h6'
				sx={{
					mb: 2,
					textTransform: 'uppercase',
					fontWeight: '500',
				}}
			>
				Our Collection
			</Typography>
			<Splide
				options={{
					type: 'loop',
					autoplay: true,
					drag: 'free',
					start: 1,
					perPage: 2,
					pagination: false,
					gap: 6,
					focus: 'center',
					arrows: false,
					fixedHeight: '280px',
					autoScroll: {
						speed: 2,
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
							}}
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
