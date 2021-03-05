import React from 'react';
import {CheckBox} from 'react-native-elements';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../../redux/reducer';
import {bankingAction} from '../../redux/Filter/FilterAction';
import {openAction} from '../../redux/Filter/FilterAction';

// -----

const mapDispatchToProps = {
  bankingAction,
  openAction,
};

const mapStateToProps = (state: RootState) => {
  return {bankingFilter: state.filter.banking, openFilter: state.filter.open};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// -----

type Props = ConnectedProps<typeof connector> & CheckedProps;

// -----
type CheckedProps = {
  checked: boolean;
};

const SearchByCheckBox = (props: Props) => {
  return (
    <View style={styles.container}>
      <CheckBox
        center
        title="Open"
        checked={props.openFilter}
        onPress={() => {
          props.openAction(!props.openFilter);
        }}
      />
      <CheckBox center title="Bonus" checked={props.checked} />
      <CheckBox
        center
        title="Banking"
        checked={props.bankingFilter}
        onPress={() => {
          props.bankingAction(!props.bankingFilter);
        }}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default connector(SearchByCheckBox);
