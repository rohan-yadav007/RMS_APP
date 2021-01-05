import React from 'react';
import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import '../../styles/homepage.style.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useHistory} from 'react-router-dom';

const Homepage = () => {
    const history = useHistory();
    if(localStorage.getItem('location')){
        history.push('/equipments')
    }
    return (
        <div className='homepage'>
            <Navbar />
            <main>
                <div className='introCard'>
                    <h3>Welcome to Rental Management System</h3>
                    <div>Please select Location <LocationOnIcon /></div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Homepage;