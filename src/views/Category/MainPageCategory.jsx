import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import MasonryImageList from '../../components/GalleryImage';
import { COLORS } from '../../constants';
import { galleryDataSource } from '../../mockData';

export default function MainPageCategory() {
	const { category } = useParams();
	const getCategory = () => {
		switch (category) {
			case 'mau-nha-dep':
				return 'BeautyHouse';
			case 'phong-khach':
				return 'LivingRoom';
			case 'phong-bep':
				return 'KitchenRoom';
			case 'phong-ngu':
				return 'BathRoom';
			case 'ban-cong':
				return 'BanCong';
			default:
				return null;
		}
	};
	return (
		<Box sx={{ mt: 6 }}>
			<MasonryImageList data={galleryDataSource?.[`${getCategory()}`]} />
			<Box
				sx={{
					borderBottom: `1px dashed ${COLORS.borderColor}`,
					height: '2px',
					width: '100%',
					margin: '44px 0px 20px 0',
				}}
			/>
		</Box>
	);
}
