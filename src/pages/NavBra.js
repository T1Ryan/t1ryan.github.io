import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav className="topnav">
                <div className="nav-left">
                    <Link to="/" className="site-title">T1R</Link>
                </div>
                <div className="nav-right">
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default Layout;