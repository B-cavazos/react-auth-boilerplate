import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    isLoggedIn();
  }, [location]);

  const isLoggedIn = () => {
    let token = localStorage.getItem('token');
    return !!token;
  };

  const userLogout = () => {
    // log user out
    let token = localStorage.removeItem('token');
    
    // send user to login page
    history.push("auth/login");    
    
    return token;
  };



  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        {/* Logo */}
        <Link to='/' className='navbar-brand'>
          Some Cool Startup!
        </Link>

        {/* Menu */}
        <div className='collapse navbar-collapse'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </div>
        </div>

        {/* Cart Icon */}
        <div className='sh-cart-icon'>
          <div className='navbar-nav'>
            {isLoggedIn() ? (
              <button className='btn btn-secondary' onClick={userLogout}>
                Logout
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
