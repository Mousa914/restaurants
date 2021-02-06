
import { List } from 'immutable'

import { RestaurantsTableActionsConstants } from './constants'
import initialState from '../../initialState'

const updateRestaurantsToDisplay = (state) => {
    let search_restaurant_name = state.get('search_restaurant_name');
    let lst = state.get('restaurants').filter((restaurant) => restaurant["name"].toLowerCase().includes(search_restaurant_name))
    state = state.set('restaurants_to_display', lst);
    return state;
}

const RestaurantsTableReducer = (state = initialState.restaurantsTable, action) => {
    switch (action.type) {
        case RestaurantsTableActionsConstants.FETCH_DATA_SUCCESS: {
            state = state.set('restaurants', new List(action.payload));
            state = updateRestaurantsToDisplay(state)
            state = state.set('fetched_results', true);
            return state;
        }
        case RestaurantsTableActionsConstants.UPDATE_DATA_DISPLAY: {
            state = state.set('search_restaurant_name', action.payload);
            state = updateRestaurantsToDisplay(state)
            return state;
        }
        default: return state;
    }
};

export default RestaurantsTableReducer;
