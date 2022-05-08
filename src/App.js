import { createTheme, ThemeProvider } from '@mui/material';
import CheckoutPage from 'pages/Checkout';
import LoginPage from 'pages/LoginPage';
import ShoppingPage from 'pages/Shopping';
import ProductListing from 'pages/Shopping/components/ProductListing';
import ProductDetail from 'pages/Shopping/components/ProductListing/components/ProductDetail';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
	const themeMUI = createTheme({
		typography: {
			fontFamily: 'Montserrat',
		},
	});

	return (
		<div className='App'>
			<ThemeProvider theme={themeMUI}>
				<NavBar />
				<Routes>
					<Route path='/todo' element={<Todo />} />
					<Route path='/home' element={<Home />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/shopping' element={<ShoppingPage />} />
					<Route path='/shopping/products' element={<ProductListing />} />
					<Route path='/shopping/products/:productId' element={<ProductDetail />} />
					<Route path='/checkout' element={<CheckoutPage />} />
					<Route path='*' element={<Navigate to='/home' replace />} />
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
