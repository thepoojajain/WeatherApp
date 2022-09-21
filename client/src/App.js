import { ErrorBoundary } from 'react-error-boundary';

import './App.css';
import WeatherData from './components/WeatherData/WeatherData';

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div className="container">
        <WeatherData />
      </div>
    </ErrorBoundary>
  );
}
