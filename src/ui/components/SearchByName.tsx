import React from 'react';
import {Input} from 'react-native-elements';

const SearchByName = (props) => {
  return (
    <>
      <Input
        placeholder=" Rechercher"
        leftIcon={{type: 'font-awesome', name: 'search'}}
        onChangeText={(value) => props.setValue(value)}
        value={props.value}
      />
    </>
  );
};

export default SearchByName;
