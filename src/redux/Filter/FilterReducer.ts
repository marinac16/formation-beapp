import {AnyAction} from 'redux';
import {FilterActionEnum} from './FilterAction';

export type FilterState = {
  keyword: string;
  open: boolean;
  banking: boolean;
  bonus: boolean;
};

const initialState: FilterState = {
  keyword: '',
  open: false,
  banking: false,
  bonus: false,
};

const FilterReducer = (
  state = initialState,
  action: AnyAction,
): FilterState => {
  switch (action.type) {
    case FilterActionEnum.SEARCH_ACTION: {
      return {...state, keyword: action.payload.keyword};
    }
    case FilterActionEnum.BANKING_ACTION: {
      return {...state, banking: action.payload.banking};
    }
    case FilterActionEnum.OPEN_ACTION: {
      return {...state, open: action.payload.open};
    }
  }

  return state;
};

export default FilterReducer;
