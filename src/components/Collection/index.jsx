import { Container, ImageListItem, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';

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
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/large/centenial-house.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/sofitel-villa.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/binh-tan-townhouse-hinh-anh-thuc-te.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/d9-villa.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/the-reverie-townhouse.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/the-indofuture-sky-villa.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/annam-villa.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/the-deluxe-townhouse.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/deluxe-townhouse.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
				<SplideSlide>
					<ImageListItem>
						<img
							src='https://decoxdesign.com/upload/sanpham/the-silver-townhouse.jpg'
							alt=''
							loading='lazy'
						/>
					</ImageListItem>
				</SplideSlide>
			</Splide>
		</Container>
	);
};

export default Collection;
