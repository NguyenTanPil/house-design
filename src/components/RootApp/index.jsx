import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import IntroduceBanner from '../IntroduceBanner';
import { RootAppContainer } from './RootAppStyles';
import ScrollToTop from '../ScrollToTop';

const RootApp = () => {
	return (
		<RootAppContainer>
			<Header />
			<Outlet />
			<IntroduceBanner />
			<Footer />
			<ScrollToTop />
		</RootAppContainer>
	);
};

export default RootApp;
