import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import handleThumbnailError from 'util/HandleThumbnailError';
import './style.scss';

DetailThumbnail.propTypes = {
	thumbnail: PropTypes.object,
	nameAlt: PropTypes.string.isRequired,
};

DetailThumbnail.defaultProps = {
	thumbnail: {},
	nameAlt: '',
};

function DetailThumbnail({ thumbnail = {}, nameAlt }) {
	return (
		<Box className='thumbnail'>
			<img src={handleThumbnailError(thumbnail)} alt={nameAlt} className='thumbnail__img' />
		</Box>
	);
}

export default DetailThumbnail;
