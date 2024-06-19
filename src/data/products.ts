import { Product } from '../types';

export const products: Product[] = [
	{
		id: 'p1',
		name: 'Classic Therapy Ses. (50 mins)',
		durationMinutes: 50,
		price: '100.00',
		paymentFinalization: 'after'
	},
	{
		id: 'p2',
		name: 'Group Therapy Ses. (90 mins)',
		durationMinutes: 90,
		price: '150.00',
		paymentFinalization: 'before'
	},
	{
		id: 'p3',
		name: 'Coaching Ses. (30 mins)',
		durationMinutes: 30,
		price: '75.00',
		paymentFinalization: 'after'
	},
	{
		id: 'p4',
		name: 'Couples Therapy Ses. (80 mins)',
		durationMinutes: 80,
		price: '200.00',
		paymentFinalization: 'before'
	},
	{
		id: 'p5',
		name: 'Family Therapy Ses. (120 mins)',
		durationMinutes: 120,
		price: '250.00',
		paymentFinalization: 'after'
	}
];
