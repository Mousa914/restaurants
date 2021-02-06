
import React from 'react';
import RestaurantTableActions from '../RestaurantsTable/actions';
import { connect } from 'react-redux';

class SearchBox extends React.Component {
    render() {
        return (
            <input type="text" id="rsearch" autoComplete="off" placeholder="Search..." onChange={this.props.updateSearchBoxEventHandler}/>
        );
    }
}

const mapStateToProps = (_state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchBoxEventHandler: (event) => {
            dispatch(RestaurantTableActions.updateDataDisplayAction(event.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
