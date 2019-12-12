import SimpleList from '../queries/graphql-simple-list';

const GraphqlRepository = {
  simpleList: () => {
    return new Promise((resolve, reject) => {
      SimpleList.then(response => {
        resolve(response);
      }).catch(e => {
        reject(e);
      });
    });
  },
};

export default GraphqlRepository;
