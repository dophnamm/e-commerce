import React, { useState } from 'react';
import { Box } from '@mui/material';
import AdditionalInformation from './components/Addition';
import ProductDescription from './components/Description';
import ProductReviews from './components/Reviews';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PropTypes from 'prop-types';

ProductDescription.propTypes = {
	description: PropTypes.string.isRequired,
};

ProductDescription.defaultProps = {
	description: '',
};

function ProductMenu({ description }) {
	const [value, setValue] = useState('1');

	const handleChange = (_, newTab) => {
		setValue(newTab);
	};

	return (
		<>
			<Box sx={{ width: '100%' }}>
				<TabContext value={value}>
					<Box sx={{ border: 'none' }}>
						<TabList onChange={handleChange} centered>
							<Tab label='Description' value='1' />
							<Tab label='Additional Information' value='2' />
							<Tab label='Reviews' value='3' />
						</TabList>
					</Box>

					<TabPanel value='1'>
						<ProductDescription description={description} />
					</TabPanel>

					<TabPanel value='2'>
						<AdditionalInformation />
					</TabPanel>

					<TabPanel value='3'>
						<ProductReviews />
					</TabPanel>
				</TabContext>
			</Box>
		</>
	);
}

export default ProductMenu;
