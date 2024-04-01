import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();

	return (
		<ThemeProvider theme={theme}>
			<RootAppContainer>
				<ScrollRestoration />
				<Header />
				<Outlet />
				<IntroduceBanner
					imageUrl='https://decoxdesign.com/upload/banner/landscape.jpg'
					firstTitle='Về Decox'
					firstDescription='10 năm kinh nghiệm trong lĩnh vực thiết kế kiến trúc nội thất tại Việt Nam, Decox mang đến những giá
									trị sống mới, chuẩn mực mới, hãy để chúng tôi mang đến giá trị tinh thần và sự bền vững cho cuộc sống
									của bạn. Tìm hiểu về Decox tại đây'
					secondTitle='Quy trình làm việc'
					secondDescription='Một sản phẩm đẹp cần nhiều thời gian để thực hiện, và còn cần thêm hàng chục những bàn tay nhân sự tham gia vào quá trình xây dựng và phát triển, hãy cùng tìm hiểu nhé'
					firstBtnText='Xem thêm'
					secondBtnText='Xem thêm'
					firstBtnAction={() => {
						navigate('./introduce');
					}}
					secondBtnAction={() => {}}
				/>
				<Footer />
				<ScrollToTop />
			</RootAppContainer>
		</ThemeProvider>
	);
};

export default RootApp;
