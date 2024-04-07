import { Container } from '@mui/material';
import MainPageCategory from './MainPageCategory';

export default function Category() {
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<MainPageCategory />
		</Container>
	);
}
