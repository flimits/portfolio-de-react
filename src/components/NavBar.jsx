import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const currentPage = useLocation().pathname;

    const navbarStyle = {
        backgroundColor: 'teal',
        padding: '10px',
        margin: '5px',
        maxWidth: '100%',
    };

    const linkStyle = {
        color: 'darkblue',
    }
    const activeLinkStyle = {
        color: 'navy',
    }

    const nameStyle = {
        fontFamily: 'cursive',
        fontSize: '2em',
    }

    return (
        <div className="container" style={navbarStyle}>
            <div className="row ">
                <div className="col-md-6">
                    <h1 style={nameStyle}>Jason Savoie</h1>
                </div>
                <div className="col-md-6">
                    <ul className="nav nav-tabs justify-content-end">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                                style={(currentPage === '/') ? activeLinkStyle : linkStyle}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Portfolio"
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                                style={(currentPage === '/') ? activeLinkStyle : linkStyle}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Contact"
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                                style={(currentPage === '/') ? activeLinkStyle : linkStyle}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Resume"
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                                style={(currentPage === '/') ? activeLinkStyle : linkStyle}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
