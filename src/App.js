import { useState } from 'react';
import './App.css';
import high_five from './assets/high_five.gif';
import StripeContainer from './components/PaymentForm';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Hurrayyy....Now You Can ADVERTISE With Us...!!!!</h1>
			
			{showItem ? (
				<StripeContainer />
			) : (
				<>					
					<img src={high_five} width="600" height="300" alt='high_five' />
					<button onClick={() => setShowItem(true)}>Take me to the home </button>
				</>
			)}
		</div>
	);
}

export default App;
