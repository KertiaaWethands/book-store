import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Registrasi,Login,Homepage} from './pages';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />}>
          <Route path="homepage" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
