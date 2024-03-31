import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { designByAi } from '../../dummy';
import { COLORS } from '../../constants';
import LoadMoreButton from '../LoadMoreButton';
import { useNavigate } from 'react-router-dom';

const DesignByAi = () => {
	const navigate = useNavigate();

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
				Design By Ai
			</Typography>
			<ImageList
				sx={{
					gridTemplateColumns: {
						xs: 'repeat(2, 1fr) !important',
						sm: 'repeat(3, 1fr) !important',
						md: 'repeat(4, 1fr) !important',
					},
				}}
				gap={8}
			>
				{designByAi.map((item) => (
					<ImageListItem
						key={item.id}
						sx={{
							cursor: 'pointer',
						}}
						onClick={() => navigate(`/details/${item.title}`)}
					>
						<img
							src={item.imgUrl}
							alt=''
							loading='lazy'
						/>
						<Typography
							gutterBottom
							variant='h6'
							component='div'
							sx={{
								fontSize: '1rem',
								mt: 1,
								color: COLORS.titleColor,
								textOverflow: 'ellipsis',
								display: '-webkit-box',
								'-webkit-line-clamp': '2',
								'-webkit-box-orient': 'vertical',
								overflow: 'hidden',

								'&:hover': {
									transition: '0.3s ease-in-out',
									color: COLORS.selectedColor,
								},
							}}
						>
							{item.title}
						</Typography>
					</ImageListItem>
				))}
			</ImageList>
			<Box
				sx={{
					mt: '1.6rem',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<LoadMoreButton
					content='see more'
					onClick={() => navigate('/popular/design-inspiration')}
				/>
			</Box>
		</Container>
	);
};

export default DesignByAi;
