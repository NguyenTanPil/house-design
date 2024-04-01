import { Box, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const TitleSection = ({ title, subTitle }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
			<Divider
				sx={{
					borderBottomWidth: '0.175rem',
					width: '16rem',
				}}
			/>
			<Box
				sx={{
					paddingX: 4,
				}}
			>
				<Typography
					variant='h6'
					sx={{
						color: COLORS.selectedColor,
						textTransform: 'uppercase',
						fontWeight: '600',
					}}
				>
					{title}
				</Typography>
				{subTitle && (
					<Typography
						variant='h6'
						sx={{
							fontSize: '0.875rem',
							fontWeight: '400',
							textTransform: 'capitalize',
							color: COLORS.textColor,
							textAlign: 'center',
						}}
					>
						{subTitle}
					</Typography>
				)}
			</Box>
			<Divider
				sx={{
					borderBottomWidth: '0.175rem',
					width: '16rem',
				}}
			/>
		</Box>
	);
};

TitleSection.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

TitleSection.defaultProps = {
	items: [],
	perPage: 3,
};

export default TitleSection;
