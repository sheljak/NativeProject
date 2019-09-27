import {
  FETCH_AMBASADORS_PENDING,
  FETCH_AMBASADORS_SUCCESS,
  FETCH_AMBASADORS_ERROR,
} from '../constants';

export function fetchAmbasadors() {
  return dispatch => {
    dispatch(getAmbasadors());

    return fetch('https://api-dev.tap.tf/v1/widget/38/users')
      .then(res => res.json())
      .then(json => {
        json.data.users.map(item => {
          item.user_tags.countries.map(country => {
            item.country = country.code;
          });
          return item;
        });
        return dispatch(getAmbasadorsSuccess(json));
      })
      .catch(err => dispatch(getAmbasadorsFailure(err)));
  };
}

function getAmbasadors() {
  return {
    type: FETCH_AMBASADORS_PENDING,
  };
}

function getAmbasadorsSuccess(data) {
  return {
    type: FETCH_AMBASADORS_SUCCESS,
    data,
  };
}

function getAmbasadorsFailure() {
  return {
    type: FETCH_AMBASADORS_ERROR,
  };
}
