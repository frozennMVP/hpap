import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux'
// import { store, persistor } from './redux/index'
// import { PersistGate } from 'redux-persist/es/integration/react';

function App() {
  return (
        <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

  );
}

export default App;
