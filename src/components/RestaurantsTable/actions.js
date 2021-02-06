
import { RestaurantsTableActionsConstants } from './constants';

function fetchDataAction() {
  return {
    type: RestaurantsTableActionsConstants.FETCH_DATA,
    uri: 'http://localhost:8000/restaurants'
  }
}

function fetchDataSuccessAction(data) {
  return {
    type: RestaurantsTableActionsConstants.FETCH_DATA_SUCCESS,
    payload: data
  }
}

function updateDataDisplayAction(search_restaurant_name) {
  return {
    type: RestaurantsTableActionsConstants.UPDATE_DATA_DISPLAY,
    payload: search_restaurant_name
  }
}

let RestaurantsTableActions = {
  fetchDataAction,
  fetchDataSuccessAction,
  updateDataDisplayAction
};

export default RestaurantsTableActions;
