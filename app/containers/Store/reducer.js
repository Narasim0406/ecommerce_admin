/*
 *
 * store reducer
 *
 */

import {
  ACCOUNT_CHANGE,
  FETCH_PROFILE,
  CLEAR_ACCOUNT,
  SET_PROFILE_LOADING
} from './constants';

const initialState = {
  store: {
    name: '',
    email: '',
    phoneNumber: '',
    brandName: '',
    business: '',
    isActive: true,
    brand: '',
    category: '',
    website: '',
    description: '',
    address: '',
    deliveryCharge: '',
    minAmountdeliveryCharge: '',
    bankAccountNo: "",
    bankIfscNo: "",
    bankName: "",
    bankBranch: "",
    panNo: '',
    panImage: '',
    gstNo: '',
    gstImage: '',
    licenseNo: '',
    licenseImage: '',
    status: '',
    supportContact: ''
  },
  isLoading: false
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_CHANGE:
      return {
        ...state,
        store: {
          ...state.store,
          ...action.payload
        }
      };
    case FETCH_PROFILE:
      return {
        ...state,
        store: {
          ...state.store,
          ...action.payload
        }
      };
    case CLEAR_ACCOUNT:
      return {
        ...state,
        store: {
          firstName: '',
          lastName: ''
        }
      };
    case SET_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default storeReducer;
