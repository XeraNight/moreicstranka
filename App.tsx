import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Career from './pages/Career';
import Team from './pages/Team';
import Standard from './pages/Standard';
import Latin from './pages/Latin';
import LoginModal from './components/LoginModal';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DanceDataProvider } from './contexts/DanceDataContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component to handle secret login button visibility
const SecretLoginTrigger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return null;

  return (
    <img
      src="https://eraifvwscrzcuaobvprx.supabase.co/storage/v1/object/public/images/logo.png"
      alt="Login"
      onClick={onClick}
      className="fixed bottom-4 right-4 w-6 h-6 opacity-20 hover:opacity-100 cursor-pointer transition-opacity duration-300 z-50 object-contain"
      title="Admin Access"
    />
  );
};

const App: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {/* ThemeProvider wraps AuthProvider and DanceDataProvider for global theme access */}
      <ThemeProvider>
        <AuthProvider>
          <DanceDataProvider>
            {/* Global background and text colors, responsive to theme. 
                In dark mode, we apply a black overlay (bg-black/80) to let the HTML background image show through subtly 
                while keeping text readable. */}
            <div className="flex flex-col min-h-screen bg-matte-white text-matte-black dark:bg-matte-black/95 dark:text-matte-white transition-colors duration-300 selection:bg-gold-200 selection:text-slate-900 dark:selection:bg-gold-600 dark:selection:text-black relative">
              <Navbar onLoginClick={() => setShowLoginModal(true)} />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/standard" element={<Standard />} />
                  <Route path="/latin" element={<Latin />} />
                </Routes>
              </main>
              <Footer />

              {/* Secret Login Trigger */}
              <SecretLoginTrigger onClick={() => setShowLoginModal(true)} />
            </div>
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
          </DanceDataProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;