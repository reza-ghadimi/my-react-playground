// Imports React's StrictMode, which helps identify potential issues in the app during development by enabling additional checks and warnings.
import { StrictMode } from 'react'

// Imports the createRoot method from react-dom/client, which is used in React 18 and later to create the root DOM node for the application.
import { createRoot } from 'react-dom/client'

// Imports the global CSS file (index.css), which contains styles applied to the whole project.
import './index.css'

// Imports the main App component that will be rendered as the root component of the React application.
import App from './App.jsx'

// Creates the root of the React app and renders the App component wrapped inside StrictMode for development checks.
// The app is rendered inside the DOM element with the id="root".
var rootComponent = createRoot(document.getElementById('root'));

// The app component is wrapped in StrictMode to help identify potential problems during development.
var appComponent = (
  <StrictMode> 
    <App />  // The main application component
  </StrictMode>
);

// Renders the app component inside the root component
rootComponent.render(appComponent);