import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {RootState} from '../../redux/reducer';
import {useSelector} from 'react-redux';

const MapScreen = () => {
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
      {bikes.map((marker, index) => {
        return (
          <Marker
            coordinate={{
              latitude: marker.position.latitude,
              longitude: marker.position.longitude,
            }}
            key={index}
            title={marker.name}
            description={marker.address}
            //pinColor="red"
          />
        );
      })}
    </MapView>
  );
};

export default MapScreen;
