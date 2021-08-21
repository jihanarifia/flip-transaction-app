export const Types = {
  GET_TRANSACTION_REQUEST: 'GET_TRANSACTION_REQUEST',
  GET_TRANSACTION_SUCCESS: 'GET_TRANSACTION_SUCCESS',
  GET_TRANSACTION_FAILURE: 'GET_TRANSACTION_FAILURE',

  SEARCH_TRANSACTION: 'SEARCH_TRANSACTION',
  SORT_TRANSACTION: 'SORT_TRANSACTION',
};

export const TransactionActions = {
  // TRANSACTION LIST
  getTransaction: (data: any) => ({
    type: Types.GET_TRANSACTION_REQUEST,
    payload: data,
  }),
  getTransactionSuccess: (data: any) => ({
    type: Types.GET_TRANSACTION_SUCCESS,
    payload: data,
  }),
  getTransactionFailure: (error: any) => ({
    type: Types.GET_TRANSACTION_FAILURE,
    error,
  }),

  searchTransaction: (data: any) => ({
    type: Types.SEARCH_TRANSACTION,
    payload: data,
  }),
  sortTransaction: (data: any) => ({
    type: Types.SORT_TRANSACTION,
    payload: data,
  }),
};
