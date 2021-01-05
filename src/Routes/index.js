import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Equipments from '../Pages/Equipments';
import EquipmentCatalogue from '../Pages/EquipmentCatalogue';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/equipments' component={Equipments} />
                <Route path='/equipments/:slug' component={EquipmentCatalogue} />
            </Switch>
        </Router>
    )
}

export default Routes;