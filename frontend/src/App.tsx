import { useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Settings from './components/pages/Settings';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';

export type Page = 'login' | 'home' | 'settings' | 'register';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [username, setUsername] = useState<string>('');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUsername('');
    setCurrentPage('login');
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout username={username} currentPage={currentPage} onLogout={handleLogout} onNavigate={handleNavigate}/>}>
            <Route index element = {<Login setCurrentPage={setCurrentPage} setUsername={setUsername} />}/>
            <Route path="home" element={<Home username={username} />}/>
            <Route path='settings' element={<Settings username={username} onLogout={handleLogout} />}/>
            <Route path="register" element={<Register handleNavigate={handleNavigate} setUsername={setUsername} />}/>
          </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
