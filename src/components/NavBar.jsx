function NavBar({ currentPage, makePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nave-item">
                <a href="#about"
                    onClick={() => makePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>

            </li>
            <li className="nave-item">
                <a
                    href="#contact"
                    onClick={() => makePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact

                </a>
            </li>
        </ul>
    );
}

export default NavBar;