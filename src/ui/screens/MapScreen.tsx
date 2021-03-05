import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {RootState} from '../../redux/reducer';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import BikeDTO from '../../dto/BikeDTO';

const MapScreen = () => {
  const navigation = useNavigation();
  const bikes = useSelector((state: RootState) => state.bikes);

  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 47.218371,
        longitude: -1.553621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {bikes.map((marker: BikeDTO, index) => {
        return (
          <Marker
            coordinate={{
              latitude: marker.position.latitude,
              longitude: marker.position.longitude,
            }}
            key={index}
            title={marker.name}
            description={marker.address}
            onCalloutPress={() => {
              navigation.navigate('DetailsScreen', {bike: marker});
            }}
          />
        );
      })}
    </MapView>
  );
};

export default MapScreen;
