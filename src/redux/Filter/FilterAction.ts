export enum FilterActionEnum {
  SEARCH_ACTION = 'SEARCH_ACTION',
  BANKING_ACTION = 'BANKING_ACTION',
  OPEN_ACTION = 'OPEN_ACTION',
}

export const searchAction = (keyword: string) => {
  return {
    type: FilterActionEnum.SEARCH_ACTION,
    payload: {
      keyword,
    },
  };
};

export const bankingAction = (banking: boolean) => {
  return {
    type: FilterActionEnum.BANKING_ACTION,
    payload: {
      banking,
    },
  };
};

export const openAction = (open: boolean) => {
  return {
    type: FilterActionEnum.OPEN_ACTION,
    payload: {
      open,
    },
  };
};
