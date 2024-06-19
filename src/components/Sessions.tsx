import { Session } from '../types';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';

interface SessionsProps {
	sessions: Session[];
}

const Sessions = ({ sessions }: SessionsProps) => {
	return (
		<div className="">
			<h2 className="text-xl font-bold mb-4 text-slate-900">Sessions</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Duration (Minutes)</TableHead>
						<TableHead>Price (€)</TableHead>
						<TableHead>Payment Finalization</TableHead>
						<TableHead>Discount (€)</TableHead>
						<TableHead>Payment Method</TableHead>
						<TableHead>Location</TableHead>
						<TableHead>Generate Invoice</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sessions.map((session) => (
						<TableRow key={session.id}>
							<TableCell>{session.name}</TableCell>
							<TableCell>{new Date(session.date).toLocaleString()}</TableCell>
							<TableCell>{session.durationMinutes}</TableCell>
							<TableCell>{session.price}</TableCell>
							<TableCell>{session.paymentFinalization}</TableCell>
							<TableCell>{session.discount}</TableCell>
							<TableCell>{session.paymentMethod}</TableCell>
							<TableCell>{session.location}</TableCell>
							<TableCell>{session.generateInvoice ? 'Yes' : 'No'}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Sessions;
