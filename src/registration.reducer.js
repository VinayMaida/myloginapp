import userConstants from './user.constants.js';

function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      return { SIGNUPing: true };
    case userConstants.SIGNUP_SUCCESS:
      return {};
    case userConstants.SIGNUP_FAILURE:
      return {};
    default:
      return state
  }
}
export default registration;