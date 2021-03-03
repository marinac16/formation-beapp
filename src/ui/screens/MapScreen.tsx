import React, { useState } from "react";
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

  const bikes = [props.bikes]
  console.log('voici es bikes ' + bikes);

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
        <Marker
          //key={index}
          coordinate={{ latitude : marker.position.latitude , longitude : marker.position.longitude }}
          //title={marker.name}
          //description={marker.address}
        />
      })}
    </MapView>
  );
};

export default connector(MapScreen);
