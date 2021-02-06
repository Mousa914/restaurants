
import { combineReducers } from 'redux';

import RestaurantsTableReducer from './components/RestaurantsTable/reducer';

export default combineReducers({
    restaurantsTable: RestaurantsTableReducer
});
