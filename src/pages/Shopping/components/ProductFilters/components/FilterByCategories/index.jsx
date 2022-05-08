import { Box, Typography } from '@mui/material';
import categoriesApi from 'api/categoriesApi';
import SkeletonFilter from 'components/Skeleton';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';
import queryString from 'query-string';

FilterByCategories.propTypes = {
	onChange: PropTypes.func,
};

function FilterByCategories({ onChange }) {
	const location = useLocation();
	const params = queryString.parse(location.search);

	const [listCategory, setListCategory] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const response = await categoriesApi.getAll();
				setListCategory(response);
				setLoading(false);
			} catch (error) {
				console.log('Fetch list category failure', error);
			}
		})();
	}, []);

	function handleSelectFilter(categoryId) {
		if (!onChange) return;
		onChange(categoryId);
	}

	return (
		<Box pt='12px'>
			{!loading ? (
				<>
					<Typography fontWeight='bold' mb={1} ml='4px'>
						{' '}
						Danh Mục Sản Phẩm{' '}
					</Typography>
					{listCategory &&
						listCategory.length > 0 &&
						listCategory.map((category) => {
							const { id, name } = category;

							return (
								<Typography
									key={id}
									className={
										id ===
										Number.parseInt(
											params[
												'category.id'
											]
										)
											? 'filter__category active'
											: 'filter__category'
									}
									onClick={() => handleSelectFilter(id)}
								>
									{name}
								</Typography>
							);
						})}
				</>
			) : (
				<SkeletonFilter />
			)}
		</Box>
	);
}

export default FilterByCategories;
