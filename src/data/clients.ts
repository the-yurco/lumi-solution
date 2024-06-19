import { Client } from '../types';

export const clients: Client[] = [
	{
		id: '1',
		name: 'John Doe',
		discount: '10.00',
		paymentMethodPreference: 'card',
		locationPreference: 'online',
		generateInvoices: true
	},
	{
		id: '2',
		name: 'Jane Smith',
		discount: '5.00',
		paymentMethodPreference: 'paypal',
		locationPreference: 'in-person',
		generateInvoices: false
	},
	{
		id: '3',
		name: 'David Lee',
		discount: '0.00',
		paymentMethodPreference: 'bank-transfer',
		locationPreference: 'online',
		generateInvoices: true
	},
	{
		id: '4',
		name: 'Alice Miller',
		discount: '15.00',
		paymentMethodPreference: 'card',
		locationPreference: 'in-person',
		generateInvoices: true
	},
	{
		id: '5',
		name: 'Robert Brown',
		discount: '7.50',
		paymentMethodPreference: 'paypal',
		locationPreference: 'online',
		generateInvoices: false
	}
];
