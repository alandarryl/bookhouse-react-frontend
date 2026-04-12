
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';
import Messaging from './pages/Messaging.jsx';
import MyAds from './pages/MyAds.jsx';
import AdList from './pages/AdList.jsx';

import Auth from "./pages/Auth.jsx";

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
        <Route path="/Auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<BookDetail />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/profil" element={<MyAds/>} />
        <Route path="/AdList" element={<AdList/>} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
      <Footer/>
    </Router>
  )
}

export default App;
