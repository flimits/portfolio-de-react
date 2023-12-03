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
                    href="#portfolio"
                    onClick={() => makePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio

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
            <li className="nave-item">
                <a
                    href="#resume"
                    onClick={() => makePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume

                </a>
            </li>
        </ul>
    );
}

export default NavBar;