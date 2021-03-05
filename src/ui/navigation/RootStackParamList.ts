import BikeDTO from '../../dto/BikeDTO';

export type RootStackParamList = {
  ContractScreen: undefined;
  ListScreen: undefined;
  DetailsScreen: {bike: BikeDTO};
  MapScreen: undefined;
  SearchScreen: undefined;
};

export default {};
