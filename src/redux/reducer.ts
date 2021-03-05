import {combineReducers} from 'redux';
import BikeReducer from './Bike/bikeReducer';
import FilterReducer from './Filter/FilterReducer';
import ContractReducer from './Contract/contractReducer';

export const mainReducer = combineReducers({
  bikes: BikeReducer,
  filter: FilterReducer,
  contracts: ContractReducer,
});

export type RootState = ReturnType<typeof mainReducer>;
