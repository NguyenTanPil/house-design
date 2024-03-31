import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, Drawer, MenuItem, useScrollTrigger } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { COLORS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
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

const Header = () => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const trigger = useScrollTrigger({
		threshold: 0,
	});

	const scrollToSection = () => {};

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
							<Typography
								variant='h6'
								noWrap
								component='div'
								color='text.primary'
								sx={{ display: { xs: 'block' } }}
								onClick={() => {
									navigate('/');
								}}
							>
								DUC TOAN
							</Typography>

							<Box sx={{ ml: '1rem', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								<MenuItem
									onClick={() => scrollToSection('features')}
									sx={{
										py: '6px',
										px: '12px',
										textTransform: 'uppercase',
										'&:hover': {
											backgroundColor: 'transparent',
										},
									}}
								>
									<Typography
										variant='body2'
										color='text.primary'
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
									>
										Features
									</Typography>
								</MenuItem>
								<MenuItem
									onClick={() => scrollToSection('testimonials')}
									sx={{
										py: '6px',
										px: '12px',
										textTransform: 'uppercase',
										'&:hover': {
											backgroundColor: 'transparent',
											color: COLORS.selectedColor,
										},
									}}
								>
									<Typography
										variant='body2'
										color='text.primary'
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
									>
										Testimonials
									</Typography>
								</MenuItem>
								<MenuItem
									onClick={() => scrollToSection('highlights')}
									sx={{
										py: '6px',
										px: '12px',
										textTransform: 'uppercase',
										'&:hover': {
											backgroundColor: 'transparent',
											color: COLORS.selectedColor,
										},
									}}
								>
									<Typography
										variant='body2'
										color='text.primary'
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
									>
										Highlights
									</Typography>
								</MenuItem>
								<MenuItem
									onClick={() => scrollToSection('pricing')}
									sx={{
										py: '6px',
										px: '12px',
										textTransform: 'uppercase',
										'&:hover': {
											backgroundColor: 'transparent',
											color: COLORS.selectedColor,
										},
									}}
								>
									<Typography
										variant='body2'
										color='text.primary'
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
									>
										Pricing
									</Typography>
								</MenuItem>
								<MenuItem
									onClick={() => scrollToSection('faq')}
									sx={{
										py: '6px',
										px: '12px',
										textTransform: 'uppercase',
										'&:hover': {
											backgroundColor: 'transparent',
											color: COLORS.selectedColor,
										},
									}}
								>
									<Typography
										variant='body2'
										color='text.primary'
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
									>
										FAQ
									</Typography>
								</MenuItem>
							</Box>
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
						<Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'end' }}>
							<Button
								variant='text'
								color='primary'
								aria-label='menu'
								onClick={toggleDrawer(true)}
								sx={{ minWidth: '30px', p: '4px' }}
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
										minWidth: '60dvw',
										p: 2,
										backgroundColor: 'background.paper',
										flexGrow: 1,
									}}
								>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'end',
											flexGrow: 1,
										}}
									></Box>
									<MenuItem
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
										onClick={() => scrollToSection('features')}
									>
										Features
									</MenuItem>
									<MenuItem
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
										onClick={() => scrollToSection('testimonials')}
									>
										Testimonials
									</MenuItem>
									<MenuItem
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
										onClick={() => scrollToSection('highlights')}
									>
										Highlights
									</MenuItem>
									<MenuItem
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
										onClick={() => scrollToSection('pricing')}
									>
										Pricing
									</MenuItem>
									<MenuItem
										sx={{
											'&:hover': {
												color: COLORS.selectedColor,
												transition: '0.3s ease-in-out',
											},
										}}
										onClick={() => scrollToSection('faq')}
									>
										FAQ
									</MenuItem>
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
