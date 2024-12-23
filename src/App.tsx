import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Racing from './pages/Racing';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/racing" element={<Racing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;