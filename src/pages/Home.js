import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import TopSection from '../components/LandingPage/TopSection/TopSection';
import MiddleSection from '../components/LandingPage/MiddleSection/MiddleSection';
import { homeObjOne } from '../components/LandingPage/MiddleSection/Data';
import BottomSection from '../components/LandingPage/BottomSection/BottomSection';
import Footer from '../components/Footer/Footer'
const Home = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((isOpen) => !isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
            <Navbar isOpen={isMobileMenuOpen} toggle={toggleMobileMenu}/>
            <TopSection />
            <MiddleSection {...homeObjOne}/>
            <BottomSection />
            <Footer />
        </>
    )
}

export default Home
