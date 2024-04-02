import BalconyIcon from '@mui/icons-material/Balcony';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import ChairIcon from '@mui/icons-material/Chair';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CottageIcon from '@mui/icons-material/Cottage';
import CountertopsIcon from '@mui/icons-material/Countertops';
import DevicesIcon from '@mui/icons-material/Devices';
import ForestIcon from '@mui/icons-material/Forest';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { Button, Container, Drawer, MenuItem, useScrollTrigger } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { COLORS } from '../../constants';
import { NestedDropdown } from 'mui-nested-menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 0,
	backgroundColor: 'transparent',
	'&:focus-within': {
		borderColor: COLORS.selectedColor,
	},
	marginLeft: 0,
	width: '100%',
	border: `1px solid ${COLORS.borderColor}`,

	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: COLORS.selectedColor,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: COLORS.textColor,
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const categories = [
	{
		text: 'Mẫu nhà đẹp',
		Icon: CottageIcon,
		isActive: true,
	},
	{
		text: 'Cảnh quan',
		Icon: ForestIcon,
		isActive: false,
	},
	{
		text: 'Phòng khách',
		Icon: ChairIcon,
	},
	{
		text: 'Phòng bếp',
		Icon: CountertopsIcon,
	},
	{
		text: 'Phòng ngủ',
		Icon: BedIcon,
	},
	{
		text: 'Trẻ em',
		Icon: ChildCareIcon,
	},
	{
		text: 'Ban Công',
		Icon: BalconyIcon,
	},
	{
		text: 'Rest Room',
		Icon: BathtubIcon,
	},
	{
		text: 'Làm việc',
		Icon: DevicesIcon,
	},
	{
		text: 'Giải trí',
		Icon: TvIcon,
	},
];

const menuItemStyle = {
	padding: '0.5rem 1.5rem',

	'&:hover': {
		color: COLORS.selectedColor,
	},
};

const menuItemsData = {
	label: 'Menu',
	leftIcon: <MenuOpenIcon />,
	items: [
		{
			label: 'Giới thiệu',
			callback: (event, item) => console.log('New clicked', event, item),
		},
		{
			label: 'Thiết kế nội thất',
			items: [
				{
					label: 'Vila, Biệt thự',
					sx: menuItemStyle,
				},
				{
					label: 'Khách sạn',
					sx: menuItemStyle,
					items: [
						{
							label: 'Nội thất khách sạn',
							sx: menuItemStyle,
						},
						{
							label: 'Căn hộ dịch vụ',
							sx: menuItemStyle,
						},
					],
				},
				{
					label: 'Nhà khách',
					sx: menuItemStyle,
				},
				{
					label: 'Chung cư',
					sx: menuItemStyle,
				},
			],
		},
		{
			label: 'Thiết kế kiến trúc',
			items: [
				{
					label: 'Khách sạn',
					sx: menuItemStyle,
				},
				{
					label: 'Biệt thự',
					sx: menuItemStyle,
				},
				{
					label: 'Nhà phố',
					sx: menuItemStyle,
				},
			],
		},
		{
			label: 'Thiết kế cảnh quan',
			items: [
				{
					label: 'Vườn đọc sách',
					sx: menuItemStyle,
				},
				{
					label: 'Vườn Việt Nam',
					sx: menuItemStyle,
				},
				{
					label: 'Vườn nhiệt đới',
					sx: menuItemStyle,
				},
				{
					label: 'Vườn Nhật Bản',
					sx: menuItemStyle,
				},
			],
		},
		{
			label: 'Công trình thực tế',
		},
		{
			label: 'Phát triển dự án',
		},
		{
			label: 'Quản lý dự án',
		},
		{
			label: 'Báo giá',
			items: [
				{
					label: 'Báo giá thiết kế nội thất',
					sx: menuItemStyle,
				},
				{
					label: 'Báo giá thi công nội thất',
					sx: menuItemStyle,
				},
				{
					label: 'Báo giá xây dựng nhà phố',
					sx: menuItemStyle,
				},
			],
		},
	],
};

const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const trigger = useScrollTrigger({
		threshold: 0,
	});

	return (
		<Box sx={{ flexGrow: 1, mt: '80px' }}>
			<AppBar
				position='fixed'
				sx={{
					paddingY: 1,
					bgcolor: COLORS.backgroundColor,
					backgroundImage: 'none',
					boxShadow: trigger
						? '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
						: 'none',
				}}
			>
				<Container>
					<Toolbar sx={{ mx: '-1.125rem' }}>
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
								alignItems: 'center',
								px: 0,
							}}
						>
							<Box
								sx={{
									a: {
										display: 'block',
										height: '54px',
									},
								}}
							>
								<Link to='/'>
									<img
										width={132}
										height={54}
										src={logo}
										alt='logo'
									/>
								</Link>
							</Box>
							<Box
								sx={{
									ml: '2rem',
								}}
							>
								<NestedDropdown
									menuItemsData={menuItemsData}
									MenuProps={{
										sx: {
											'.MuiMenuItem-root': {
												padding: '0.5rem 1.5rem',

												'&:hover': {
													color: COLORS.selectedColor,
												},
											},
										},
									}}
									ButtonProps={{
										sx: {
											outline: 'none !important',
											color: COLORS.textColor,
											border: `1px solid ${COLORS.borderColor}`,
											backgroundColor: COLORS.backgroundColor,
											borderRadius: 0,

											'&:hover': {
												backgroundColor: COLORS.backgroundColor,
												color: COLORS.selectedColor,
												border: `1px solid ${COLORS.selectedColor}`,
											},
										},
									}}
									onClick={() => console.log('Clicked')}
								/>
							</Box>
							<Box>
								<Search>
									<SearchIconWrapper>
										<SearchIcon />
									</SearchIconWrapper>
									<StyledInputBase
										placeholder='Search…'
										inputProps={{ 'aria-label': 'search' }}
									/>
								</Search>
							</Box>
						</Box>
						<Box
							sx={{
								justifyContent: 'center',
								marginRight: '-0.675rem',
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{categories.map(({ text, isActive, Icon }, idx) => (
								<Box
									key={idx}
									sx={{
										cursor: 'pointer',
										backgroundColor: COLORS.backgroundColor,
										borderColor: isActive ? COLORS.selectedColor : COLORS.borderColor,
										color: isActive ? COLORS.selectedColor : COLORS.textColor,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexDirection: 'column',
										paddingX: '0.25rem',
										'&:hover': {
											transition: '0.3s ease-in-out',
											color: COLORS.selectedColor,
										},
									}}
									onClick={() => {}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											mb: '0.125rem',
										}}
									>
										<Icon sx={{ fontSize: '2rem' }} />
									</Box>
									<Typography
										sx={{
											textTransform: 'uppercase',
											fontSize: '0.6rem',
										}}
									>
										{text}
									</Typography>
								</Box>
							))}
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'end' }}>
							<Button
								variant='text'
								color='primary'
								aria-label='menu'
								onClick={toggleDrawer(true)}
								sx={{ minWidth: '30px', p: '4px', outline: 'none !important' }}
							>
								<MenuIcon sx={{ color: COLORS.selectedColor }} />
							</Button>
							<Drawer
								anchor='right'
								open={open}
								onClose={toggleDrawer(false)}
							>
								<Box
									sx={{
										minWidth: '40dvw',
										padding: '1rem 0',
										backgroundColor: 'background.paper',
										flexGrow: 1,
									}}
								>
									{categories.map(({ text, isActive, Icon }, idx) => (
										<MenuItem
											key={idx}
											sx={{
												cursor: 'pointer',
												backgroundColor: COLORS.backgroundColor,
												borderColor: isActive ? COLORS.selectedColor : COLORS.borderColor,
												color: isActive ? COLORS.selectedColor : COLORS.textColor,
												display: 'flex',
												alignItems: 'center',
												paddingX: '2rem',
												'&:hover': {
													transition: '0.3s ease-in-out',
													color: COLORS.selectedColor,
												},
											}}
											onClick={() => {}}
										>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													mb: '0.125rem',
												}}
											>
												<Icon sx={{ fontSize: '1.75rem' }} />
											</Box>
											<Typography
												sx={{
													textTransform: 'uppercase',
													fontSize: '1rem',
													ml: '1rem',
													lineHeight: '1rem',
												}}
											>
												{text}
											</Typography>
										</MenuItem>
									))}
								</Box>
							</Drawer>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
