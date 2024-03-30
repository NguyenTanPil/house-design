import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Categories from '../../components/Categories';
import Collection from '../../components/Collection';
import ShortChannel from '../../components/ShortChannel';
import Signature from '../../components/Signature';
import Slider from '../../components/Slider';
import MasonryImageList from '../../components/GalleryImage';
import Breadcrumb from '../../components/Breadcrumbs';
import IntroduceBanner from '../../components/IntroduceBanner';
import Box from '@mui/material/Box';
import PopularCategories from '../../components/PopularCategories';
import { interiorDesign, newArchitecture, tiktokStories } from '../../dummy';
import DesignByAi from '../../components/DesignByAi';
import DesignInspiration from '../../components/DesignInspiration';
import Banner from '../../components/Banner';

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
						items={newArchitecture}
						imageHeight={180}
						title='KIẾN TRÚC MỚI'
						subTitle='New Architecture'
					/>
					<PopularCategories
						items={interiorDesign}
						imageHeight={180}
						title='THI CÔNG MỚI'
						subTitle='New Contruction'
					/>
					<PopularCategories
						items={newArchitecture}
						imageHeight={180}
						title='NỘI THẤT MỚI'
						subTitle='New Interior Design'
					/>
					<PopularCategories
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
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Breadcrumb />
					<MasonryImageList />
					<Box
						sx={{
							borderBottom: '1px dashed #ccc',
							height: '2px',
							width: '65%',
							margin: '40px 0px',
						}}
					></Box>
					<IntroduceBanner />
				</Box>
			)}
		</>
	);
};

export default Home;
