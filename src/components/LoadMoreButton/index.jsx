import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { BORDER_RADIUS, COLORS } from '../../constants';

const LoadMoreButton = ({ isTransparentFirst, isSmall, content, onClick }) => {
	return (
		<Button
			sx={{
				outline: 'none !important',
				boxShadow: 'none',
				color: isTransparentFirst ? COLORS.selectedColor : COLORS.backgroundColor,
				backgroundColor: isTransparentFirst ? 'transparent' : COLORS.selectedColor,
				padding: isSmall ? '0.5rem 1.5rem' : '0.75rem 2.5rem',
				borderRadius: isSmall ? BORDER_RADIUS.smallButton : BORDER_RADIUS.largeButton,
				textTransform: 'uppercase',
				border: `1px solid ${COLORS.selectedColor} !important`,
				'&:hover': {
					color: isTransparentFirst ? COLORS.backgroundColor : COLORS.backgroundColor,
					backgroundColor: isTransparentFirst ? COLORS.selectedColor : COLORS.titleColor,
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
	isTransparentFirst: PropTypes.bool,
	content: PropTypes.string,
	isSmall: PropTypes.bool,
	onClick: PropTypes.func,
};

LoadMoreButton.defaultProps = {
	isTransparentFirst: false,
	isSmall: false,
};

export default LoadMoreButton;
