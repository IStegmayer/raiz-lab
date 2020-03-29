import React from 'react';
import Checkout from '../components/checkout.component';

const protectedRoutes = [
	{
		name: 'Checkout',
		exact: true,
		path: '/checkout',
		main: props => <Checkout {...props} />,
		public: false,
	},
];

export default protectedRoutes;