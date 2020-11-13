import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import TopSection from '../components/LandingPage/TopSection/TopSection';

const Home = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log(isMobileMenuOpen);
        setIsMobileMenuOpen((isOpen) => !isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
            <Navbar isOpen={isMobileMenuOpen} toggle={toggleMobileMenu}/>
            <TopSection />
        </>
    )
}

export default Home
