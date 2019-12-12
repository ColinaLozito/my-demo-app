import jwtFaker from '../helpers/jwt-faker';

const jwtFakerRepository = {
  getJWT: user => {
    return jwtFaker(user);
  },
};

export default jwtFakerRepository;
