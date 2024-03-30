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
import { newArchitecture } from '../../dummy';

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
						title='KIẾN TRÚC MỚI'
						subTitle='New Architecture'
					/>
					<PopularCategories
						items={newArchitecture}
						title='THI CÔNG MỚI'
						subTitle='New Contruction'
					/>
					<PopularCategories
						items={newArchitecture}
						title='NỘI THẤT MỚI'
						subTitle='New Interior Design'
					/>
					<PopularCategories
						items={newArchitecture}
						perPage={5}
						title='SHORT VIDEO'
						subTitle='Decox on tiktok'
					/>
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
