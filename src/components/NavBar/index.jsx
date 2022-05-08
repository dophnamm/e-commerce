import TerminalIcon from '@mui/icons-material/Terminal';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DialogModal from './components/DialogModal';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/Auth/userSlice';
import CartNavBar from './components/Cart';

function NavBar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isShowMenuUser, setShowMenuUser] = useState(null);
	const { currentUser } = useSelector((state) => state.user);

	const pages = ['home', 'todo', 'shopping'];
	const settings = ['Sign In', <DialogModal setShowMenuUser={setShowMenuUser} />];

	function handleClickSetting(setting) {
		if (setting === 'Sign In') {
			navigate('/login');
			setShowMenuUser(false);
		}
	}

	function handleLogout() {
		dispatch(logout());
		navigate('/login');
		setShowMenuUser(false);
	}

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						<TerminalIcon />
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<NavLink key={page} to={`/${page}`} className='nav__link'>
								<Button
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
									}}
								>
									{page}
								</Button>
							</NavLink>
						))}
					</Box>

					<Box
						sx={{
							flexGrow: 0,
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
							gap: 1,
							textTransform: 'lowercase',
						}}
					>
						<CartNavBar />

						<IconButton
							sx={{ p: 0 }}
							onClick={(e) => setShowMenuUser(e.currentTarget)}
						>
							{!currentUser.id && <Avatar alt='avatar' />}

							{currentUser && (
								<Typography color={'white'}>
									{currentUser.username}
								</Typography>
							)}
						</IconButton>

						<Menu
							sx={{ mt: '40px' }}
							id='menu-appbar'
							anchorEl={isShowMenuUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(isShowMenuUser)}
							onClose={() => setShowMenuUser(null)}
						>
							{currentUser && currentUser.username ? (
								<MenuItem onClick={() => handleLogout()}>
									Logout
								</MenuItem>
							) : (
								settings.map((setting) => (
									<MenuItem
										key={setting}
										onClick={() =>
											handleClickSetting(
												setting
											)
										}
									>
										{setting}
									</MenuItem>
								))
							)}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
