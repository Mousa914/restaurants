
const { List, Map } = require('immutable');

export default {
    restaurantsTable: Map({
        fetched_results: false,
        restaurants: List(),
        restaurants_to_display: List(),
        search_restaurant_name: ""
    })
};
