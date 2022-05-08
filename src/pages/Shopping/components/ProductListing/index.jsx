import { Box, Container, Grid, Paper } from '@mui/material';
import { getAllProducts } from 'features/Products/productsSlice';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import PaginationProductsPage from '../Pagination';
import ProductFilters from '../ProductFilters';
import ProductSort from '../ProductSort';
import SkeletonProductList from '../Skeleton';
import FilterViewer from './components/FilterViewer';
import ListProduct from './components/ListProduct';
import './style.scss';
import queryString from 'query-string';

function ProductListing() {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = useMemo(() => {
		const params = queryString.parse(location.search);
		return {
			...params,
			_page: Number.parseInt(params._page) || 1,
			_limit: Number.parseInt(params._limit) || 12,
			_sort: params._sort || 'salePrice',
		};
	}, [location.search]);

	const { data, pagination } = useSelector((state) => state.products.currentProducts);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			(async () => {
				const action = getAllProducts(queryParams);
				await dispatch(action);
				setLoading(false);
			})();
			window.scrollTo(0, 0);
		} catch (error) {
			console.log('Fetch list product failure', error);
		}
	}, [queryParams, dispatch]);

	function createNewParams(filter) {
		return { pathname: location?.pathname, search: queryString.stringify(filter) };
	}

	function handleOnChangePage(newPage) {
		const filter = { ...queryParams, _page: newPage };
		navigate(createNewParams(filter));
		setLoading(true);
	}

	function handleOnChangeSort(valueSort) {
		const filter = { ...queryParams, _page: 1, _sort: valueSort };
		navigate(createNewParams(filter));
		setLoading(true);
	}

	function handleOnChangeFilter(newFilter) {
		const filter = { ...queryParams, ...newFilter, _page: 1 };
		navigate(createNewParams(filter));
		setLoading(true);
	}

	function handleClearFilter(newFilter) {
		navigate(createNewParams(newFilter));
		setLoading(true);
	}

	return (
		<Box className='products__container'>
			<Container maxWidth='xl'>
				<Paper>
					<Grid container className='products__inner' p={1}>
						<Grid item className='products__left'>
							<ProductFilters
								filter={queryParams}
								onChange={handleOnChangeFilter}
								clearFilter={handleClearFilter}
							/>
						</Grid>

						<Grid item className='products__right'>
							<ProductSort
								currentSort={queryParams._sort}
								onChange={handleOnChangeSort}
							/>

							{loading ? (
								<SkeletonProductList />
							) : (
								<>
									<FilterViewer
										filter={queryParams}
										onChange={handleClearFilter}
									/>
									<ListProduct currentProducts={data} />
								</>
							)}
						</Grid>
					</Grid>
				</Paper>

				<PaginationProductsPage onChange={handleOnChangePage} pagination={pagination} />
			</Container>
		</Box>
	);
}

export default ProductListing;
