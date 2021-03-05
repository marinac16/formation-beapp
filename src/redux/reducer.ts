import {combineReducers} from 'redux';
import BikeReducer from './Bike/bikeReducer';
import FilterReducer from './Filter/FilterReducer';

export const mainReducer = combineReducers({
  bikes: BikeReducer,
  filter: FilterReducer,
});

export type RootState = ReturnType<typeof mainReducer>;
