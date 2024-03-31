import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';
import { COLORS } from '../../constants';

const getTextTranslateBreadcrumb = ({ category, popularId, detailId }) => {
	switch (category) {
		case 'mau-nha-dep':
			return 'Mẫu Nhà Đẹp';
		case 'phong-khach':
			return 'Phòng Khách';
		case 'phong-bep':
			return 'Phòng Bếp';
		case 'phong-ngu':
			return 'Phòng Ngủ';
		case 'ban-cong':
			return 'Ban Công';
		default:
			if (popularId) {
				return popularId.replace('-', ' ');
			}

			if (detailId) {
				return detailId;
			}

			return '';
	}
};

export default function Breadcrumb() {
	const params = useParams();

	const breadcrumbText = getTextTranslateBreadcrumb(params);

	return (
		<Box
			sx={{
				background:
					'url(https://landmark.imgix.net/Hero-Images/FORTE-3D-Render-Low-res.jpg?w=1200&dpr=1.75&q=60&fm=webp) no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'top left',
				backgroundRepeat: 'no-repeat',
				paddingY: '4rem',
				position: 'relative',
				backgroundColor: '#0e0d12',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.36)',
					zIndex: 1,
				}}
			/>
			<Typography
				variant='h6'
				sx={{
					fontSize: '2rem',
					fontWeight: '600',
					color: COLORS.backgroundColor,
					textTransform: 'uppercase',
					zIndex: 2,
				}}
			>
				{breadcrumbText}
			</Typography>
			<Breadcrumbs
				aria-label='breadcrumb'
				sx={{ color: COLORS.backgroundColor, zIndex: 2 }}
			>
				<Link
					underline='hover'
					sx={{
						display: 'flex',
						alignItems: 'center',
						fontSize: '1rem',
						color: COLORS.backgroundColor,
						'&:hover': {
							transition: '0.3s ease-in-out',
							color: COLORS.selectedColor,
						},
					}}
					href='/'
				>
					Home
				</Link>
				<Typography
					sx={{
						fontSize: '1rem',
						textTransform: 'capitalize',
						// '&:hover': {
						// 	transition: '0.3s ease-in-out',
						// 	color: COLORS.selectedColor,
						// },
					}}
				>
					{breadcrumbText}
				</Typography>
				{/* <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {category}
        </Link> */}
			</Breadcrumbs>
		</Box>
	);
}
