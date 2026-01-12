import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlinecheck from "../utils/useOffline";
import Context from "../utils/UserContextTemp";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onlineStatus = useOnlinecheck();
  const { loggedInUser } = useContext(Context);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo + Brand - Compact on mobile */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src={LOGO_URL}
                alt="Hungry Dine Logo"
                className="relative h-12 w-12 md:h-20 md:w-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Hungry Dine
              </h1>
              <p className="text-xs text-gray-500 font-medium">Delicious Every Time</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link 
                  to="/grocery" 
                  className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
                >
                  Grocery
                </Link>
              </li>

              {/* Cart with Icon */}
              <li>
                <Link to="/cart" className="relative px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Cart
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Cart Icon - Mobile Only */}
            <Link to="/cart" className="md:hidden relative p-2 rounded-lg hover:bg-orange-50 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg min-w-[20px] text-center animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Online Status Badge - Hidden on small mobile */}
            <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-sm shadow-md ${
              onlineStatus 
                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200" 
                : "bg-gradient-to-r from-red-50 to-pink-50 text-red-700 border border-red-200"
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                onlineStatus ? "bg-green-500 animate-pulse" : "bg-red-500"
              }`}></span>
              {onlineStatus ? "Online" : "Offline"}
            </div>

            {/* Styled Logged In User - Compact on tablet, hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {loggedInUser?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-xs text-gray-500 font-medium">Welcome back</span>
                <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  {loggedInUser || 'Guest'}
                </span>
              </div>
            </div>

            {/* Login/Logout Button - Compact on mobile */}
            <button
              className="hidden sm:flex px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl items-center gap-2 text-sm md:text-base"
              onClick={() => setLogin(login === "Login" ? "Logout" : "Login")}
            >
              {login === "Login" ? (
                <>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden md:inline">{login}</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden md:inline">{login}</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/home"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/grocery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
                  >
                    Grocery
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile User Info */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center text-white font-bold shadow-md">
                  {loggedInUser?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-medium">Welcome back</p>
                  <p className="text-sm font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    {loggedInUser || 'Guest'}
                  </p>
                </div>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  onlineStatus 
                    ? "bg-green-100 text-green-700" 
                    : "bg-red-100 text-red-700"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    onlineStatus ? "bg-green-500" : "bg-red-500"
                  }`}></span>
                  {onlineStatus ? "Online" : "Offline"}
                </div>
              </div>

              <button
                className="w-full mt-3 px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                onClick={() => {
                  setLogin(login === "Login" ? "Logout" : "Login");
                  setMobileMenuOpen(false);
                }}
              >
                {login === "Login" ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    {login}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {login}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;