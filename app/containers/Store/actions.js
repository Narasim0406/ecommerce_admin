/*
 *
 * Account actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  ACCOUNT_CHANGE,
  FETCH_PROFILE,
  CLEAR_ACCOUNT,
  SET_PROFILE_LOADING
} from './constants';
import handleError from '../../utils/error';

export const storeChange = (name, value) => {
  let formData = {};
  formData[name] = value;
  console.log('team -> ', name, value)
  return {
    type: ACCOUNT_CHANGE,
    payload: formData
  };
};

export const clearStore = () => {
  return {
    type: CLEAR_ACCOUNT
  };
};

export const setStoreLoading = value => {
  return {
    type: SET_PROFILE_LOADING,
    payload: value
  };
};

export const fetchStore = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStoreLoading(true));
      const response = await axios.get(`/api/merchant/`);

      dispatch({ type: FETCH_PROFILE, payload: response.data.store });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setStoreLoading(false));
    }
  };
};

export const updateStore = () => {
  return async (dispatch, getState) => {
    const store = getState().store.store;
    const user = getState().account.user;
    console.log("==== getstate", user)
    const payload = {
      name: store.name,
      email: store.email,
      phoneNumber: store.phoneNumber,
      brandName: store.brandName,
      business: store.business,
      isActive: true,
      brand: "63f5a089b5fdeac44aa0688a",
      category: "63f7106248907e2a9773ae45",
      website: store.website,
      description: store.description,
      address: store.address,
      deliveryCharge: store.deliveryCharge,
      minAmountdeliveryCharge: store.minAmountdeliveryCharge,
      bank: {
        accountNo: store.bankAccountNo,
        ifsc: store.bankIfscNo,
        bankName: store.bankName,
        branch: store.bankBranch,
      },
      pan: {
        panNo: store.panNo,
        panImage: store.panImage
      },
      gst: {
        gstNo: store.gstNo,
        gstImage: store.gstImage
      },
      license: {
        licenseNo: store.licenseNo,
        licenseImage: store.licenseImage
      }
    }

    try {
      const response = await axios.put(`/api/merchant/${user.merchant._id}`, {
        payload
      });

      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      dispatch({ type: FETCH_PROFILE, payload: response.data.store });

      dispatch(success(successfulOptions));
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
