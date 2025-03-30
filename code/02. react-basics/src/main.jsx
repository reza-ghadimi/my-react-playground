// Imports React's StrictMode to enable additional checks and warnings for development.
import { StrictMode } from 'react'

// Imports the createRoot method from react-dom/client (React 18+), which initializes the root of the app.
import { createRoot } from 'react-dom/client'

// Imports the global CSS file that applies styles to the entire project.
import './index.css'

// Imports the main App component, which will be rendered as the root component of the app.
import App from './App.jsx'

// Selects the root DOM element where the React app will be rendered.
var rootElement = document.getElementById('root');

// Creates a React root container for the app.
var reactRoot = createRoot(rootElement);

// Wraps the App component in StrictMode to enable development warnings and checks.
var appElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Renders the app inside the root container.
// React's Strict Mode intentionally renders components twice in development mode (but only in development, not production).
// This happens only in React 18+ and is designed to detect side effects and ensure your code behaves correctly.
reactRoot.render(appElement);

// Step-19:
// reactRoot.render(<App />);