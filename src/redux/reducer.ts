import {combineReducers} from 'redux';
import BikeReducer from './Bike/bikeReducer';

export const mainReducer = combineReducers({
  bikes: BikeReducer,
});

export type RootState = ReturnType<typeof mainReducer>;
