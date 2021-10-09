import {request} from '../../helpers/request';

export const splashToggleFunc = () => dispatch => {
  dispatch({
    type: 'SPLASH_TOGGLE_DEFAULT',
  });
};

export const splashToggleDefault = () => dispatch => {
  dispatch({
    type: 'SPLASH_TOGGLE',
  });
};
