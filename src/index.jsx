import React from 'react';
import ReactDOM from 'react-dom';
 // Import global CSS (optional, for styling)
import App from './App';  // Import the App component (root component)

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* This is your main App component */}
    
  </React.StrictMode>,
  document.getElementById('root')  // This hooks React into the "root" div in index.html
);