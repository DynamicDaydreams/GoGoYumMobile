import Expo from 'expo';

const Configuration = () => {
    let environment = require(`./environments/${Expo.Constants.appOwnership}.js`);

    return {
        api: {
            baseUrl = environment.api.baseUrl
        },
        localStorageKeys: {
            token: environment.localStorageKeys.token
        }
    }
}
export default Configuration