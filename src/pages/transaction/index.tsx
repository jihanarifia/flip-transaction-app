import * as React from 'react';
import {useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {ErrorPage} from '../../components/errorPage';
import {LoadingFullscreen} from '../../components/loadingFullScreen';
import {TransactionActions} from '../../redux/action';
import {styles} from '../../styles';
import {ROUTE_NAMES} from '../../utils';
import Item from './item';
import SearchInput from './search';

// const Skeleton = () => {
//   return (
//     <View>
//       <Text>Skeleton</Text>
//     </View>
//   );
// };

function TransactionScreen({
  navigation,
  transactionList,
  loading,
  transactionActions,
  isErrorPage,
}: any) {
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    transactionActions.getTransaction();
  }, [transactionActions]);

  useEffect(() => {
    if (refreshing) {
      transactionActions.getTransaction();
      setRefreshing(false);
    }
  }, [refreshing, transactionActions]);

  const renderItem = ({item, index}: any) => {
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
              <ErrorPage type={'empty'} onPress={() => {}} />
            ) : null
          }
        />
      )}
      {loading && <LoadingFullscreen />}
    </View>
  );
}

const mapStateToProps = (state: {
  transaction: any;
  loading: any;
  transactionListErr: any;
}) => ({
  transactionList: state.transaction,
  loading: state.loading,
  isErrorPage: state.transactionListErr,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    transactionActions: bindActionCreators(TransactionActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen);
