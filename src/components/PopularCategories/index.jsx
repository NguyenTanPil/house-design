import { Card, CardContent, CardMedia, Container, Grid, ImageListItem, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const PopularCategories = ({ items, title, subTitle, perPage, imageHeight }) => {
	return (
		<Container sx={{ mt: 4 }}>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
					md={2}
					alignContent='center'
				>
					<Typography
						variant='h2'
						sx={{
							mt: '0.5rem',
							textAlign: { xs: 'center', md: 'start' },
							fontSize: '1.25rem',
							fontWeight: '700',
							color: COLORS.titleColor,
						}}
					>
						{title}
					</Typography>
					<Typography
						variant='h6'
						sx={{
							textAlign: { xs: 'center', md: 'start' },
							fontSize: '0.875rem',
							fontWeight: '400',
							color: COLORS.textColor,
						}}
					>
						{subTitle}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={10}
				>
					<Splide
						options={{
							type: 'loop',
							autoplay: true,
							drag: 'free',
							start: 0,
							perPage: perPage,
							pagination: false,
							gap: 6,
							focus: 'center',
							arrows: false,
							autoScroll: {
								speed: 2,
							},
						}}
					>
						{items.map((item) => (
							<SplideSlide key={item.id}>
								<ImageListItem>
									<Card
										sx={{
											borderRadius: '0',
											boxShadow: 'none',
										}}
									>
										<CardMedia
											sx={{ height: imageHeight }}
											image={item.imgUrl}
										/>
										<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
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
											{item.desc && (
												<Typography
													variant='body2'
													color={COLORS.textColor}
													sx={{
														textOverflow: 'ellipsis',
														display: '-webkit-box',
														'-webkit-line-clamp': '2',
														'-webkit-box-orient': 'vertical',
														overflow: 'hidden',
													}}
												>
													{item.desc}
												</Typography>
											)}
										</CardContent>
									</Card>
								</ImageListItem>
							</SplideSlide>
						))}
					</Splide>
				</Grid>
			</Grid>
		</Container>
	);
};

PopularCategories.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
	perPage: PropTypes.number,
	subTitle: PropTypes.string,
	imageHeight: PropTypes.string,
};

PopularCategories.defaultProps = {
	items: [],
	perPage: 3,
};

export default PopularCategories;
