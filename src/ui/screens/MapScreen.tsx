import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {connect, ConnectedProps} from 'react-redux';
import {getBikes} from '../../redux/Bike/bikeAction';
import {RootState} from '../../redux/reducer';
import {Text, View} from 'react-native';

// ---

const mapDispatchToProps = {
  getBikes,
};

const mapStateToProps = (state: RootState) => {
  return {bikes: state.bikes};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// ----
type Props = ConnectedProps<typeof connector>;

const MapScreen = (props: Props) => {
  return (
    <MapView
      style={{borderWidth: 2, flex: 1}}
      initialRegion={{
        latitude: 47.218371,
        longitude: -1.553621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {props.bikes.map((marker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.position.latitude,
              longitude: marker.position.longitude,
            }}
            title={marker.name}
            description={marker.address}>
            <View style={{backgroundColor: 'red', padding: 5}}>
              <Text>X</Text>
            </View>
          </Marker>
        );
      })}
    </MapView>
  );
};

export default connector(MapScreen);
