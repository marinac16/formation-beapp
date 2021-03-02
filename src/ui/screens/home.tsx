import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {getBikes} from '../../redux/Bike/bikeAction';
import {RootState} from '../../redux/reducer';
import BikeDTO from '../../dto/BikeDTO';

const mapDispatchToProps = {
  getBikes,
};

const mapStateToProps = (state: RootState) => {
  return {bikes: state.bikes};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

type ItemProps = {
  bike: BikeDTO;
};

const Item = ({bike}: ItemProps) => (
  <View>
    <Text>{bike.name}</Text>
  </View>
);

const renderItem = ({item}: {item: BikeDTO}) => {
  return <Item bike={item} />;
};

const keyExtractor = (item: BikeDTO, index: number) => {
  return `${index}`;
};

const HomeScreen = (props: Props) => {
  useEffect(() => {
    props.getBikes().catch(console.log);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.bikes}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default connector(HomeScreen);
