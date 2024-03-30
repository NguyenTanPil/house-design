import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import IntroduceBanner from '../IntroduceBanner';
import { RootAppContainer } from './RootAppStyles';

const RootApp = () => {
	return (
		<RootAppContainer>
			<Header />
			<Outlet />
			<IntroduceBanner />
			<Footer />
		</RootAppContainer>
	);
};

export default RootApp;
