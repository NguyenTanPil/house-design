import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { COLORS } from '../../constants';

const ShortChannel = () => {
	return (
		<Container sx={{ mt: 8, mb: 8 }}>
			<Typography
				variant='h6'
				sx={{
					mb: 2,
					textTransform: 'uppercase',
					fontWeight: '500',
				}}
			>
				Our Channel
			</Typography>
			<ImageList
				sx={{
					gridTemplateColumns: {
						xs: '1fr !important',
						md: '13fr 4fr !important',
					},
				}}
				gap={8}
			>
				<ImageListItem>
					<Box>
						<iframe
							width='100%'
							height='553'
							src='https://www.youtube.com/embed/9ls6Si8jStI?autoplay=1'
							title='Elegant Villa |  Công trình thực tế tại Thạnh Mỹ Lợi, Quận 2'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</Box>
				</ImageListItem>
				<ImageListItem
					sx={{
						paddingLeft: {
							xs: 0,
							md: 3.85,
						},
					}}
				>
					<ImageList
						sx={{
							gridTemplateColumns: {
								xs: 'repeat(4, 1fr) !important',
								md: '1fr !important',
							},
						}}
						gap={6}
					>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<img
								src='https://img.youtube.com/vi/jp1zbTt0ir8/mqdefault.jpg'
								alt=''
							/>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 2,
									opacity: 0,
									width: '100%',
									'&:hover': {
										opacity: 1,
										transition: '0.3s ease-in-out',
										background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 88%,transparent)',
									},
								}}
							>
								<PlayCircleOutlineOutlinedIcon
									fontSize='large'
									sx={{
										fontSize: '4rem',
										color: COLORS.selectedColor,
									}}
								/>
							</Box>
						</ImageListItem>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<img
								src='https://img.youtube.com/vi/MOesqaH6-eY/mqdefault.jpg'
								alt=''
							/>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 2,
									opacity: 0,
									width: '100%',
									'&:hover': {
										opacity: 1,
										transition: '0.3s ease-in-out',
										background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 88%,transparent)',
									},
								}}
							>
								<PlayCircleOutlineOutlinedIcon
									fontSize='large'
									sx={{
										fontSize: '4rem',
										color: COLORS.selectedColor,
									}}
								/>
							</Box>
						</ImageListItem>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<img
								src='https://img.youtube.com/vi/mb_B7h_M5ig/mqdefault.jpg'
								alt=''
							/>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 2,
									opacity: 0,
									width: '100%',
									'&:hover': {
										opacity: 1,
										transition: '0.3s ease-in-out',
										background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 88%,transparent)',
									},
								}}
							>
								<PlayCircleOutlineOutlinedIcon
									fontSize='large'
									sx={{
										fontSize: '4rem',
										color: COLORS.selectedColor,
									}}
								/>
							</Box>
						</ImageListItem>
						<ImageListItem
							sx={{
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<img
								src='https://img.youtube.com/vi/AIq-p5YL2_w/mqdefault.jpg'
								alt=''
							/>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 2,
									opacity: 0,
									width: '100%',
									'&:hover': {
										opacity: 1,
										transition: '0.3s ease-in-out',
										background: 'linear-gradient(0deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.3) 88%,transparent)',
									},
								}}
							>
								<PlayCircleOutlineOutlinedIcon
									fontSize='large'
									sx={{
										fontSize: '4rem',
										color: COLORS.selectedColor,
									}}
								/>
							</Box>
						</ImageListItem>
					</ImageList>
				</ImageListItem>
			</ImageList>
		</Container>
	);
};

export default ShortChannel;
