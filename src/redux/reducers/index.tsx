import {HELPER} from '../../utils';
import {strings} from '../../utils/localization';
import {Types} from '../action';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const List = {
  FT35059: {
    id: 'FT35059',
    amount: 2401018,
    unique_code: 434,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '2209712099',
    beneficiary_name: 'Rhiannan Simmons',
    beneficiary_bank: 'bca',
    remark: 'sample remark',
    created_at: '2021-08-09 22:35:04',
    completed_at: '2021-08-09 22:35:04',
    fee: 0,
  },
};

const initialState = {
  loading: true,
  transaction: [],
  transactionTemp: [],
  transactionDetail: {},
  transactionListErr: false,
  transactionDetailErr: false,
  search: '',
  sort: '',
};

const reducer = (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    //TRANSACTION LIST
    case Types.GET_TRANSACTION_REQUEST:
      // let newData = Object.keys(List).map(key => List[key]);
      // return {...state, loading: true, transaction: newData};
      return {...state, loading: true};
    case Types.GET_TRANSACTION_SUCCESS:
      let list = Object.keys(action.payload.data).map(
        key => action.payload.data[key],
      );
      return {
        ...state,
        transaction: list,
        transactionTemp: list,
        loading: false,
        transactionListErr: false,
      };
    case Types.GET_TRANSACTION_FAILURE:
      return {...state, loading: false, transactionListErr: true};
    case Types.SEARCH_TRANSACTION:
      let search = action.payload.toUpperCase();
      let filteredTransaction = state.transactionTemp.filter(
        (x: any) =>
          x.beneficiary_name.toUpperCase().match(search) ||
          x.sender_bank.toUpperCase().match(search) ||
          x.beneficiary_bank.toUpperCase().match(search) ||
          x.amount.toString().match(search),
      );
      return {
        ...state,
        search: action.payload,
        transaction: filteredTransaction,
      };
    case Types.SORT_TRANSACTION:
      let sortedTransaction: any[] = [];
      Object.assign(sortedTransaction, state.transaction);
      if (action.payload === strings.sortNameAZ) {
        sortedTransaction = sortedTransaction.sort(HELPER.sortNameAZ);
      } else if (action.payload === strings.sortNameZA) {
        sortedTransaction = sortedTransaction.sort(HELPER.sortNameZA);
      } else if (action.payload === strings.sortNewDate) {
        sortedTransaction = sortedTransaction.sort(HELPER.sortNewDate);
      } else if (action.payload === strings.sortOldDate) {
        sortedTransaction = sortedTransaction.sort(HELPER.sortOldDate);
      }
      return {
        ...state,
        sort: action.payload,
        transaction: sortedTransaction,
      };

    default:
      return state;
  }
};
export default reducer;
