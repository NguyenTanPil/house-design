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
import PopularCategories from '../../components/PopularCategories';
import { BORDER_RADIUS, COLORS, FONT_SIZE } from '../../constants';
import { interiorDesign, newArchitecture, tiktokStories } from '../../dummy';

const Details = () => {
	return (
		<>
			<Container sx={{ mt: 3, mb: 8 }}>
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
								fontSize: FONT_SIZE.description,
							}}
						>
							Thiết kế nội thất
						</Typography>
						<Typography
							sx={{
								color: COLORS.textColor,
								textTransform: 'uppercase',
								fontSize: FONT_SIZE.description,

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
								fontSize: FONT_SIZE.description,

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
							>
								<ImageListItem
									sx={{
										height: '38rem !important',
										img: {
											borderRadius: BORDER_RADIUS.image,
										},
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
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
									}}
								>
									<Box sx={{ mb: '2rem', mt: '1rem' }}>
										<Typography
											variant='h5'
											sx={{
												fontSize: FONT_SIZE.sectionTitle,
												mb: '0.75rem',
												textTransform: 'uppercase',
											}}
										>
											Thông tin dự án
										</Typography>
										<List
											sx={{ padding: 0, width: '100%', bgcolor: 'background.paper' }}
											aria-label='contacts'
										>
											<ListItem disablePadding>
												<ListItemIcon sx={{ minWidth: '6.875rem' }}>Name</ListItemIcon>
												<ListItemText
													primary='Centenial house'
													sx={{ mb: 0 }}
												/>
											</ListItem>
											<ListItem disablePadding>
												<ListItemIcon sx={{ minWidth: '6.875rem' }}>Diện tích</ListItemIcon>
												<ListItemText
													primary='400m2'
													sx={{ mb: 0 }}
												/>
											</ListItem>
											<ListItem disablePadding>
												<ListItemIcon sx={{ minWidth: '6.875rem' }}>Phong cách</ListItemIcon>
												<ListItemText
													primary='Indochine'
													sx={{ mb: 0 }}
												/>
											</ListItem>
											<ListItem disablePadding>
												<ListItemIcon sx={{ minWidth: '6.875rem' }}>Design</ListItemIcon>
												<ListItemText
													primary='Decox'
													sx={{ mb: 0 }}
												/>
											</ListItem>
										</List>
									</Box>
									<Box>
										<Typography
											variant='h5'
											sx={{
												fontSize: FONT_SIZE.sectionTitle,
												mb: '0.75rem',
												textTransform: 'uppercase',
											}}
										>
											Phong cách thiết kế
										</Typography>
										<Typography
											variant='body1'
											sx={{ color: COLORS.textColor, fontSize: FONT_SIZE.description }}
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

					<Box sx={{ mt: '2rem', img: { borderRadius: BORDER_RADIUS.image } }}>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textTransform: 'uppercase',
								fontWeight: '500',
								fontSize: FONT_SIZE.sectionTitle,
							}}
						>
							Kiến trúc
						</Typography>
						<Box>
							<Typography
								variant='body1'
								sx={{ color: COLORS.textColor, fontSize: FONT_SIZE.description }}
							>
								Xuyên suốt dòng chảy lịch sử, phong cách Indochine đã trải qua nhiều thay đổi về thiết kế lẫn công năng
								để phù hợp với thị hiếu, xu hướng thị trường. Không còn nhuốm màu cổ kính như những thiết kế truyền
								thống, kiến trúc Indochine thời nay là bản hòa tấu đầy sinh động của sắc màu, vật liệu hiện đại được
								lồng ghép đầy khéo léo bên cạnh những chi tiết đặc trưng của kiến trúc Đông Dương.
							</Typography>
							<ImageListItem
								sx={{
									mt: 3,
									height: '38rem !important',
									img: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
							>
								<img
									src='https://decoxdesign.com/upload/images/mau-nha-dep-d9-villa-01-decox.jpg'
									alt=''
								/>
							</ImageListItem>
							<ImageListItem
								sx={{
									mt: 3,
									height: '38rem !important',
									img: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
							>
								<img
									src='https://decoxdesign.com/upload/images/mau-nha-dep-d9-villa-02-decox.jpg'
									alt=''
								/>
							</ImageListItem>
						</Box>
					</Box>
					<Box sx={{ mt: '2rem', img: { borderRadius: BORDER_RADIUS.image } }}>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textTransform: 'uppercase',
								fontWeight: '500',
								fontSize: FONT_SIZE.sectionTitle,
							}}
						>
							Phòng khách
						</Typography>
						<Box>
							<Typography
								variant='body1'
								sx={{ color: COLORS.textColor, fontSize: FONT_SIZE.description }}
							>
								Phủ lên công trình là những tone màu trầm trung tính tạo nên nét hiện đại, hướng tới xu hướng tinh giản
								của tương lai, Decox mời bạn cùng chiêm ngưỡng.
							</Typography>
							<ImageListItem
								sx={{
									mt: 3,
									height: '38rem !important',
									img: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
							>
								<img
									src='https://decoxdesign.com/upload/images/penthouse-massimo-217m2-phong-khach-20-decox.jpg'
									alt=''
								/>
							</ImageListItem>
							<ImageListItem
								sx={{
									mt: 3,
									height: '38rem !important',
									img: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
							>
								<img
									src='https://decoxdesign.com/upload/images/penthouse-massimo-217m2-phong-khach-10-decox.jpg'
									alt=''
								/>
							</ImageListItem>
						</Box>
					</Box>
					<Box sx={{ mt: '2rem', img: { borderRadius: BORDER_RADIUS.image } }}>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textTransform: 'uppercase',
								fontWeight: '500',
								fontSize: FONT_SIZE.sectionTitle,
							}}
						>
							Phong cách thiết kế
						</Typography>
						<Box>
							<Typography
								variant='body1'
								sx={{ color: COLORS.textColor, fontSize: FONT_SIZE.description }}
							>
								Thiết kế chú trọng vào yếu tố ánh sáng để tôn lên vẻ đẹp cao cấp của chất liệu, nội thất sử dụng. Đồng
								thời, ánh sáng còn tạo nhịp chuyển nhẹ nhàng giữa các không gian chức năng và mang lại cảm giác ấm cúng,
								thoải mái, tăng sự kết nối giữa các thành viên trong gia đình.
							</Typography>
							<ImageListItem
								sx={{
									mt: 3,
									height: '38rem !important',
									img: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
							>
								<img
									src='https://decoxdesign.com/upload/images/mau-nha-dep-thi-cong-binh-tan-townhouse-02-decox.jpg'
									alt=''
								/>
							</ImageListItem>
						</Box>
					</Box>
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
