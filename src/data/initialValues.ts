import { Session } from '@/types';

export const initialSessions: Session[] = [
	{
		id: '1',
		clientId: '1',
		productId: 'p1',
		name: 'John Doe - Classic Therapy Ses. (50 mins)',
		date: new Date('2024-06-20T10:00:00'),
		durationMinutes: 50,
		price: '100.00',
		paymentFinalization: 'after',
		discount: '10.00',
		paymentMethod: 'card',
		location: 'online',
		generateInvoice: true
	},
	{
		id: '2',
		clientId: '2',
		productId: 'p3',
		name: 'Jane Smith - Classic Therapy Ses. (50 mins)',
		date: new Date('2024-06-21T14:00:00'),
		durationMinutes: 30,
		price: '75.00',
		paymentFinalization: 'after',
		discount: '5.00',
		paymentMethod: 'paypal',
		location: 'in-person',
		generateInvoice: false
	}
];
