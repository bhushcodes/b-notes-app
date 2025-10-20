import React, { useState, useEffect } from 'react';
import { LogIn, LogOut, User } from 'lucide-react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthButton = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Check if user is already logged in
    const currentUser = netlifyIdentity.currentUser();
    setUser(currentUser);

    // Listen for login events
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
      // Reload to refresh notes with user data
      window.location.reload();
    });

    // Listen for logout events
    netlifyIdentity.on('logout', () => {
      setUser(null);
      // Reload to clear user-specific notes
      window.location.reload();
    });

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const handleLogin = () => {
    netlifyIdentity.open();
  };

  const handleLogout = () => {
    netlifyIdentity.logout();
  };

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 bg-brutal-accent-green px-3 py-2 border-3 border-black shadow-brutal">
          <User size={16} className="text-black" />
          <span className="text-xs font-bold text-black" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            {user.user_metadata?.full_name || user.email?.split('@')[0]}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-brutal-red text-black font-bold px-3 sm:px-4 py-2 border-3 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] text-xs sm:text-sm"
          style={{fontFamily: 'Space Grotesk, sans-serif'}}
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 bg-brutal-accent-purple text-black font-bold px-3 sm:px-4 py-2 border-3 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] text-xs sm:text-sm uppercase tracking-wide"
      style={{fontFamily: 'Space Grotesk, sans-serif'}}
    >
      <LogIn size={16} />
      <span>Login</span>
    </button>
  );
};

export default AuthButton;
