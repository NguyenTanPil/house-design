import { Card, CardContent, CardMedia, Container, Grid, ImageListItem, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { COLORS } from '../../constants';
import PropTypes from 'prop-types';

const PopularCategories = ({ title, subTitle }) => {
	return (
		<Container sx={{ mt: 4 }}>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
					md={3}
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
					md={9}
				>
					<Splide
						options={{
							type: 'loop',
							autoplay: true,
							drag: 'free',
							start: 1,
							perPage: 3,
							pagination: false,
							gap: 6,
							focus: 'center',
							arrows: false,
							autoScroll: {
								speed: 2,
							},
						}}
					>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/large/centenial-house.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h6'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color={COLORS.textColor}
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/sofitel-villa.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/binh-tan-townhouse-hinh-anh-thuc-te.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/d9-villa.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/the-reverie-townhouse.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/the-indofuture-sky-villa.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/annam-villa.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/the-deluxe-townhouse.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/deluxe-townhouse.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
						<SplideSlide>
							<ImageListItem>
								<Card
									sx={{
										borderRadius: '0',
										boxShadow: 'none',
									}}
								>
									<CardMedia
										sx={{ height: 180 }}
										image='https://decoxdesign.com/upload/sanpham/the-silver-townhouse.jpg'
									/>
									<CardContent sx={{ pl: 0, pb: '0.5rem !important' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											sx={{ fontSize: '1rem', color: COLORS.titleColor }}
										>
											The Opera 180m2 - Metropole Thu Thiem
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
										>
											Interior Design
										</Typography>
									</CardContent>
								</Card>
							</ImageListItem>
						</SplideSlide>
					</Splide>
				</Grid>
			</Grid>
		</Container>
	);
};

PopularCategories.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

export default PopularCategories;
