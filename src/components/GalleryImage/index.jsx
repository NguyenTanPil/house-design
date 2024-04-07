import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { BORDER_RADIUS } from '../../constants';
import LoadMoreButton from '../LoadMoreButton';

export default function MasonryImageList(props) {
	const { data } = props;
	const containerRef = useRef(null);
	useEffect(() => {
		const container = containerRef.current;

		const delegate = '[data-fancybox]';
		const options =
			{
				Carousel: {
					infinite: true,
					transition: 'slide',
				},
				Toolbar: {
					display: {
						left: ['infobar'],
						middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW', 'flipX', 'flipY'],
						right: ['slideshow', 'thumbs', 'close'],
					},
					enabled: true,
				},
				Images: {
					zoom: false,
				},
				showClass: 'f-fadeIn',
			} || {};

		Fancybox.bind(container, delegate, options);

		return () => {
			Fancybox.unbind(container);
			Fancybox.close();
		};
	});

	return (
		<Box>
			<ImageList
				variant='masonry'
				cols={4}
				gap={12}
				sx={{
					columnCount: {
						xs: '2 !important',
						sm: '3 !important',
						md: '4 !important',
					},
				}}
				ref={containerRef}
			>
				{data?.map((item) => (
					<ImageListItem
						key={item.img}
						sx={{
							cursor: 'pointer',
							img: {
								borderRadius: BORDER_RADIUS.image,
							},
						}}
					>
						<img
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=248&fit=crop&auto=format`}
							alt={item.title}
							loading='lazy'
							data-fancybox='gallery'
						/>
					</ImageListItem>
				))}
			</ImageList>

			<Box
				sx={{
					mt: '3.6rem',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<LoadMoreButton content='Xem thêm mẫu' />
			</Box>
		</Box>
	);
}

MasonryImageList.propTypes = {
	data: PropTypes.array,
};
