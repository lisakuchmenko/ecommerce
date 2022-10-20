import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Footer />
			<Outlet />
		</>
	);
};

export default Layout;
