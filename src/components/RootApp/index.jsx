import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { RootAppContainer } from './RootAppStyles';

const RootApp = () => {
	return (
		<RootAppContainer>
			<Header />

			<Outlet />
			<Footer />
		</RootAppContainer>
	);
};

export default RootApp;
