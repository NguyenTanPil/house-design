import {
	Container,
	Box,
	Typography,
	ListItem,
	List,
	ListItemText,
	FormControl,
	TextField,
	Card,
	CardContent,
	CardActions,
} from '@mui/material';
import { BORDER_RADIUS, COLORS, FONT_SIZE } from '../../constants';
import LoadMoreButton from '../../components/LoadMoreButton';

const Quote = () => {
	return (
		<Container sx={{ mt: 6 }}>
			<Box>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Báo giá thi công nội thất trọn gói cao cấp chi tiết năm 2024
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Thiết kế và thi công nội thất luôn là hai yếu tố quan trọng mà hầu hết gia chủ đều hướng đến khi sở hữu một
					căn hộ chung cư hay nhà phố, biệt thự. Trước nhu cầu ngày một tăng cao, Decox Design đã chuẩn bị nhiều gói
					dịch vụ với phân khúc đa dạng trong báo giá thi công nội thất trọn gói mới nhất năm 2024 sau đây nhằm mang đến
					một căn hộ đẹp, tiện nghi với mức chi phí đầu tư hợp lý cho quý khách hàng.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Trọn gói dịch vụ thiết kế thi công nội thất cao cấp tại Decox Design
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Đúng với tên gọi “cao cấp”, ngoài xác định style thiết kế phù hợp, thể hiện đẳng cấp của gia chủ Decox Design
					còn mong muốn gửi gắm cái “hồn” của thiết kế vào căn nhà để gia chủ có thể cảm thấy dễ chịu và thoải mái nhất
					khi trở về tổ ấm của mình. Những ưu điểm của gói thi công nội thất cao cấp có thể kể đến như:
				</Typography>
				<List dense={true}>
					<ListItem>
						<ListItemText
							sx={{
								color: COLORS.textColor,
								span: {
									fontSize: FONT_SIZE.text,
								},
							}}
							primary='Có KTS kinh nghiệm, tay nghề cao tư vấn và lên bản vẽ thiết kế'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							sx={{
								color: COLORS.textColor,
								span: {
									fontSize: FONT_SIZE.text,
								},
							}}
							primary='Có giám sát thi công chuyên nghiệp'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							sx={{
								color: COLORS.textColor,
								span: {
									fontSize: FONT_SIZE.text,
								},
							}}
							primary='Sử dụng ván gỗ HDF (gỗ An Cường) và chất liệu phủ cao cấp'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							sx={{
								color: COLORS.textColor,
								span: {
									fontSize: FONT_SIZE.text,
								},
							}}
							primary='Vật liệu đa dạng cùng phụ kiện cao cấp, sang trọng'
						/>
					</ListItem>
					<ListItem>
						<ListItemText
							sx={{
								color: COLORS.textColor,
								span: {
									fontSize: FONT_SIZE.text,
								},
							}}
							primary='Được bảo hành, bảo trì sau thi công lên đến 2 năm'
						/>
					</ListItem>
				</List>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Các hạng mục thi công nội thất
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Một căn nhà đẹp ngoài bản vẽ thiết kế nội thất đẹp chất lượng còn phải qua nhiều công đoạn khi thi công. Bất
					kỳ công đoạn nào cũng quan trọng như nhau, chỉ cần một công đoạn sơ sài sẽ ảnh hưởng đến kết quả cuối cùng.
					Vậy nên, trước tiên bạn cần hiểu rõ những hạng mục thi công nội thất để có cái nhìn tổng quát hơn trước khi
					bắt tay vào cải tạo, xây mới.
				</Typography>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Thi công phần thô
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Phần lớn những căn hộ chung cư hiện nay đều bàn giao thô, do đó công đoạn thi công phần thô là vô cùng quan
					trọng. Quá trình thi công phần thô có thể khác nhau đối với từng công ty, đơn vị thiết kế. Ở đây, Decox Design
					sẽ đưa ra những bước cơ bản trong khi thi công phần thô cho bạn tham khảo.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-03-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Thi công điện nước
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Như đã giới thiệu ở nội dung trên, thi công điện nước thông thường đã được bao gồm bên trong thi công phần
					thô. Tuy nhiên cũng có một số đơn vị thiết kế thi công tách riêng hạng mục này để dễ dàng quản lý cũng như
					theo dõi tiến độ hoàn thành.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-04-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Việc tạo dựng mạng lưới điện nước phải được tính toán và lên bản vẽ kỹ lưỡng do kỹ sư có chuyên môn cao phụ
					trách nhằm đảm bảo về mặt kỹ thuật, tạo sự thuận tiện trong sinh hoạt cũng như phù hợp với kết cấu của căn
					nhà.
				</Typography>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Thi công trần thạch cao
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Trần thạch cao với sự đa dạng về mẫu mã, đem lại tính thẩm mỹ cao, giá thành hợp lý cũng như phù hợp với nhiều
					phong cách thiết kế luôn là sự lựa chọn được các gia chủ hướng đến khi thi công trần nhà ở.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-05-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Tại hạng mục này, gia chủ cần xác định kiểu trần phù hợp với phong cách mà căn nhà đang hướng đến để các KTS
					có thể lên bản vẽ với số liệu kích thước hợp lý nhất.
				</Typography>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Thi công đồ gỗ
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Chất liệu gỗ ngày càng được sử dụng phổ biến hơn bên trong không gian nhà ở từ loại hình chung cư, biệt thự,
					nhà phố… cho đến phong cách hiện đại, cổ điển, tối giản… Chất “mộc” của gỗ không chỉ đem đến cảm giác thư
					thái, ấm áp cho người sử dụng mà còn ảnh hưởng đến vẻ đẹp tổng thể, ghi điểm ấn tượng cho khách đến thăm nhà.
					Vậy nên thi công đồ gỗ ngày nay cũng dần trở nên phổ biến hơn và trở thành một phần không thể thiếu khi thi
					công nội thất.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-06-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Thi công hoàn thiện nội thất
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Hoàn thiện các khu vực trong nhà dựa trên bản vẽ bố trí nội thất và phong cách riêng của gia chủ, đem đến một
					không gian sống thẩm mỹ và tiện nghi.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/vinhomes-grand-park-63m2-de20056tc-phong-khach-01-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/the-estella-148m2-de20050-phong-khach-08-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/the-monarchy-73m2-de20035-phong-bep-05-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Bảng báo giá nội thất gỗ công nghiệp
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Gỗ công nghiệp được sử dụng rất nhiều trong thi công nội thất chung cư, nhà phố, biệt thự bởi vẻ đẹp đến từ
					màu sắc, những đường vân gỗ đặc trưng và giá thành hợp lý, đa dạng phân khúc phù hợp từng đối tượng khách
					hàng. Báo giá nội thất gỗ công nghiệp sẽ có sự khác nhau dựa theo chất gỗ cũng như lõi gỗ bên trong. Hiện nay,
					gỗ MDF và MFC là hai sự lựa chọn được hướng đến nhiều nhất. Để biết được báo giá chính xác, hãy để lại thông
					tin cho Decox hoặc liên hệ qua số hotline 0901 411 489.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-07-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Chính sách bảo hành
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Vấn đề bảo hành sau thi công luôn là nỗi băn khoăn của quý khách hàng. Đối với các nhà thầu riêng lẻ, họ vẫn
					bảo hành nhưng chỉ trong phạm vi các sản phẩm mà họ cung cấp. Trong trường hợp này nếu xuất hiện các sự cố
					liên quan đến nhiều bên thì sẽ rất khó để quy trách nhiệm cho từng đơn vị. Lấy ví dụ như khi giấy dán tường bị
					mốc hoặc bung tróc do tường thấm nước, nhà thầu giấy dán tường thường không chịu trách nhiệm bảo hành vì lỗi
					liên quan đến nhà thầu xây dựng,…Vì vậy nếu dự án thi công có quá nhiều nhà thầu bạn cần quy định trách nhiệm
					thật rõ ràng cho từng nhà thầu, viết rõ các cam kết về hạng mục bảo hành, thời gian bảo hành cho công trình.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-24-decox-design-1.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					<Box sx={{ mt: 4 }}>
						<Typography
							variant='h5'
							sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
						>
							Những lưu ý quan trọng khi lựa chọn đơn vị thi công nội thất
						</Typography>

						<Box
							as='img'
							src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-25-decox-design.jpg'
							alt=''
							sx={{
								width: '100%',
								borderRadius: BORDER_RADIUS.image,
								mt: 2,
							}}
						/>
					</Box>
				</Typography>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Chọn nhà thầu thi công uy tín, chất lượng
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Hiện nay, để tìm một nhà thầu thi công trên thị trường không khó với giá cả, chất lượng muôn hình vạn trạng;
					từ bình dân đến trung và cao cấp. Đặc điểm chung là các nhà thầu thường chỉ chuyên thực hiện một số hạng mục
					nhất định trong nhà. Vì vậy, nếu có ý định thi công nội thất cho căn hộ của mình đầu tiên bạn hãy tìm kiếm một
					nhà thầu hoặc công ty có khả năng đảm nhận được nhiều nhất các công việc thi công.
				</Typography>
				<Box
					as='img'
					src='https://decoxdesign.com/upload/images/bao-gia-thi-cong-noi-that-chung-cu-22-decox-design.jpg'
					alt=''
					sx={{
						width: '100%',
						borderRadius: BORDER_RADIUS.image,
						mt: 2,
					}}
				/>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Typography
					variant='h5'
					sx={{ fontSize: FONT_SIZE.sectionTitle, fontWeight: '600' }}
				>
					Không bỏ qua bất cứ một khâu nhỏ nào
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Quá trình thi công nội thất cần diễn ra theo trình tự, bạn không nên bỏ qua hoặc lược bớt dù là khâu nhỏ nhất
					để tránh những rủi ro, sai sót và có hướng khắc phục, xử lý kịp thời.
				</Typography>
				<Typography
					variant='body1'
					sx={{ fontSize: FONT_SIZE.text, fontWeight: '400', color: COLORS.textColor, mt: 1, lineHeight: '1.75rem' }}
				>
					Decox Design vừa gửi đến bạn báo giá thi công nội thất trọn gói, mới nhất năm 2024. Nếu bạn đang tìm kiếm một
					ý tưởng cho tổ ấm của mình cũng như 1 đơn vị thiết kế, thi công nội thất chuyên nghiệp thì hãy liên hệ ngay
					với chúng tôi qua số hotline 0901 411 489 hoặc để lại thông tin ở form dưới đây để chúng tôi có thể hỗ trợ bạn
					một cách nhanh chóng và chính xác nhất.
				</Typography>
			</Box>

			<Card sx={{ maxWidth: '460px', mx: 'auto', mt: 6, mb: 10, p: '2rem', textAlign: 'center' }}>
				<Typography
					variant='h5'
					sx={{ fontWeight: '600', fontSize: FONT_SIZE.sectionTitle, color: COLORS.selectedColor }}
				>
					ĐĂNG KÝ TƯ VẤN, BÁO GIÁ
				</Typography>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<FormControl>
						<TextField
							sx={{
								label: {
									color: COLORS.textColor,

									'&.Mui-focused': {
										color: COLORS.selectedColor,
									},
								},
								'.Mui-focused': {
									borderColor: COLORS.borderColor,
								},
								'.Mui-focused:after': {
									borderColor: COLORS.selectedColor,
								},
								input: {
									color: COLORS.textColor,
								},
							}}
							id='name'
							label='Họ tên'
							variant='standard'
						/>
						<TextField
							sx={{
								mt: 2,
								label: {
									color: COLORS.textColor,

									'&.Mui-focused': {
										color: COLORS.selectedColor,
									},
								},
								'.Mui-focused': {
									borderColor: COLORS.borderColor,
								},
								'.Mui-focused:after': {
									borderColor: COLORS.selectedColor,
								},
								input: {
									color: COLORS.textColor,
								},
							}}
							id='phone-number'
							label='Điện thoại'
							variant='standard'
						/>
						<TextField
							sx={{
								mt: 2,
								label: {
									color: COLORS.textColor,

									'&.Mui-focused': {
										color: COLORS.selectedColor,
									},
								},
								'.Mui-focused': {
									borderColor: COLORS.borderColor,
								},
								'.Mui-focused:after': {
									borderColor: COLORS.selectedColor,
								},
								input: {
									color: COLORS.textColor,
								},
							}}
							id='requirement'
							label='Nhu cầu'
							variant='standard'
						/>
					</FormControl>
				</CardContent>
				<CardActions sx={{ justifyContent: 'center' }}>
					<LoadMoreButton content='Gửi ngay' />
				</CardActions>
			</Card>
		</Container>
	);
};

export default Quote;
