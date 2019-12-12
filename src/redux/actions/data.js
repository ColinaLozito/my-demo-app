export const receive_data = ({data}) => ({
  type: 'RECEIVE_DATA',
  payload: {
    data,
  },
});
