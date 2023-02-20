import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import filmStore from './store/filmStore';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import HomePage from './components/HomePage/HomePage';
import FilmPage from './components/FilmPage/FilmPage'

function App() {
  const dataStore = {
    dataStore: new filmStore(),
  };

  return (
    <Provider {...dataStore}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/catalog/liked" element={<p>To be added</p>} />
            <Route path="/catalog/films" element={<HomePage filter={{ 'type': 'FILM' }} />} />
            <Route path="/catalog/series" element={<HomePage filter={{ 'type': 'TV_SERIES' }} />} />
            <Route path="/catalog/cartoons" element={<HomePage filter={{ 'genres': 18 }} />} />
            <Route path="/catalog/:id" element={<FilmPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider >
  );
}

export default App;
