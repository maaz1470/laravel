import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock'
function App(){
	return (
		<Clock locale="en-US" />
	);
}

export default App;




if(document.getElementById('root')){
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
            <React.StrictMode>
            <App />
            </React.StrictMode>
        )
}