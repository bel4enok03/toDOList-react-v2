import './App.css';
import { ToDo } from './ToDo';

function App() {
	return (
		<div className="container">
			<div className='text'>
				<h1>ToDo-List</h1>
			</div>
			<div className='text'>
				<ToDo />
			</div>
		</div>
	);
}

export default App;
