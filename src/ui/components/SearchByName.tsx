import React from 'react';
import {Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {searchAction} from '../../redux/Filter/FilterAction';
import {RootState} from '../../redux/reducer';

/*/ -----

const mapDispatchToProps = {
  searchAction,
};

const mapStateToProps = (state: RootState) => {
  return {value: state.filter.keyword};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// -----

type Props = ConnectedProps<typeof connector>;

// ----- /*/

const SearchByName = () => {
  const keyword = useSelector((state: RootState) => state.filter.keyword);
  const dispatch = useDispatch();

  return (
    <>
      <Input
        placeholder=" Rechercher"
        leftIcon={{type: 'font-awesome', name: 'search'}}
        //        onChangeText={(value) => props.searchAction(value)}
        onChangeText={(value) => dispatch(searchAction(value))}
        //        value={props.value}
        value={keyword}
      />
    </>
  );
};

export default SearchByName;
