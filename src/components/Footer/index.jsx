import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
	Box,
	Container,
	IconButton,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { COLORS, FONT_SIZE } from '../../constants';
import logo from '../../assets/images/logo_3.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Box sx={{ mt: 8, backgroundColor: COLORS.backgroundColorFooter }}>
			<Container>
				<Box sx={{ paddingY: '4rem' }}>
					<ImageList
						cols={4}
						gap={50}
						sx={{
							gridTemplateColumns: {
								xs: '1fr !important',
								sm: 'repeat(2, 1fr) !important',
								md: 'repeat(4, 1fr) !important',
							},
						}}
					>
						<ImageListItem>
							<Box>
								<Box
									sx={{
										a: {
											marginLeft: '-0.25rem',
											display: 'block',
											height: '54px',
											width: 'fit-content',
										},
									}}
								>
									<Link to='/'>
										<img
											width={132}
											height={54}
											src={logo}
											alt='logo'
										/>
									</Link>
								</Box>
								<Typography
									variant='body1'
									sx={{ color: COLORS.colorFooter, fontSize: FONT_SIZE.text }}
								>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
									massa..
								</Typography>
							</Box>
						</ImageListItem>
						<ImageListItem>
							<Typography
								variant='h6'
								sx={{ fontWeight: '600', mb: '1rem', fontSize: FONT_SIZE.footerTitle, color: COLORS.backgroundColor }}
							>
								ADDRESS
							</Typography>
							<List sx={{ color: COLORS.colorFooter }}>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Hà Nội: Số 10, P. Miếu Đầm, Mễ Trì, Từ Liêm, Hà Nội'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Nha Trang: Tầng 9, Số 1 đường Trần Hưng Đạo, Tp Nha Trang.'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Đà Nẵng: 18 An Nhơn 3, An Hải Bắc, Sơn Trà, Đà Nẵng.'
									/>
								</ListItem>
							</List>
						</ImageListItem>

						<ImageListItem>
							<Typography
								variant='h6'
								sx={{ fontWeight: '600', mb: '1rem', fontSize: '1rem', color: COLORS.backgroundColor }}
							>
								SUPPORTS
							</Typography>
							<List sx={{ color: COLORS.colorFooter }}>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Chính sách vận chuyển, giao nhận'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Chính sách hỗ trợ, bảo hành'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Chính sách đổi/trả và hoàn tiền'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Chính sách bảo mật thông tin'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Quy định về hình thức thanh toán'
									/>
								</ListItem>
							</List>
						</ImageListItem>
						<ImageListItem>
							<Typography
								variant='h6'
								sx={{ fontWeight: '600', mb: '1rem', fontSize: '1rem', color: COLORS.backgroundColor }}
							>
								INFORMATION
							</Typography>
							<List sx={{ color: COLORS.colorFooter }}>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Công ty cổ phần Decox'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Hotline: 0901 411 489'
									/>
								</ListItem>
								<ListItem sx={{ padding: 0, mb: '0.25rem' }}>
									<ListItemText
										sx={{
											span: {
												fontSize: FONT_SIZE.text,
											},
										}}
										primary='Email: support@decox.vn'
									/>
								</ListItem>
							</List>

							<Typography
								variant='h6'
								sx={{ fontWeight: '600', mb: '1rem', fontSize: '1rem', color: COLORS.backgroundColor }}
							>
								SOCIALS
							</Typography>
							<Box>
								<IconButton
									sx={{
										backgroundColor: COLORS.backgroundColorFooterIcon,
										color: COLORS.backgroundColor,
										padding: 1.5,
										mr: 2,
										'&:hover': {
											transition: '0.3s ease-out',
											backgroundColor: COLORS.selectedColor,
										},
									}}
								>
									<FacebookIcon fontSize='small' />
								</IconButton>
								<IconButton
									sx={{
										backgroundColor: COLORS.backgroundColorFooterIcon,
										color: COLORS.backgroundColor,
										padding: 1.5,
										mr: 2,
										'&:hover': {
											transition: '0.3s ease-out',
											backgroundColor: COLORS.selectedColor,
										},
									}}
								>
									<YouTubeIcon fontSize='small' />
								</IconButton>
								<IconButton
									sx={{
										backgroundColor: COLORS.backgroundColorFooterIcon,
										color: COLORS.backgroundColor,
										padding: 1.5,
										mr: 2,
										'&:hover': {
											transition: '0.3s ease-out',
											backgroundColor: COLORS.selectedColor,
										},
									}}
								>
									<InstagramIcon fontSize='small' />
								</IconButton>
							</Box>
						</ImageListItem>
					</ImageList>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
