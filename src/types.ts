export type PaymentMethod = 'card' | 'paypal' | 'bank-transfer';
export type PaymentFinalization = 'before' | 'after';
export type Location = 'online' | 'in-person';

export type Client = {
	id: string;
	name: string;
	discount: string;
	paymentMethodPreference: PaymentMethod;
	locationPreference: Location;
	generateInvoices: boolean;
};

export type Product = {
	id: string;
	name: string;
	durationMinutes: number;
	price: string;
	paymentFinalization: PaymentFinalization;
};

export type Session = {
	id: string;
	clientId: string;
	productId: string;
	name: string;
	date: Date;
	durationMinutes: number;
	price: string;
	paymentFinalization: PaymentFinalization;
	discount: string;
	paymentMethod: PaymentMethod;
	location: Location;
	generateInvoice: boolean;
};
