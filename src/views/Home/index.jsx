import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Categories from '../../components/Categories';
import Collection from '../../components/Collection';
import ShortChannel from '../../components/ShortChannel';
import Signature from '../../components/Signature';
import Slider from '../../components/Slider';
import Breadcrumb from '../../components/Breadcrumbs';
// import IntroduceBanner from '../../components/IntroduceBanner';
import Box from '@mui/material/Box';
import PopularCategories from '../../components/PopularCategories';
import { interiorDesign, newArchitecture, tiktokStories } from '../../dummy';
import DesignByAi from '../../components/DesignByAi';
import DesignInspiration from '../../components/DesignInspiration';
import Banner from '../../components/Banner';
import Category from '../Category';
import { Container } from '@mui/material';

const Home = () => {
	const { category } = useParams();

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<>
			{!category ? (
				<Box>
					<Slider />
					<Categories />
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
			) : (
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Breadcrumb />
					<Category />
				</Container>
			)}
		</>
	);
};

export default Home;
