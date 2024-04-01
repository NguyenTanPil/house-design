import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const LoadMoreButton = ({ isTransparentFirst, content, onClick }) => {
	return (
		<Button
			sx={{
				outline: 'none',
				boxShadow: 'none',
				color: isTransparentFirst ? COLORS.selectedColor : COLORS.backgroundColor,
				backgroundColor: isTransparentFirst ? 'transparent' : COLORS.selectedColor,
				padding: '0.75rem 2.5rem',
				borderRadius: '0',
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
	onClick: PropTypes.func,
};

LoadMoreButton.defaultProps = {
	isTransparentFirst: false,
};

export default LoadMoreButton;
