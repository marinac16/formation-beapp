import BikeDTO from '../../dto/BikeDTO';
import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type ItemProps = {
  bike: BikeDTO;
};

const Item = ({bike}: ItemProps) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('DetailsScreen', {bike});
        }}>
        {bike.name}
      </Text>
    </View>
  );
};

export default Item;
