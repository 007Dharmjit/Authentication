import { Outlet, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../context/AuthContext.jsx";  // Import the auth context
import {  useNavigate } from "react-router-dom"; 
const Layout = () => {
  const { userData, logout } = useAuth();  //  user data and logout function 
  const navigate = useNavigate();
   const handleLogout   = () => {
    logout(); // Call the logout function to clear user data and token 
    navigate('/'); // Redirect the user to the Home page (root route) 
  };
  return (
    <>
      <div className="bg-zinc-900 w-full text-white h-fit py-3 px-2 mb-5">
        <nav className="flex justify-end">
          <div className="px-5">
            <Link to="/" className="text-xl ml-3 cursor-pointer">
              Home
            </Link>
            {userData ? (
              <>
                <button
                  className="text-xl ml-3 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/Loginform" className="text-xl ml-3 cursor-pointer">
                Login
              </Link>
            )}
          </div> 
          <Link to="/User" className="text-xl ml-3 cursor-pointer">
          <CgProfile size={28} className="cursor-pointer" />
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
