import { Outlet } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer4';



function App() {
    return (
        <>
            <NavBar />
            <main className="mx-3" style={{ paddingBottom: '60px' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}


export default App;
