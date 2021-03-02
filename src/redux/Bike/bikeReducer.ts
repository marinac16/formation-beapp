import BikeDTO from '../../dto/BikeDTO';
import {AnyAction} from 'redux';
import {AxiosResponse} from 'axios';
import {BikeActionEnum} from './bikeAction';

export type BikeState = BikeDTO[];

const initialState: BikeState = [];

const BikeReducer = (state = initialState, action: AnyAction): BikeState => {
  switch (action.type) {
    case BikeActionEnum.API_GET_BIKE + '_SUCCESS':
      const response = action.payload as AxiosResponse<BikeState>;
      return response.data;
  }

  return state;
};

export default BikeReducer;
