
import React from 'react';
import { connect } from 'react-redux';

import RestaurantTableActions from '../RestaurantsTable/actions';

class FetchNewDataButton extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.fetchAllRowsEventHandler()}>Fetch new data</button>
        );
    }
}

const mapStateToProps = (_state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllRowsEventHandler: () => {
            dispatch(RestaurantTableActions.fetchDataAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchNewDataButton);
