import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {ToastProvider} from 'react-toast-notifications'
import { useRoutes } from './routes';
import { Navbar } from './components/UI/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const routes = useRoutes()
  return (
    <Router>
        <Navbar />
        <ToastProvider>
          <div className="container">
              {routes}
          </div>
        </ToastProvider>
    </Router>
  );
}

export default App;
