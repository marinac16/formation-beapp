import React, { useEffect, useState } from "react";
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducer';
import BikeDTO from '../../dto/BikeDTO';
import Item from '../components/Item';
import SearchByName from '../components/SearchByName';

// ----

const renderItem = ({item}: {item: BikeDTO}) => {
  return <Item bike={item} />;
};

const keyExtractor = (item: BikeDTO, index: number) => {
  return `${index}`;
};

// ----

const SearchScreen = () => {
  const bikes = useSelector((state: RootState) => state.bikes);
  const [value, setValue] = useState<string>();
  //const [bikesList, setBikesList] = useState<BikeDTO>(bikes);

  const bikesFiltered = bikes.filter((bike: BikeDTO) =>
    bike.name.toLowerCase().includes(value?.toLowerCase() as string),
  );

  return (
    <View>
      <SearchByName value={value} setValue={setValue} />
      <FlatList
        data={bikesFiltered}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchScreen;
