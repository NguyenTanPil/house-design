import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { Box, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { BORDER_RADIUS, COLORS } from '../../constants';

const ShortChannel = () => {
	return (
		<Container sx={{ mt: 8, mb: 8 }}>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
					md={2}
					alignContent='center'
					sx={{
						mb: -2,
					}}
				>
					<Typography
						variant='h2'
						sx={{
							cursor: 'pointer',
							mt: '0.5rem',
							textAlign: { xs: 'center', md: 'start' },
							fontSize: '1.25rem',
							fontWeight: '700',
							color: COLORS.titleColor,

							'&:hover': {
								transition: '0.3s ease',
								color: COLORS.selectedColor,
							},
						}}
						onClick={() => {}}
					>
						DECOX CHANNEL
					</Typography>
					<Typography
						variant='h6'
						sx={{
							textAlign: { xs: 'center', md: 'start' },
							fontSize: '0.875rem',
							fontWeight: '400',
							color: COLORS.textColor,
						}}
					>
						See more at Youtube
					</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					md={10}
				>
					<ImageList cols={1}>
						<ImageListItem>
							<Box
								sx={{
									iframe: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
							>
								<iframe
									width='100%'
									height='553'
									src='https://www.youtube.com/embed/9ls6Si8jStI?autoplay=1'
									title='Elegant Villa |  Công trình thực tế tại Thạnh Mỹ Lợi, Quận 2'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen={true}
								></iframe>
							</Box>
						</ImageListItem>
						<ImageListItem>
							<ImageList
								sx={{
									img: {
										borderRadius: BORDER_RADIUS.image,
									},
								}}
								cols={4}
								gap={10}
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
												fontSize: {
													xs: '2.5rem',
													md: '4rem',
												},
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
												fontSize: {
													xs: '2.5rem',
													md: '4rem',
												},
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
												fontSize: {
													xs: '2.5rem',
													md: '4rem',
												},
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
												fontSize: {
													xs: '2.5rem',
													md: '4rem',
												},
												color: COLORS.selectedColor,
											}}
										/>
									</Box>
								</ImageListItem>
							</ImageList>
						</ImageListItem>
					</ImageList>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ShortChannel;
