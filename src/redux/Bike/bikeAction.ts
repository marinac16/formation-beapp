import {AnyAction} from 'redux';
import {APIEndpoints, APIKey} from '../../core/api';

export enum BikeActionEnum {
  API_GET_BIKE = 'API_GET_BIKE',
}

export const getBikes = (contract: string = 'nantes'): AnyAction => {
  return {
    type: BikeActionEnum.API_GET_BIKE,
    payload: {
      request: {
        url: APIEndpoints.API_STATIONS,
        params: {
          contract: contracts,
          apiKey: APIKey,
        },
      },
    },
  };
};
