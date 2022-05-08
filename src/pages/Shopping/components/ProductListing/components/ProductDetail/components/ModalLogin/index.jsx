import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import LoginPage from 'pages/LoginPage';
import React, { useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

ModalLogin.propTypes = {
	visible: PropTypes.bool.isRequired,
	setVisible: PropTypes.func,
	currentUser: PropTypes.object.isRequired,
};

ModalLogin.defaultProps = {
	visible: false,
	currentUser: {},
};

function ModalLogin({ visible, setVisible, currentUser }) {
	const handleClose = () => {
		setVisible(false);
	};

	useEffect(() => {
		return handleClose();
	}, [currentUser?.id]);

	return (
		<Dialog open={visible} onClose={handleClose} className='modal__login'>
			<DialogContent dividers>
				<LoginPage />
			</DialogContent>

			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ModalLogin;
