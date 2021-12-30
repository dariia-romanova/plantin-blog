import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Blog } from './components/Blog';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/plantin-blog/discover' element={ <Breadcrumbs page={'Discover'} />} />
        <Route path='/plantin-blog/my_plants' element={<Breadcrumbs page={'My Plants'} />} />
        <Route path='/plantin-blog/diseases' element={<Breadcrumbs page={'Diseases'} />} />
        <Route path='/plantin-blog/blog' element={<Blog />} />
        <Route path='/plantin-blog/faq' element={<Breadcrumbs page={'FAQ'} />} />
        <Route path='/plantin-blog/contact_us' element={<Breadcrumbs page={'Contact Us'} />} />
        <Route
          path="*"
          element={<Navigate to="/plantin-blog/blog" />}
        />
      </Routes>
    </div>
  );
}

export default App;
