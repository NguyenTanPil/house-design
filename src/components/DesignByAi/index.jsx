import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BORDER_RADIUS, COLORS } from '../../constants';
import { designByAi } from '../../dummy';
import TitleSection from '../TitleSection';

const DesignByAi = () => {
	const navigate = useNavigate();

	return (
		<Container sx={{ mt: 8 }}>
			<TitleSection title='Design By Ai' />
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
							img: {
								borderRadius: BORDER_RADIUS.image,
							},
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
		</Container>
	);
};

export default DesignByAi;
