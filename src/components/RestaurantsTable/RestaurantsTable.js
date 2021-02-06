
import React from 'react';
import { connect } from 'react-redux';

import RestaurantsTableActions from './actions';
import './RestaurantsTable.css'

class RestaurantsTable extends React.Component {
    render() {
        return (
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Phone</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {!this.props.fetched_results && this.props.fetchAllRowsEventHandler()}
                    {this.props.search_restaurant_name == "" ? getAllRows(this.props.restaurants) : getAllRows(this.props.restaurants_to_display)}
                </tbody>
            </table>
        );
    }
}

const getRowData = (restaurant) => {
    return <tr key={restaurant["location"]}>
        <td>{restaurant["name"]}</td>
        <td>{restaurant["type"]}</td>
        <td>{restaurant["phone"]}</td>
        <td>{restaurant["location"]}</td>
    </tr>
}

const getAllRows = (restaurants) => {
    let dataToReturn = []
    restaurants.forEach(restaurant => {
        dataToReturn.push(getRowData(restaurant))
    });
    return dataToReturn;
}

const mapStateToProps = (state) => {
    return {
        fetched_results: state['restaurantsTable'].get('fetched_results'),
        restaurants: state['restaurantsTable'].get('restaurants'),
        restaurants_to_display: state['restaurantsTable'].get('restaurants_to_display'),
        search_restaurant_name: state['restaurantsTable'].get('search_restaurant_name')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllRowsEventHandler: () => {
            dispatch(RestaurantsTableActions.fetchDataAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsTable);
