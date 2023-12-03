import { useState } from 'react';
import NavBar from './NavBar';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Portfolio from '../Pages/Portfolio';


export default function PContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const presentPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }

    };

    const makePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} makePageChange={makePageChange} />
            <main className="mx-3">{presentPage()}</main>
        </div>
    )



}
