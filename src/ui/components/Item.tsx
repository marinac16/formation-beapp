import BikeDTO from '../../dto/BikeDTO';
import {Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

type ItemProps = {
  bike: BikeDTO;
};

const Item = ({bike}: ItemProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        title={bike.name.substr(4, 2)}
        containerStyle={{
          backgroundColor: '#1877' + bike.number,
          marginLeft: 20,
          marginTop: 15,
        }}
      />
      <Text
        onPress={() => {
          navigation.navigate('DetailsScreen', {bike});
        }}
        style={styles.text}>
        {bike.name.substr(4, bike.name.length - 4)}
      </Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    paddingTop: 23,
    paddingLeft: 20,
  },
});

export default Item;
