export const receive_user_information = ({name, token, userId}) => ({
  type: 'RECEIVE_USER_INFORMATION',
  payload: {
    name,
    token,
    userId,
  },
});

export const refresh_user_token = token => {
  return {
    type: 'REFRESH_USER_TOKEN',
    payload: {
      token,
    },
  };
};

export const remove_user_information = () => {
  return {
    type: 'REMOVE_USER_INFORMATION',
  };
};
