import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import { Blog } from './components/Blog';
import { Header } from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path='/plantin-blog/discover' element={<h2>Discover</h2>} />
        <Route path='/plantin-blog/my_plants' element={<h2>My Plants</h2>} />
        <Route path='/plantin-blog/diseases' element={<h2>Diseases</h2>} />
        <Route path='/plantin-blog/blog' element={<Blog />} />
        <Route path='/plantin-blog/faq' element={<h2>FAQ</h2>} />
        <Route path='/plantin-blog/contact_us' element={<h2>Contact Us</h2>} />
        <Route
          path="*"
          element={<Navigate to="/plantin-blog/blog" />}
        />
      </Routes>
    </div>
  );
}

export default App;
