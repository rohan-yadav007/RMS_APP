import React, { useState, useCallback } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from 'react-router-dom';

export const LocationSelect = ({ data = {},setLocation,location }) => {
    const history = useHistory();
    const storedLocation = localStorage.getItem('location');
    const [menuDisplay, setMenuDisplay] = useState(false);
    
    const handleClick = useCallback((location, branch, equipmentArray) => {
        setLocation(branch);
        localStorage.setItem('location',branch);
        history.push({ pathname: `/equipments`, search: `?location=${location}&branch=${branch}`, state: { equipmentArray: equipmentArray } })
    }, [history,setLocation]);

    const handleRemoveLocation = () => {
        localStorage.removeItem('location');
        history.push('/')
    }
    return (
        <div className='locationContainer'>
            <div className='locationBtn' onClick={() => setMenuDisplay(!menuDisplay)}>
                <div>{location} <LocationOnIcon /></div>
            </div>
            <ul>
                {storedLocation && <li key={0} onClick={handleRemoveLocation}>Remove Location</li>}
                {data?.locations?.map((option, index) => (
                    <li key={index+1} value={option.name} onClick={() => { }}>
                        {option.name}
                        <ChevronRightIcon />
                        <ul>
                            {option?.branches.map((subCategory, i) => (
                                <li key={i} onClick={() => handleClick(option.name, subCategory.name, subCategory.categories)}>
                                    {subCategory.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>

    )
}