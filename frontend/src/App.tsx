import { useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Settings from './components/pages/Settings';
import Login from './components/pages/Login';
import MenuBar from './components/shared/MenuBar';

export type Page = 'login' | 'home' | 'settings';

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

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login 
        setCurrentPage={setCurrentPage}
        setUsername={setUsername} />
      case 'home':
        return <Home username={username} />;
      
      case 'settings':
        return <Settings username={username} />;
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {currentPage !== 'login' && (
        <MenuBar 
          username={username} 
          onNavigate={handleNavigate} 
          onLogout={handleLogout} 
        />
      )}
      {renderPage()}
    </div>
  );
}

export default App;
