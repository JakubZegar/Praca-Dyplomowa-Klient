import React from 'react'
import DashboardContent from '../components/DashboardContent/DashboardContent'
import Footer from '../components/Footer/Footer'
import DashboardNavbar from '../components/Navbar/DashboardNavbar'

function Dashboard() {
    return (
        <>
            <DashboardNavbar />
            <DashboardContent />
            <Footer />
        </>
    )
}

export default Dashboard
