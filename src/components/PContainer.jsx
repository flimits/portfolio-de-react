import {useState} from 'react';
import NavBar from './NavBar';
import Contact from './static/Contact';
import About from './static/About';


export default function PContainer() {
const [currentPage, setCurrentPage] = useState('Home');

const presentPage = () => {
    switch (currentPage) {
        case 'About':
            return <About />;
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
