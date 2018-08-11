import Expo from 'expo';

const Configuration = () => {

    let Environment = null;

    if (Expo.Constants.appOwnership === 'expo') {
        environment = require('./environments/expo').default;
    }
    else if (Expo.Constants.appOwnership === 'guest') {
        environment = require('./environments/guest').default;
    }
    else {
        environment = require('./environments/standalone').default;
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