import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {getBikes} from '../../redux/Bike/bikeAction';
import {RootState} from '../../redux/reducer';
import BikeDTO from '../../dto/BikeDTO';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Item from '../components/Item';

type StackProps = StackScreenProps<RootStackParamList, 'TabBar'>;

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

const styles = StyleSheet.create({
  container: {},
});

export default connector(ListScreen);
