import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Card, Icon} from 'react-native-elements';

type Props = StackScreenProps<RootStackParamList, 'DetailsScreen'>;

const DetailsScreen = (props: Props) => {
  const {bike} = props.route.params;
  const statusBike: string = bike.status;
  const bikeAvailable: number = bike.totalStands.availabilities.bikes;
  const standAvailable: number = bike.totalStands.availabilities.stands;
  const standCapacity: number = bike.totalStands.capacity;

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.containerTitle}>
          <Icon name="bicycle" type="font-awesome" color="grey" />
          <Card.Title style={styles.title}>
            {bike.name.substr(4, bike.name.length - 4)}
          </Card.Title>
          {statusBike === 'OPEN' ? (
            <Icon name="check-circle" type="font-awesome" color="green" />
          ) : (
            <Icon name="times-circle" type="font-awesome" color="red" />
          )}
        </View>
        <Card.Divider />
        <Card.FeaturedTitle>
          <Text style={styles.featuredTitle}>{bike.address}</Text>
        </Card.FeaturedTitle>
        <Card.FeaturedSubtitle style={styles.featuredSubtitle}>
          <Text>{`Latitude : ${bike.position.latitude}\n`}</Text>
          <Text>{`Longitude : ${bike.position.longitude}`}</Text>
        </Card.FeaturedSubtitle>
        <Card.Divider />
        <Card.FeaturedSubtitle style={styles.featuredSubtitle}>
          <Text>
            Bicloo disponible : {bikeAvailable} sur {standCapacity}
            {'\n'}
            Il reste {standAvailable} emplacement
            {(standAvailable > 0 && 's') || ''} disponible
            {(standAvailable > 0 && 's') || ''}
          </Text>
        </Card.FeaturedSubtitle>
      </Card>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    flexDirection: 'row',
  },
  featuredTitle: {
    color: 'green',
    fontSize: 15,
    textAlign: 'center',
  },
  featuredSubtitle: {
    color: 'grey',
    textAlign: 'center',
  },
});

export default DetailsScreen;
