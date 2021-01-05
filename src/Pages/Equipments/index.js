import React, { useState, useEffect } from 'react';
import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import { EquipmentContainer } from '../../sharedComponents/Container/EquipmentContainer';
import '../../styles/equipments.style.css';
import Breadcrumb from '../../sharedComponents/BreadCrumb';
import { data } from '../../Data/productSampleData'

const bradCrumbdata = [
    {
        name: 'Home',
        path: '/'
    },
]
const Equipments = (props) => {
    const [equipmentsArray, setEquipmentsArray] = useState([]);
    console.log(props)
    const handleEquipments = (propState) => {
        if (propState && propState.equipmentArray) {
            setEquipmentsArray(propState.equipmentArray);
        } else {
            const locationBranch = localStorage.getItem('location');
            console.log('locationBranch', locationBranch);
            if (locationBranch) {
                const newArr = []
                const handleArr = (arr) => {
                    newArr.push(...arr)
                }
                data.locations.map((location) => handleArr(location.branches));
                const equipmentArray = newArr.filter((location) => location.name === locationBranch);
               console.log(equipmentArray)
                if (equipmentArray[0].categories) {
                    setEquipmentsArray(equipmentArray[0].categories)
                }
            }else{
                alert('please again select location')
            }

        }
    }
    useEffect(() => handleEquipments(props.location.state), [props.location.state])
    return (
        <div className='equipmentsCatalogue'>
            <Navbar />
            <main>
                <div className='breadcrumb'>
                    <Breadcrumb breadCrumbArray={bradCrumbdata} currentPage={''} />
                </div>
                <div className='container_wrapper'>
                    {equipmentsArray.map((equipmentCatalogue, index) => (
                        <EquipmentContainer
                            key={index}
                            equipmentName={equipmentCatalogue.name}
                            imageName={equipmentCatalogue.image}
                            subCategory={equipmentCatalogue.subcategories}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Equipments;