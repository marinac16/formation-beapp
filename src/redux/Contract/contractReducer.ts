import {AnyAction} from 'redux';
import {AxiosResponse} from 'axios';
import {ContractActionEnum} from './contractAction';
import ContractDTO from '../../dto/ContractDTO';

export type ContractState = ContractDTO[];

const initialState: ContractState = [];

const ContractReducer = (
  state = initialState,
  action: AnyAction,
): ContractState => {
  switch (action.type) {
    case ContractActionEnum.API_GET_CONTRACT + '_SUCCESS':
      const response = action.payload as AxiosResponse<ContractState>;
      return response.data;
  }

  return state;
};

export default ContractReducer;
