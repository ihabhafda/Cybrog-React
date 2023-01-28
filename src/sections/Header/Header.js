import { link } from 'react-router-dom'

import './Header.css'

// import logo from '../../assets/images/logo.png'

import NavItem, {NavItemDropDown} from '../../component/NavItem/NavItem'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
        <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src="/*{logo}*" salt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto">
                        <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                            {/* <a href="/" className="nav-link">Home</a> tarika li fo2 asra3 */}
                        </NavItem>

                        <NavItem>
                            <a href="/#" className="nav-link">Browse</a>
                        </NavItem>

                        <NavItemDropDown>
                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/#" className="dropdown-item">Fortnite</Link></li>
                                <li><Link to="/#" className="dropdown-item">Call of Duty</Link></li>
                            </ul>
                        </NavItemDropDown>
                        
                        <NavItem>
                            <Link to="/#" className="nav-link">Streams</Link>
                        </NavItem>

                        <NavItem>
                        <Link to="/Profile" className="nav-link">Profile</Link>
                            {/* <a href="/Profile" className="nav-link">Profile</a> */}
                        </NavItem>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header