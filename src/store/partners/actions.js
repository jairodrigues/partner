import PartnerService from '../../services/PartnerService';
import * as types from './action-types';

export const requestPartner = () => ({
  type: types.PARTNER_REQUEST,
  payload: {},
});

export const rejectPartner = error => ({
  type: types.PARTNER_REJECT,
  payload: error,
  error: true,
});

export const fulfillPartner = data => ({
  type: types.PARTNER_FULFILL,
  payload: data,
});

export const registerPartner = data => async dispatch => {
  try {
    dispatch(requestPartner());
    const response = await PartnerService.registerPartner(data);
    return dispatch(fulfillPartner(response));
  } catch (error) {
    return dispatch(rejectPartner(error));
  }
};
