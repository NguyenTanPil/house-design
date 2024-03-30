import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { designByAi } from '../../dummy';
import { COLORS } from '../../constants';

const DesignByAi = () => {
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
					<ImageListItem key={item.id}>
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
								webkitLineClamp: '2',
								webkitBoxOrient: 'vertical',
								overflow: 'hidden',
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
