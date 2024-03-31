import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const LoadMoreButton = ({ content, onClick }) => {
	return (
		<Button
			sx={{
				color: COLORS.backgroundColor,
				backgroundColor: COLORS.selectedColor,
				padding: '0.75rem 2.5rem',
				borderRadius: '0',
				textTransform: 'uppercase',
				'&:hover': {
					backgroundColor: COLORS.titleColor,
					transition: '0.3s ease-in',
				},
			}}
			variant='contained'
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		>
			{content}
		</Button>
	);
};

LoadMoreButton.propTypes = {
	content: PropTypes.string,
	onClick: PropTypes.func,
};

export default LoadMoreButton;
