import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import CottageIcon from '@mui/icons-material/Cottage';
import CountertopsIcon from '@mui/icons-material/Countertops';
import DevicesIcon from '@mui/icons-material/Devices';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { COLORS } from '../../constants';

const categories = [
	{
		text: 'House Design',
		Icon: CottageIcon,
		isActive: true,
	},
	{
		text: 'Living Room',
		Icon: ChairIcon,
	},
	{
		text: 'Bedroom',
		Icon: BedIcon,
	},
	{
		text: 'Kitchen Room',
		Icon: CountertopsIcon,
	},
	{
		text: 'Bathroom',
		Icon: BathtubIcon,
	},
	{
		text: 'Working Room',
		Icon: DevicesIcon,
	},
];

const CategoriesFilter = () => {
	return (
		<Container
			sx={{
				mt: 4,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Typography
					variant='h6'
					sx={{
						textTransform: 'uppercase',
						fontWeight: '500',
						textAlign: 'center',
						mb: 1,
						color: COLORS.selectedColor,
					}}
				>
					Categories
				</Typography>
				<Divider
					variant='middle'
					sx={{
						borderWidth: '0.125rem',
						width: '5rem',
					}}
				/>
			</Box>
			<Grid
				container
				sx={{
					justifyContent: 'center',
				}}
			>
				{categories.map(({ text, isActive, Icon }, idx) => (
					<Grid
						item
						key={idx}
						xs={12}
						sm={1.85}
						sx={{
							paddingTop: {
								xs: '1rem',
								md: '2rem',
							},
							justifyContent: 'space-around',
							paddingX: {
								xs: '0.25rem',
								md: '0.5rem',
							},
						}}
					>
						<Box
							sx={{
								cursor: 'pointer',
								backgroundColor: COLORS.backgroundColor,
								border: `2px solid ${COLORS.borderColor}`,
								borderColor: isActive ? COLORS.selectedColor : COLORS.borderColor,
								color: isActive ? COLORS.selectedColor : COLORS.textColor,
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								'&:hover': {
									borderColor: COLORS.selectedColor,
									transition: '0.3s ease-in-out',
									color: COLORS.selectedColor,
								},
							}}
							onClick={() => {}}
						>
							<Box
								sx={{
									width: {
										sx: '2rem',
										md: '3rem',
									},
									height: {
										sx: '2rem',
										md: '3rem',
									},
									mb: {
										xs: '0',
										sm: '1rem',
										md: '0',
									},
									mt: '1rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Icon fontSize='large' />
							</Box>
							<Typography
								sx={{
									display: {
										xs: 'block',
										sm: 'none',
										md: 'block',
									},
									pb: {
										xs: '1rem',
										md: '1.2rem',
									},
									fontSize: '0.875rem',
								}}
							>
								{text}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default CategoriesFilter;
