import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {getContracts} from '../../redux/Contract/contractAction';
import {RootState} from '../../redux/reducer';
import {connect, ConnectedProps} from 'react-redux';
import BikeDTO from '../../dto/BikeDTO';
import ContractDTO from '../../dto/ContractDTO';

type StackProps = StackScreenProps<RootStackParamList, 'ContractScreen'>;

// ---

const mapDispatchToProps = {
  getContracts,
};

const mapStateToProps = (state: RootState) => {
  return {contracts: state.contracts};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// ----

const renderItem = ({item}: {item: ContractDTO}) => {
  return <Text>{item.name}</Text>;
};

const keyExtractor = (item: BikeDTO, index: number) => {
  return `${index}`;
};

// ----

type Props = ConnectedProps<typeof connector> & StackProps;

const ContractScreen = (props: Props) => {
  return (
    <>
      <SafeAreaView>
        <Text>Liste des Contrats</Text>
        <FlatList
          data={props.contract}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default connector(ContractScreen);
