import { Card, CardContent, CardMedia, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../constants';
import { designByAi } from '../../dummy';
import TitleSection from '../TitleSection';

const DesignInspiration = () => {
	const navigate = useNavigate();

	return (
		<Container sx={{ mt: 8 }}>
			<TitleSection title='Design Inspiration' />
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
						<Card
							sx={{
								borderRadius: '0',
								boxShadow: 'none',
							}}
						>
							<CardMedia
								sx={{ height: 180 }}
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

										'&:hover': {
											transition: '0.3s ease-in-out',
											color: COLORS.selectedColor,
										},
									}}
								>
									{item.title}
								</Typography>
								<Typography
									variant='body2'
									color={COLORS.textColor}
									sx={{
										cursor: 'default',
										textOverflow: 'ellipsis',
										display: '-webkit-box',
										'-webkit-line-clamp': '3',
										'-webkit-box-orient': 'vertical',
										overflow: 'hidden',
									}}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta voluptates culpa odio deserunt
									distinctio, soluta corporis nesciunt ipsa quidem voluptate quos quod nulla cupiditate commodi quia
									dignissimos dolore. In?
								</Typography>
							</CardContent>
						</Card>
					</ImageListItem>
				))}
			</ImageList>
		</Container>
	);
};

export default DesignInspiration;
