
import { all } from 'redux-saga/effects'

import RestaurantsTableSaga from './components/RestaurantsTable/saga'

export default function* Sagas() {
    yield all([
        RestaurantsTableSaga()
    ])
}
