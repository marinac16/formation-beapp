import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {connect, ConnectedProps} from 'react-redux';
import {getBikes} from '../../redux/Bike/bikeAction';
import {RootState} from '../../redux/reducer';

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
      style={{flex: 1}}
      initialRegion={{
        latitude: 47.218371,
        longitude: -1.553621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {props.bikes.map((marker, index) => {
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

export default connector(MapScreen);
