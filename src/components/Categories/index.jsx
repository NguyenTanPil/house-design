import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import CottageIcon from '@mui/icons-material/Cottage';
import CountertopsIcon from '@mui/icons-material/Countertops';
import LivingIcon from '@mui/icons-material/Living';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../constants';
import LoadMoreButton from '../LoadMoreButton';

const Categories = () => {
	const navigate = useNavigate();

	return (
		<Container
			sx={{
				mt: 8,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					mt: '6rem',
					mb: '4rem',
				}}
			>
				<Typography
					variant='h6'
					sx={{
						textTransform: 'uppercase',
						fontWeight: '500',
						width: '50%',
						textAlign: 'center',
					}}
				>
					Our Services
				</Typography>
				<Typography
					variant='h2'
					sx={{
						mt: '0.5rem',
						textAlign: 'center',
						width: '50%',
						fontSize: '2.5rem',
						fontWeight: '900',
						color: COLORS.titleColor,
					}}
				>
					Why We Should Be Your Top Choice
				</Typography>
			</Box>
			<Grid
				container
				sx={{
					justifyContent: 'center',
				}}
			>
				<Grid
					item
					xs={12}
					sm={2.4}
					sx={{
						paddingTop: {
							xs: '1rem',
							md: '2rem',
						},
						paddingX: {
							xs: '0.5rem',
							md: '1rem',
						},
					}}
				>
					<Box
						sx={{
							cursor: 'pointer',
							backgroundColor: COLORS.backgroundColor,
							border: `2px solid ${COLORS.borderColor}`,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							'&:hover': {
								borderColor: COLORS.selectedColor,
								transition: '0.3s',
							},
						}}
						onClick={() => {
							navigate('/mau-nha-dep');
						}}
					>
						<Box
							sx={{
								width: {
									sx: '3rem',
									md: '4rem',
								},
								height: {
									sx: '3rem',
									md: '4rem',
								},
								mt: '1rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CottageIcon
								fontSize='large'
								sx={{
									color: COLORS.selectedColor,
								}}
							/>
						</Box>
						<Typography
							sx={{
								pb: '2rem',
								color: COLORS.textColor,
								'&:hover': {
									color: COLORS.selectedColor,
									transition: '0.3s',
								},
							}}
						>
							House Design
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2.4}
					sx={{
						paddingTop: {
							xs: '1rem',
							md: '2rem',
						},
						paddingX: {
							xs: '0.5rem',
							md: '1rem',
						},
					}}
				>
					<Box
						sx={{
							backgroundColor: COLORS.backgroundColor,
							border: `2px solid ${COLORS.borderColor}`,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							'&:hover': {
								borderColor: COLORS.selectedColor,
								transition: '0.3s',
							},
						}}
						onClick={() => {
							navigate('/phong-khach');
						}}
					>
						<Box
							sx={{
								cursor: 'pointer',
								width: {
									sx: '3rem',
									md: '4rem',
								},
								height: {
									sx: '3rem',
									md: '4rem',
								},
								mt: '1rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<LivingIcon
								fontSize='large'
								sx={{
									color: COLORS.selectedColor,
								}}
							/>
						</Box>
						<Typography
							sx={{
								cursor: 'pointer',
								pb: '2rem',
								color: COLORS.textColor,
								'&:hover': {
									color: COLORS.selectedColor,
									transition: '0.3s',
								},
							}}
						>
							Living Room
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2.4}
					sx={{
						paddingTop: {
							xs: '1rem',
							md: '2rem',
						},
						paddingX: {
							xs: '0.5rem',
							md: '1rem',
						},
					}}
				>
					<Box
						sx={{
							backgroundColor: COLORS.backgroundColor,
							border: `2px solid ${COLORS.borderColor}`,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							'&:hover': {
								borderColor: COLORS.selectedColor,
								transition: '0.3s',
							},
						}}
						onClick={() => {
							navigate('/phong-bep');
						}}
					>
						<Box
							sx={{
								cursor: 'pointer',
								width: {
									sx: '3rem',
									md: '4rem',
								},
								height: {
									sx: '3rem',
									md: '4rem',
								},
								mt: '1rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CountertopsIcon
								fontSize='large'
								sx={{
									color: COLORS.selectedColor,
								}}
							/>
						</Box>
						<Typography
							sx={{
								cursor: 'pointer',
								pb: '2rem',
								color: COLORS.textColor,
								'&:hover': {
									color: COLORS.selectedColor,
									transition: '0.3s',
								},
							}}
						>
							Kitchen Room
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2.4}
					sx={{
						paddingTop: {
							xs: '1rem',
							md: '2rem',
						},
						paddingX: {
							xs: '0.5rem',
							md: '1rem',
						},
					}}
				>
					<Box
						sx={{
							backgroundColor: COLORS.backgroundColor,
							border: `2px solid ${COLORS.borderColor}`,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							'&:hover': {
								borderColor: COLORS.selectedColor,
								transition: '0.3s',
							},
						}}
						onClick={() => {
							navigate('/phong-ngu');
						}}
					>
						<Box
							sx={{
								cursor: 'pointer',
								width: {
									sx: '3rem',
									md: '4rem',
								},
								height: {
									sx: '3rem',
									md: '4rem',
								},
								mt: '1rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<BedroomChildIcon
								fontSize='large'
								sx={{
									color: COLORS.selectedColor,
								}}
							/>
						</Box>
						<Typography
							sx={{
								cursor: 'pointer',
								pb: '2rem',
								color: COLORS.textColor,
								'&:hover': {
									color: COLORS.selectedColor,
									transition: '0.3s',
								},
							}}
						>
							Bathroom
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2.4}
					sx={{
						paddingTop: {
							xs: '1rem',
							md: '2rem',
						},
						paddingX: {
							xs: '0.5rem',
							md: '1rem',
						},
					}}
				>
					<Box
						sx={{
							backgroundColor: COLORS.backgroundColor,
							border: `2px solid ${COLORS.borderColor}`,
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							'&:hover': {
								borderColor: COLORS.selectedColor,
								transition: '0.3s',
							},
						}}
						onClick={() => {
							navigate('/ban-cong');
						}}
					>
						<Box
							sx={{
								cursor: 'pointer',
								width: {
									sx: '3rem',
									md: '4rem',
								},
								height: {
									sx: '3rem',
									md: '4rem',
								},
								mt: '1rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<BedroomChildIcon
								fontSize='large'
								sx={{
									color: COLORS.selectedColor,
								}}
							/>
						</Box>
						<Typography
							sx={{
								cursor: 'pointer',
								pb: '2rem',
								color: COLORS.textColor,
								'&:hover': {
									color: COLORS.selectedColor,
									transition: '0.3s',
								},
							}}
						>
							Working Room
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Box
				sx={{
					mt: '3.6rem',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<LoadMoreButton content='more services' />
			</Box>
		</Container>
	);
};

export default Categories;
