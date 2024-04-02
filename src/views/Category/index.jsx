import { Container } from '@mui/material';
import Breadcrumb from '../../components/Breadcrumbs/index';
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
			<Breadcrumb />
			<MainPageCategory />
		</Container>
	);
}
