import React from 'react';
import Checkout from '../components/checkout.component';
import AddItem from '../components/add-item.component';

const protectedRoutes = [
	{
		name: 'Checkout',
		exact: true,
		path: '/checkout',
		main: props => <Checkout {...props} />,
		public: false,
	},
	{
		name: 'AddItem',
		exact: true,
		path: '/admin/add',
		main: props => <AddItem {...props} />,
		public: false,
	},
];

export default protectedRoutes;