import React , {useState} from 'react';
import '../../styles/navbar.style.css';
import { WebsiteLogo } from './components/websiteLogo';
import { LocationSelect } from './components/Select';
import {data} from '../../Data/productSampleData';

const NavBar = () => {
    const locationString = localStorage.getItem('location');
    const [location,setLocation] = useState(locationString || 'Select Location');
    return (
        <>
            <nav className='navbar'>
                <WebsiteLogo />
                <LocationSelect data={data} location={location} setLocation={setLocation}/>
            </nav>
        </>
    )
}

export default NavBar;