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
				cols={4}
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
								'-webkit-line-clamp': '2',
								'-webkit-box-orient': 'vertical',
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
