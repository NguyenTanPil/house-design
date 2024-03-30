import { Box, Card, CardContent, CardMedia, Container, ImageListItem, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { COLORS } from '../../constants';
import { banner } from '../../dummy';

const Banner = () => {
	return (
		<Container sx={{ mt: 8 }}>
			<Box
				sx={{
					minHeight: '720px',
					background: 'url(https://decoxdesign.com/images/green-bg.jpg) no-repeat',
					backgroundSize: 'contain',
					position: 'relative',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						padding: 4,
						boxSizing: 'border-box',
					}}
				>
					<Splide
						options={{
							type: 'loop',
							autoplay: true,
							drag: 'free',
							start: 0,
							perPage: 3,
							pagination: false,
							gap: 16,
							focus: 'center',
							arrows: false,
							autoScroll: {
								speed: 2,
							},
						}}
					>
						{banner.map((item) => (
							<SplideSlide key={item.id}>
								<ImageListItem>
									<Card
										sx={{
											borderRadius: '0',
											boxShadow: 'none',
										}}
									>
										<CardMedia
											sx={{ height: 180 }}
											image={item.imgUrl}
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant='h6'
												component='div'
												sx={{
													fontSize: '1rem',
													mb: 0,
													color: COLORS.titleColor,
													textOverflow: 'ellipsis',
													display: '-webkit-box',
													'-webkit-line-clamp': '2',
													'-webkit-box-orient': 'vertical',
													overflow: 'hidden',
												}}
											>
												{item.title}
											</Typography>
										</CardContent>
									</Card>
								</ImageListItem>
							</SplideSlide>
						))}
					</Splide>
				</Box>
			</Box>
		</Container>
	);
};

export default Banner;
