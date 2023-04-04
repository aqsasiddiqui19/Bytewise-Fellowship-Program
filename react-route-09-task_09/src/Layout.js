import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <div class="container">
      <nav className="logo-Nav-Bar" 
    >
        <ul>
          <li><Link to="/">Home</Link>
          </li>
         
          <li><Link to="/aboutus">AboutUs</Link>
          </li>

          <li><Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

     <div className="header">
     <h3>Header</h3> 
     </div>

<div className="main-div">
  <div className="sidebar-content"><h3>Sidebar</h3> </div>
  <div className="body-content"><h3>Body</h3></div>
</div>

<div class="footer">
</div>

      <Outlet />
      
    </div>
  )
};



export default Layout;
