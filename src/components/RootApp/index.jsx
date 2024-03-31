import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import IntroduceBanner from '../IntroduceBanner';
import { RootAppContainer } from './RootAppStyles';
import ScrollToTop from '../ScrollToTop';
import { ThemeProvider, createMuiTheme } from '@mui/material';

const theme = createMuiTheme({
	typography: {
		fontFamily: "'UTM Nokia Standard', 'Roboto', 'Arial', sans-serif",
	},
});

const RootApp = () => {
	return (
		<ThemeProvider theme={theme}>
			<RootAppContainer>
				<Header />
				<Outlet />
				<IntroduceBanner />
				<Footer />
				<ScrollToTop />
			</RootAppContainer>
		</ThemeProvider>
	);
};

export default RootApp;
