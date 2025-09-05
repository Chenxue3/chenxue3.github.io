import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { About, Contact, Home, Projects, PostsPage, PostDetail } from './pages';

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen flex flex-col">
      <Router basename="/chenxue3.github.io">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 - Not Found 页面，可以自定义 */}
            <Route path="*" element={<div className="p-8 text-center">页面未找到</div>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
