import React, { useState } from 'react';
import { clients } from '../data/clients';
import { products } from '../data/products';
import {
	Session,
	PaymentFinalization,
	PaymentMethod,
	Location
} from '../types';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface AddSessionProps {
	setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
	sessions: Session[];
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSession = ({
	setSessions,
	sessions,
	isModalOpen,
	setIsModalOpen
}: AddSessionProps) => {
	const [clientId, setClientId] = useState(clients[0]?.id || '');
	const [productId, setProductId] = useState(products[0]?.id || '');
	const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [durationMinutes, setDurationMinutes] = useState<number>(0);
	const [price, setPrice] = useState('');
	const [paymentFinalization, setPaymentFinalization] =
		useState<PaymentFinalization>('before');
	const [discount, setDiscount] = useState('');
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
	const [location, setLocation] = useState<Location>('online');
	const [generateInvoice, setGenerateInvoice] = useState(false);

	const handleAddSession = () => {
		const client = clients.find((client) => client.id === clientId);
		const product = products.find((product) => product.id === productId);

		if (client && product) {
			const newSession: Session = {
				id: (sessions.length + 1).toString(),
				clientId: client.id,
				productId: product.id,
				name: name || `${client.name} - ${product.name}`,
				date: new Date(date),
				durationMinutes: durationMinutes || product.durationMinutes,
				price: price || product.price,
				paymentFinalization: paymentFinalization || product.paymentFinalization,
				discount: discount || client.discount,
				paymentMethod: paymentMethod || client.paymentMethodPreference,
				location: location || client.locationPreference,
				generateInvoice: generateInvoice || client.generateInvoices
			};

			setSessions([...sessions, newSession]);
			setIsModalOpen(false);
			resetForm();
		}
	};

	const resetForm = () => {
		setClientId(clients[0]?.id || '');
		setProductId(products[0]?.id || '');
		setDate('');
		setName('');
		setDurationMinutes(0);
		setPrice('');
		setPaymentFinalization('before');
		setDiscount('');
		setPaymentMethod('card');
		setLocation('online');
		setGenerateInvoice(false);
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
			<DialogTrigger asChild>
				<button className="hidden">Open Modal</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add Session</DialogTitle>
					<DialogDescription>
						Fill in the details below to add a new session.
					</DialogDescription>
				</DialogHeader>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<form>
							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Client:
								</label>
								<select
									value={clientId}
									onChange={(e) => setClientId(e.target.value)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								>
									{clients.map((client) => (
										<option key={client.id} value={client.id}>
											{client.name}
										</option>
									))}
								</select>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Product:
								</label>
								<select
									value={productId}
									onChange={(e) => setProductId(e.target.value)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								>
									{products.map((product) => (
										<option key={product.id} value={product.id}>
											{product.name}
										</option>
									))}
								</select>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">Date:</label>
								<input
									type="datetime-local"
									value={date}
									onChange={(e) => setDate(e.target.value)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								/>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">Name:</label>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								/>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Location:
								</label>
								<select
									value={location}
									onChange={(e) => setLocation(e.target.value as Location)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								>
									<option value="online">Online</option>
									<option value="in-person">In Person</option>
								</select>
							</div>

							<div className="mb-4 flex flex-row-reverse justify-end gap-3 ">
								<label className="text-slate-500/50" htmlFor="invoice">
									Generate Invoice
								</label>
								<input
									id="invoice"
									type="checkbox"
									checked={generateInvoice}
									onChange={(e) => setGenerateInvoice(e.target.checked)}
									className="p-2 border border-slate-200 shadow-sm focus:outline-none focus:border-slate-300 rounded focus:bg-slate-900 focus:text-slate-50"
								/>
							</div>
						</form>
					</div>

					<div>
						<form>
							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Payment Method:
								</label>
								<select
									value={paymentMethod}
									onChange={(e) =>
										setPaymentMethod(e.target.value as PaymentMethod)
									}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								>
									<option value="card">Card</option>
									<option value="paypal">Paypal</option>
									<option value="bank-transfer">Bank Transfer</option>
								</select>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Payment Finalization:
								</label>
								<select
									value={paymentFinalization}
									onChange={(e) =>
										setPaymentFinalization(
											e.target.value as PaymentFinalization
										)
									}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								>
									<option value="before">Before</option>
									<option value="after">After</option>
								</select>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Duration Minutes:
								</label>
								<input
									type="number"
									value={durationMinutes}
									onChange={(e) => setDurationMinutes(Number(e.target.value))}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								/>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">Price:</label>
								<input
									type="text"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								/>
							</div>

							<div className="mb-4">
								<label className="text-slate-500/80 text-sm mb-2">
									Discount:
								</label>
								<input
									type="text"
									value={discount}
									onChange={(e) => setDiscount(e.target.value)}
									className="p-2 border border-slate-200 w-full shadow-sm focus:outline-none focus:border-slate-500 rounded-md text-sm transition-all duration-200"
								/>
							</div>
						</form>
					</div>
					<div className="flex justify-start gap-3">
						<Button
							onClick={handleAddSession}
							className="px-8 py-2 mb-2 text-sm font-medium text-slate-100 bg-slate-400 rounded-lg border border-slate-500 hover:bg-slate-700 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-all duration-300"
						>
							Add Session
						</Button>

						<Button
							onClick={() => setIsModalOpen(false)}
							className="px-8 py-2 mb-2 text-sm font-medium text-slate-500 bg-slate-100 rounded-lg border border-slate-300 hover:bg-slate-300 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-all duration-300"
						>
							Cancel
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AddSession;
