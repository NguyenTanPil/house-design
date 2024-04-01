import Collection from '../../components/Collection';
import ShortChannel from '../../components/ShortChannel';
import Signature from '../../components/Signature';
import Slider from '../../components/Slider';
// import IntroduceBanner from '../../components/IntroduceBanner';
import Box from '@mui/material/Box';
import Banner from '../../components/Banner';
import DesignByAi from '../../components/DesignByAi';
import DesignInspiration from '../../components/DesignInspiration';
import PopularCategories from '../../components/PopularCategories';
import { interiorDesign, newArchitecture, tiktokStories } from '../../dummy';
import IntroduceBanner from '../../components/IntroduceBanner';

const Home = () => {
	return (
		<Box>
			<Slider />
			<IntroduceBanner
				isUsingOriginalButton={true}
				imageUrl='https://decoxdesign.com/upload/banner/tuyen-dung.png'
				firstTitle='1 giờ trò chuyện cùng chuyên gia'
				firstDescription='Bạn sắp về nhà mới và cần được tư vấn? Chia sẻ những tâm tư và ý tưởng tuyệt vời cho ngôi nhà tương lai, Decox luôn lắng nghe bạn.'
				secondTitle='Bạn cần thi công theo bản vẽ?'
				secondDescription='Bạn sắp về nhà mới và đã có bản vẽ thiết kế nội thất, bạn đang cần tìm một nhà thầu uy tín để thi công?'
				firstBtnText='Đăng ký tư vấn'
				secondBtnText='Nhận báo giá'
				firstBtnAction={() => {}}
				secondBtnAction={() => {}}
			/>
			<Signature />
			<Collection />
			<ShortChannel />
			<PopularCategories
				titleUrl='/popular/new-architecture'
				items={newArchitecture}
				imageHeight={180}
				title='KIẾN TRÚC MỚI'
				subTitle='New Architecture'
			/>
			<PopularCategories
				titleUrl='/popular/contruction'
				items={interiorDesign}
				imageHeight={180}
				title='THI CÔNG MỚI'
				subTitle='New Contruction'
			/>
			<PopularCategories
				titleUrl='/popular/interior-design'
				items={newArchitecture}
				imageHeight={180}
				title='NỘI THẤT MỚI'
				subTitle='New Interior Design'
			/>
			<PopularCategories
				titleUrl='/popular/tiktok'
				items={tiktokStories}
				perPage={5}
				imageHeight={240}
				title='SHORT VIDEO'
				subTitle='Decox on tiktok'
			/>
			<DesignByAi />
			<DesignInspiration />
			<Banner />
		</Box>
	);
};

export default Home;
