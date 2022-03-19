import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
// import MarsPhotos from './photos/MarsPhotos';

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<div className="app">
				<div className="header">
					<h1>Place orders</h1>
				</div>
				{/* <MarsPhotos></MarsPhotos> */}
			</div>
		</Provider>
	);
}

export default App;
