import { Container } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BORDER_RADIUS } from '../../constants';

const Slider = () => {
	return (
		<Container
			sx={{
				'.splide__track': {
					borderRadius: BORDER_RADIUS.image,
				},
			}}
		>
			<Splide
				options={{ rewind: false, type: 'loop', autoplay: true, width: '100%', fixedHeight: '600px' }}
				aria-label='React Splide Example'
			>
				<SplideSlide>
					<img
						src='https://decoxdesign.com/upload/banner/feliz-en-vista.jpg'
						alt='Image 1'
					/>
				</SplideSlide>
				<SplideSlide>
					<img
						src='https://decoxdesign.com/upload/banner/elegant-villa.jpg'
						alt='Image 2'
					/>
				</SplideSlide>
				<SplideSlide>
					<img
						src='https://decoxdesign.com/upload/banner/bamboo-villa.jpg'
						alt='Image 3'
					/>
				</SplideSlide>
			</Splide>
		</Container>
	);
};

export default Slider;
