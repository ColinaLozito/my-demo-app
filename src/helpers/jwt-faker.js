import conf from '../../conf/conf.json';
import CryptoJS from 'crypto-js';

const header = conf.jwtFaker.header;
const key = conf.jwtFaker.key;

const iDGenerator = () => {
  // Random number from 0 to length
  const randomNumber = length => {
    return Math.floor(Math.random() * length);
  };

  // Generate Pseudo Random String, if safety is important use dedicated crypto/math library for less possible collisions!
  const generateID = length => {
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(randomNumber(possible.length));
    }

    return text;
  };
  return generateID(16);
};

const jwtFaker = user => {
  const base64url = source => {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/[=]+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  };

  const stringifiedHeader = () =>
    CryptoJS.enc.Utf8.parse(JSON.stringify(header));
  const encodedHeader = base64url(stringifiedHeader());

  const userid = iDGenerator();
  const stringifiedData = () => {
    const newData = {
      id: userid,
      user: user,
    };
    const stringifyData = JSON.stringify(newData);
    const parseData = CryptoJS.enc.Utf8.parse(stringifyData);
    const encodedData = base64url(parseData);
    return encodedData;
  };

  let signature = encodedHeader + '.' + stringifiedData(user);
  signature = CryptoJS.HmacSHA256(signature, key);
  signature = base64url(signature);
  const userData = {
    name: user,
    token: signature,
    userId: userid,
  };
  return userData;
};

export default jwtFaker;
