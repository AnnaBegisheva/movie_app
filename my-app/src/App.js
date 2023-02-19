import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import filmStore from './store/filmStore';
import styles from './App.module.scss';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import FilmPage from './components/FilmPage/FilmPage'

function App() {
  const dataStore = {
    dataStore: new filmStore(),
  };

  return (
    <Provider {...dataStore}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog/:id" element={<FilmPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
