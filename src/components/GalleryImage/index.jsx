import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';

export default function MasonryImageList(props) {
	const { data } = props;

	return (
		<Container sx={{ mt: 6 }}>
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
				>
					{data?.map((item) => (
						<ImageListItem key={item.img}>
							<img
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								src={`${item.img}?w=248&fit=crop&auto=format`}
								alt={item.title}
								loading='lazy'
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Container>
	);
}

MasonryImageList.propTypes = {
	data: PropTypes.array,
};
