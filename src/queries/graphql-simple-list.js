import gql from 'graphql-tag';
import client from '../helpers/apollo';

const SimpleList = client.query({
  query: gql`
    {
      coffee {
        beans {
          key
          name
          price
          blend
          productImage
        }
      }
    }
  `,
});

export default SimpleList;
