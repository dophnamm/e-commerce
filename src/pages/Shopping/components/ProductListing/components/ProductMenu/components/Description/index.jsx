import React from 'react';
import PropTypes from 'prop-types';
import DOMpurify from 'dompurify';

ProductDescription.propTypes = {
	description: PropTypes.string.isRequired,
};

ProductDescription.defaultProps = {
	description: '',
};

function ProductDescription({ description }) {
	const safeHTML = DOMpurify.sanitize(description);
	return <div dangerouslySetInnerHTML={{ __html: safeHTML }} />;
}

export default ProductDescription;
