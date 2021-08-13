export const Types = {
  GET_TRANSACTION_REQUEST: 'GET_TRANSACTION_REQUEST',
  GET_TRANSACTION_SUCCESS: 'GET_TRANSACTION_SUCCESS',
  GET_TRANSACTION_FAILURE: 'GET_TRANSACTION_FAILURE',

  SEARCH_TRANSACTION: 'SEARCH_TRANSACTION',
  SORT_TRANSACTION: 'SORT_TRANSACTION',
};

export const TransactionActions = {
  // TRANSACTION LIST
  getTransaction: data => ({
    type: Types.GET_TRANSACTION_REQUEST,
    payload: data,
  }),
  getTransactionSuccess: data => ({
    type: Types.GET_TRANSACTION_SUCCESS,
    payload: data,
  }),
  getTransactionFailure: error => ({
    type: Types.GET_TRANSACTION_FAILURE,
    error,
  }),

  searchTransaction: data => ({
    type: Types.SEARCH_TRANSACTION,
    payload: data,
  }),
  sortTransaction: data => ({
    type: Types.SORT_TRANSACTION,
    payload: data,
  }),
};
