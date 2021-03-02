import {createStore, applyMiddleware} from 'redux';
import {mainReducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IClientsList, multiClientMiddleware} from 'redux-axios-middleware';
import APIClient from '../core/api';

const clients: IClientsList = {
  default: {
    client: APIClient,
  },
};

export default createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(
      multiClientMiddleware(clients, {returnRejectedPromiseOnError: true}),
    ),
  ),
);
