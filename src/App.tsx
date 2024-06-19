import { useState } from 'react';
import './index.css';
import Sessions from './components/Sessions';
import AddSession from './components/AddSession';
import { Session } from './types';
import { Button } from './components/ui/button';
import { ListPlus } from 'lucide-react';
import { initialSessions } from './data/initialValues';

const App = () => {
	const [sessions, setSessions] = useState<Session[]>(initialSessions);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="p-8">
			<header className="mb-4 flex justify-between">
				<h1 className="text-2xl font-bold text-slate-900">Lumi Case Study</h1>
				<Button
					className="mb-4 px-5 rounded-lg bg-slate-700 text-slate-100 transition-all duration-300"
					onClick={() => setIsModalOpen(true)}
				>
					<ListPlus className="mr-2 h-4 w-4" /> Add Session
				</Button>
			</header>
			<main>
				<AddSession
					setSessions={setSessions}
					sessions={sessions}
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
				<Sessions sessions={sessions} />
			</main>
		</div>
	);
};

export default App;
