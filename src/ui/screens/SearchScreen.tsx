import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducer';
import BikeDTO from '../../dto/BikeDTO';
import Item from '../components/Item';
import SearchByName from '../components/SearchByName';
import SearchByCheckBox from '../components/SearchByCheckBox';
import EStyleSheet from 'react-native-extended-stylesheet';

// ----

const renderItem = ({item}: {item: BikeDTO}) => {
  return <Item bike={item} />;
};

const keyExtractor = (item: BikeDTO, index: number) => {
  return `${index}`;
};

const bikeSelector = (state: RootState): BikeDTO[] => {
  return state.bikes.filter((bike: BikeDTO) => {
    const keywordFilter = bike.name
      .toLowerCase()
      .includes(state.filter.keyword.toLowerCase());
    const bankingFilter = state.filter.banking ? bike.banking : true;
    const openFilter = state.filter.open ? bike.status === 'OPEN' : true;
    return keywordFilter && bankingFilter && openFilter;
  });
};

// ----

const SearchScreen = () => {
  const bikes = useSelector(bikeSelector);

  return (
    <View style={styles.container}>
      <SearchByName />
      <SearchByCheckBox />
      <FlatList
        data={bikes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SearchScreen;
