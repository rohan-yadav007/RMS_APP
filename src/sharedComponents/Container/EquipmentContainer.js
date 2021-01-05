import React , {useCallback} from 'react';
import './container.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useHistory } from 'react-router-dom';

export const EquipmentContainer = ({equipmentName,imageName,subCategory}) => {
    console.log(imageName)
    const history = useHistory();
    const handleClick = useCallback(() => {
        history.push(
            {
                pathname:`/equipments/${equipmentName}`, 
                state:{equipmentArray:subCategory}
            }
        )
    },[equipmentName,subCategory,history])
    return (
        <div className='equipmentContainer'>
            <div className='equipmentImageContainer'>
                <img alt={equipmentName} src={`/Images/${imageName}`} />
            </div>
            <div className='equipmentCatalogBtn' onClick={handleClick}>
                {equipmentName}
                <ArrowRightIcon/>
            </div>
        </div>
    )
}
