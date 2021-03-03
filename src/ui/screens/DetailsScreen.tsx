import React from 'react';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'DetailsScreen'>;

const DetailsScreen = (props: Props) => {
  const {bike} = props.route.params;
  console.log(bike);

  return (
    <>
      <Text>Détails</Text>
      <Text>{bike.number}</Text>
      <Text>{bike.name}</Text>
      <Text>{bike.address}</Text>
      <Text>{bike.contractName}</Text>
      <Text>{bike.status}</Text>
      <Text>{bike.position.latitude}</Text>
      <Text>{bike.position.longitude}</Text>
    </>
  );
};

export default DetailsScreen;
