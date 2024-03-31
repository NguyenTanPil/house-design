import {
	Box,
	Container,
	Grid,
	ImageListItem,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Breadcrumb from '../../components/Breadcrumbs';
import { COLORS } from '../../constants';
import { interiorDesign, newArchitecture, tiktokStories } from '../../dummy';
import PopularCategories from '../../components/PopularCategories';
import LoadMoreButton from '../../components/LoadMoreButton';

const Details = () => {
	return (
		<>
			<Container sx={{ mt: 3 }}>
				<Breadcrumb />

				<Box sx={{ mt: '4rem' }}>
					<Box
						sx={{
							display: 'flex',
							alignContent: 'center',
							mb: '1.2rem',
						}}
					>
						<Typography
							sx={{
								color: COLORS.textColor,
								textTransform: 'uppercase',
							}}
						>
							Thiết kế nội thất
						</Typography>
						<Typography
							sx={{
								color: COLORS.textColor,
								textTransform: 'uppercase',

								'&:before': {
									content: '"|"',
									display: 'inline',
									margin: '0 1.25rem',
									fontFamily: 'inherit',
									fontStyle: 'normal',
									fontWeight: '400',
									verticalAlign: 'baseline',
									fontSize: '0.6em',
									position: 'relative',
									top: '-0.2em',
								},
							}}
						>
							POSTED 29/08/16
						</Typography>
						<Typography
							sx={{
								color: COLORS.textColor,
								textTransform: 'uppercase',

								'&:before': {
									content: '"|"',
									display: 'inline',
									margin: '0 1.25rem',
									fontFamily: 'inherit',
									fontStyle: 'normal',
									fontWeight: '400',
									verticalAlign: 'baseline',
									fontSize: '0.6em',
									position: 'relative',
									top: '-0.2em',
								},
							}}
						>
							VIEW 544
						</Typography>
					</Box>
					<Box>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								md={8}
							>
								<ImageListItem
									sx={{
										height: '100% !important',
									}}
								>
									<img
										src='https://decoxdesign.com/upload/images/centenial-house-decox-1.jpg'
										alt=''
									/>
								</ImageListItem>
							</Grid>
							<Grid
								item
								xs={12}
								md={4}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
									}}
								>
									<Box
										sx={{
											border: `1px solid ${COLORS.borderColor}`,
											padding: '1.6rem 2rem 1.2rem',
										}}
									>
										<Typography
											variant='h5'
											sx={{
												fontSize: '1.25rem',
												mb: '0.875rem',
											}}
										>
											Project Information
										</Typography>
										<List
											sx={{ padding: 0, width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
											aria-label='contacts'
										>
											<ListItem disablePadding>
												<ListItemIcon>Name</ListItemIcon>
												<ListItemText
													primary='Centenial house'
													sx={{ mb: 0 }}
												/>
											</ListItem>
											<ListItem disablePadding>
												<ListItemIcon>Area</ListItemIcon>
												<ListItemText
													primary='400m2'
													sx={{ mb: 0 }}
												/>
											</ListItem>
											<ListItem disablePadding>
												<ListItemIcon>Style</ListItemIcon>
												<ListItemText
													primary='Indochine'
													sx={{ mb: 0 }}
												/>
											</ListItem>
											<ListItem disablePadding>
												<ListItemIcon>Design</ListItemIcon>
												<ListItemText
													primary='Decox'
													sx={{ mb: 0 }}
												/>
											</ListItem>
										</List>
									</Box>
									<Box
										sx={{
											border: `1px solid ${COLORS.borderColor}`,
											padding: '1.6rem 2rem 1.2rem',
											mt: '1rem',
											flexGrow: 1,
										}}
									>
										<Typography
											variant='h5'
											sx={{
												fontSize: '1.25rem',
												mb: '0.875rem',
											}}
										>
											Design Style
										</Typography>
										<Typography
											variant='body1'
											sx={{ color: COLORS.textColor }}
										>
											Mộng Chiều Xuân là bản tango Xuân nổi tiếng hàng đầu trong làng Tân Nhạc Việt Nam trước 1975, do
											nhạc sĩ Ngọc Bích viết. Với cảm hứng từ những câu từ tha thiết trong tác phẩm bất hủ ấy, KTS Decox
											đã sáng tác nên Centenial house, một dự án thiết kế nội thất mang không khí của Tết Đông Dương
											hoài niệm ấy. Với thật nhiều những bức hoạ đẹp, không gian của ngôi nhà như nâng niu những di sản
											vượt thời gian, là một món quà đầy xúc cảm trong những ngày xuân đầu năm mà Decox muốn gửi đến
											những người yêu phong cách Indochine.
										</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>

					<Box sx={{ mt: '2rem' }}>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textTransform: 'uppercase',
								fontWeight: '500',
							}}
						>
							Sảnh chờ
						</Typography>
						<Box>
							<Splide
								options={{
									type: 'loop',
									autoplay: true,
									drag: 'free',
									start: 0,
									perPage: 3,
									pagination: true,
									gap: 6,
									focus: 'center',
									arrows: true,
									autoScroll: {
										speed: 2,
									},
								}}
							>
								{interiorDesign.map((item) => (
									<SplideSlide key={item.id}>
										<ImageListItem>
											<img
												src={item.imgUrl}
												alt=''
												loading='lazy'
											/>
										</ImageListItem>
									</SplideSlide>
								))}
							</Splide>
						</Box>
					</Box>
					<Box sx={{ mt: '2rem' }}>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textTransform: 'uppercase',
								fontWeight: '500',
							}}
						>
							Phòng khách
						</Typography>
						<Box>
							<Splide
								options={{
									type: 'loop',
									autoplay: true,
									drag: 'free',
									start: 0,
									perPage: 3,
									pagination: true,
									gap: 6,
									focus: 'center',
									arrows: true,
									autoScroll: {
										speed: 2,
									},
								}}
							>
								{interiorDesign.map((item) => (
									<SplideSlide key={item.id}>
										<ImageListItem>
											<img
												src={item.imgUrl}
												alt=''
												loading='lazy'
											/>
										</ImageListItem>
									</SplideSlide>
								))}
							</Splide>
						</Box>
					</Box>
					<Box sx={{ mt: '2rem' }}>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textTransform: 'uppercase',
								fontWeight: '500',
							}}
						>
							Phòng ăn
						</Typography>
						<Box>
							<Splide
								options={{
									type: 'loop',
									autoplay: true,
									drag: 'free',
									start: 0,
									perPage: 3,
									pagination: true,
									gap: 6,
									focus: 'center',
									arrows: true,
									autoScroll: {
										speed: 2,
									},
								}}
							>
								{interiorDesign.map((item) => (
									<SplideSlide key={item.id}>
										<ImageListItem>
											<img
												src={item.imgUrl}
												alt=''
												loading='lazy'
											/>
										</ImageListItem>
									</SplideSlide>
								))}
							</Splide>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						mt: '3.6rem',
						mb: '3.6rem',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<LoadMoreButton content='see more designs' />
				</Box>
			</Container>
			<PopularCategories
				titleUrl='/popular/contruction'
				items={interiorDesign}
				imageHeight={180}
				title='CÙNG THỂ LOẠI'
				subTitle='Same category'
			/>
			<PopularCategories
				titleUrl='/popular/interior-design'
				items={newArchitecture}
				imageHeight={180}
				title='DECOX SIGNATURE'
				subTitle='Collection'
			/>
			<PopularCategories
				titleUrl='/popular/tiktok'
				items={tiktokStories}
				perPage={5}
				imageHeight={240}
				title='SHORT VIDEO'
				subTitle='Decox on tiktok'
			/>
		</>
	);
};

export default Details;
