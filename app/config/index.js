import Expo from 'expo';

const Configuration = () => {

    let environment = null;

    if (Expo.Constants.appOwnership === 'expo') {
        environment = require('./environments/expo');
    }
    else if (Expo.Constants.appOwnership === 'guest') {
        environment = require('./environments/guest');
    }
    else {
        environment = require('./environments/standalone');
    }

    return {
        api: {
            baseUrl: environment.api.baseUrl
        },
        localStorageKeys: {
            token: environment.localStorageKeys.token
        }
    }
}
export default Configuration