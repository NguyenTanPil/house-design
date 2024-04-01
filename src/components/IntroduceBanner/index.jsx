import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CrimsonButton from './CustomButton';
import { Box, Container } from '@mui/material';
import { COLORS } from '../../constants';
import PropTypes from 'prop-types';
import LoadMoreButton from '../LoadMoreButton';

export default function IntroduceBanner({
	isUsingOriginalButton,
	imageUrl,
	firstTitle,
	firstDescription,
	secondTitle,
	secondDescription,
	firstBtnText,
	firstBtnAction,
	secondBtnText,
	secondBtnAction,
}) {
	return (
		<div>
			<Container
				sx={{
					mt: 5,
					display: 'flex',
				}}
			>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1 }}
				>
					<Grid
						item
						xs={0}
						md={5}
						sx={{
							padding: {
								xs: 0,
								md: '0.25rem',
							},
						}}
					>
						<Card sx={{ borderRadius: '0' }}>
							<CardMedia
								sx={{ height: 245 }}
								image={imageUrl}
								title='green iguana'
							/>
						</Card>
					</Grid>
					<Grid
						item
						xs={6}
						md={3.5}
					>
						<Card
							sx={{
								borderRadius: '0',
								maxHeight: 245,
								boxShadow: 'none',
								border: `1px solid ${COLORS.borderColor}`,
								height: '100%',
							}}
						>
							<CardContent
								sx={{
									justifyContent: 'space-between',
									display: 'flex',
									flexDirection: 'column',
									padding: '1rem 1rem 0.5rem !important',
									height: '100%',
									boxSizing: 'border-box',
								}}
							>
								<Stack spacing={2}>
									<Typography
										variant='h5'
										sx={{
											color: COLORS.titleColor,
											fontWeight: '600',
										}}
									>
										{firstTitle}
									</Typography>
									<Typography
										variant='body2'
										sx={{
											mt: '0.25rem !important',
											color: COLORS.textColor,
											textOverflow: 'ellipsis',
											display: '-webkit-box',
											'-webkit-line-clamp': '6',
											'-webkit-box-orient': 'vertical',
											overflow: 'hidden',
										}}
									>
										{firstDescription}
									</Typography>
								</Stack>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									{isUsingOriginalButton ? (
										<LoadMoreButton
											isTransparentFirst={true}
											content={firstBtnText}
											onClick={firstBtnAction}
										/>
									) : (
										<CrimsonButton
											content={firstBtnText}
											onClick={firstBtnAction}
											type='midnightBlue'
										/>
									)}
								</Box>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						xs={6}
						md={3.5}
					>
						<Card
							sx={{
								borderRadius: '0',
								maxHeight: 245,
								boxShadow: 'none',
								border: `1px solid ${COLORS.borderColor}`,
								height: '100%',
							}}
						>
							<CardContent
								sx={{
									justifyContent: 'space-between',
									display: 'flex',
									flexDirection: 'column',
									padding: '1rem 1rem 0.5rem !important',
									height: '100%',
									boxSizing: 'border-box',
								}}
							>
								<Stack spacing={2}>
									<Typography
										variant='h5'
										sx={{
											color: COLORS.titleColor,
											fontWeight: '600',
										}}
									>
										{secondTitle}
									</Typography>
									<Typography
										variant='body2'
										sx={{
											mt: '0.25rem !important',
											color: COLORS.textColor,
											textOverflow: 'ellipsis',
											display: '-webkit-box',
											'-webkit-line-clamp': '6',
											'-webkit-box-orient': 'vertical',
											overflow: 'hidden',
										}}
									>
										{secondDescription}
									</Typography>
								</Stack>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									{isUsingOriginalButton ? (
										<LoadMoreButton
											isTransparentFirst={true}
											content={secondBtnText}
											onClick={secondBtnAction}
										/>
									) : (
										<CrimsonButton
											content={secondBtnText}
											onClick={secondBtnAction}
											type='crimson'
										/>
									)}
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

IntroduceBanner.propTypes = {
	isUsingOriginalButton: PropTypes.bool,
	imageUrl: PropTypes.string,
	firstTitle: PropTypes.string,
	firstDescription: PropTypes.string,
	secondTitle: PropTypes.string,
	secondDescription: PropTypes.string,
	firstBtnText: PropTypes.string,
	secondBtnText: PropTypes.string,
	firstBtnAction: PropTypes.func,
	secondBtnAction: PropTypes.func,
};

IntroduceBanner.defaultProps = {
	isUsingOriginalButton: false,
};
