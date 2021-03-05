import {AnyAction} from 'redux';
import {APIEndpoints, APIKey} from '../../core/api';

export enum ContractActionEnum {
  API_GET_CONTRACT = 'API_GET_CONTRACT',
}

export const getContracts = (): AnyAction => {
  return {
    type: ContractActionEnum.API_GET_CONTRACT,
    payload: {
      request: {
        url: APIEndpoints.API_CONTRACTS,
        params: {
          apiKey: APIKey,
        },
      },
    },
  };
};
