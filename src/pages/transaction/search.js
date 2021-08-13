import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import ModalSort from '../../components/modalSort';
import {TransactionActions} from '../../redux/action';
import {COLORS} from '../../utils';
import {strings} from '../../utils/localization';

const SearchInput = () => {
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState(strings.sort);
  const [showFilter, setShowFilter] = React.useState(false);

  const dispatch = useDispatch();
  const actions = bindActionCreators(TransactionActions, dispatch);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.col}>
        <Icon name="search-outline" size={24} color={COLORS.LIGHT_GREY} />
      </View>
      <TextInput
        value={search}
        onChangeText={value => {
          actions.searchTransaction(value);
          setSearch(value);
        }}
        style={styles.input}
        placeholder={strings.search}
      />
      <TouchableWithoutFeedback onPress={() => setShowFilter(true)}>
        <View style={[styles.col, {width: '35%'}]}>
          <Text style={styles.sort}>
            {sort} <Icon name="chevron-down" size={18} color={COLORS.ORANGE} />
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <ModalSort
        visible={showFilter}
        value={sort}
        onRequestClose={value => {
          actions.sortTransaction(value);
          setSort(value);
          setShowFilter(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: COLORS.WHITE,
    color: COLORS.GREY,
    flexDirection: 'row',
  },
  input: {
    width: '60%',
    color: COLORS.BLACK,
  },
  col: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  sort: {
    color: COLORS.ORANGE,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SearchInput;
