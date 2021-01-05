import React, { useState, useEffect, useCallback } from 'react';
import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import { EquipmentContainer } from '../../sharedComponents/Container/EquipmentContainer';
import '../../styles/equipments.style.css';
import Breadcrumb from '../../sharedComponents/BreadCrumb';
import { data as sampleData } from '../../Data/productSampleData';

const breadcrumbData = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Equipments',
        path: '/equipments'
    }
];

const EquipmentCatalogue = (props) => {
    const [equipmentsArray, setEquipmentsArray] = useState([]);

    const handleEquipments = useCallback((propState) => {
        if (propState && propState.equipmentArray) {
            setEquipmentsArray(propState.equipmentArray);
        } else {
            const queryString = props.location?.search?.split('?')[1]?.split('&');
            if (queryString) {
                const branch = queryString[1]?.split('=')[1];
                const equipmentArray = sampleData.locations.filter((item) => item.branches === branch);
                setEquipmentsArray(equipmentArray);
            }
        }
    }, [props.location]);

    useEffect(() => handleEquipments(props.location.state), [props.location.state, handleEquipments]);

    return (
        <div className='equipmentsCatalogue'>
            <Navbar />
            <main>
                <div className='breadcrumb'>
                    <Breadcrumb breadCrumbArray={breadcrumbData} />
                </div>

                <div className='container_wrapper'>
                    {equipmentsArray.map((equipmentCatalogue, index) => (
                        <EquipmentContainer
                            key={index}
                            equipmentName={equipmentCatalogue.name}
                            imageName={`subcategory/${equipmentCatalogue.image}`}
                            subCategory={equipmentCatalogue.subcategories}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default EquipmentCatalogue;