import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ErrorPage} from '../../components/errorPage';
import {LoadingFullscreen} from '../../components/loadingFullScreen';
import {TransactionActions} from '../../redux/action';
import {styles} from '../../styles';
import {ROUTE_NAMES} from '../../utils';
import {strings} from '../../utils/localization';
import Item from './item';
import SearchInput from './search';

const Skeleton = () => {
  return (
    <View>
      <Text>Skeleton</Text>
    </View>
  );
};

function TransactionScreen({
  navigation,
  transactionList,
  loading,
  transactionActions,
  isErrorPage,
}) {
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    transactionActions.getTransaction();
  }, []);

  useEffect(() => {
    if (refreshing) {
      transactionActions.getTransaction();
      setRefreshing(false);
    }
  }, [refreshing, transactionActions]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index.toString()}
        onPress={() =>
          navigation.navigate(ROUTE_NAMES.TRANSACTION_DETAIL, {detail: item})
        }>
        <Item data={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containers}>
      <SearchInput />
      {isErrorPage ? (
        <ErrorPage
          onPress={() => {
            setRefreshing(true);
          }}
        />
      ) : (
        <FlatList
          data={transactionList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
          ListFooterComponent={() =>
            !loading && transactionList.length === 0 ? (
              <ErrorPage type={'empty'} />
            ) : null
          }
        />
      )}
      {loading && <LoadingFullscreen />}
    </View>
  );
}

const mapStateToProps = state => ({
  transactionList: state.transaction,
  loading: state.loading,
  isErrorPage: state.transactionListErr,
});

const mapDispatchToProps = dispatch => {
  return {
    transactionActions: bindActionCreators(TransactionActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen);
