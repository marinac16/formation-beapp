import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import { connect, ConnectedProps, useSelector } from "react-redux";
import {getBikes} from '../../redux/Bike/bikeAction';
import {RootState} from '../../redux/reducer';
import BikeDTO from '../../dto/BikeDTO';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Item from '../components/Item';
import EStyleSheet from 'react-native-extended-stylesheet';

type StackProps = StackScreenProps<RootStackParamList, 'ListScreen'>;

// ---

const mapDispatchToProps = {
  getBikes,
};

const mapStateToProps = (state: RootState) => {
  return {bikes: state.bikes};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// ----

const renderItem = ({item}: {item: BikeDTO}) => {
  return <Item bike={item} />;
};

const keyExtractor = (item: BikeDTO, index: number) => {
  return `${index}`;
};

// ----

type Props = ConnectedProps<typeof connector> & StackProps;

const ListScreen = (props: Props) => {
  /*const contracts = useSelector((state: RootState) => state.contract);
  console.log(
    contracts.map((c) => {
      c.name;
    }),
  );*/

  useEffect(() => {
    props.getBikes().catch(console.log);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.bikes}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

const styles = EStyleSheet.create({
  //$textColor: 'red',
  container: {
    backgroundColor: 'white',
  },
});

export default connector(ListScreen);
