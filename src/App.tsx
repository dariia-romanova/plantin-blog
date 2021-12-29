import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';

// enum Pages {discover, myPlants, diseases, blog, faq, contactUs }

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='./blog'>
          Discover
        </Route>
        <Route path='./blog'>
          Blog
        </Route>
      </Routes>

    </div>
  );
}

export default App;
