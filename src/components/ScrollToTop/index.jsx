import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import { useCallback } from 'react';
import { COLORS } from '../../constants';

const ScrollToTop = () => {
	const trigger = useScrollTrigger({
		threshold: 100,
	});

	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<Zoom in={trigger}>
			<Box
				role='presentation'
				sx={{
					position: 'fixed',
					bottom: 32,
					right: 32,
					zIndex: 1,
				}}
			>
				<Fab
					size='small'
					aria-label='Scroll back to top'
					sx={{
						outline: 'none',
						backgroundColor: COLORS.selectedColor,
						color: COLORS.backgroundColor,

						'&:hover': {
							backgroundColor: COLORS.titleColor,
						},
					}}
					onClick={scrollToTop}
				>
					<KeyboardArrowUp fontSize='medium' />
				</Fab>
			</Box>
		</Zoom>
	);
};

export default ScrollToTop;
