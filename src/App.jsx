
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';

//layout
import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
    <NavBar/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
      <Footer/>
    </Router>
  )
}

export default App;
