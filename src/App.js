import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
	Home,
	Products,
	SingleProduct,
	About,
	Cart,
	Error,
	Checkout,
	PrivateRoute,
} from './pages';

const router = createBrowserRouter([
	{
		element: <Navbar />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{ path: 'about', element: <About /> },
			{ path: 'cart', element: <Cart /> },
			{ path: 'products', element: <Products /> },
			{ path: 'products/:id', element: <SingleProduct /> },
			{ path: 'about', element: <About /> },
			{
				path: 'checkout',
				element: (
					<PrivateRoute>
						<Checkout />
					</PrivateRoute>
				),
			},
			{ path: '*', element: <Error /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
