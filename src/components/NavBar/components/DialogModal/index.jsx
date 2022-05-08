import { Button, Dialog, DialogActions, DialogContent, Box, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Register from 'features/Auth/components/Register';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

DialogModal.propTypes = {
	setShowMenuUser: PropTypes.func.isRequired,
};

function DialogModal({ setShowMenuUser }) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		setShowMenuUser(false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Typography onClick={handleClickOpen}>Register</Typography>

			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>

						<Typography component='h1' variant='h5'>
							Register An Account
						</Typography>

						<Register handleClose={handleClose} />
					</Box>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default DialogModal;
