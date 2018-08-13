import { Platform } from 'react-native';
import Expo from 'expo';

const Environment = {
    api: Expo.Constants.isDevice ? {
        baseUrl: "http://localhost:5000/api/"
    } : {
            ...Platform.select({
                ios: {
                    baseUrl: "http://localhost:5000/api/"
                },
                android: {
                    baseUrl: "http://10.0.2.2:5000/api/"
                }
            })
        },
    localStorageKeys: {
        token: 'GOGOYUM::AUTH_TOKEN'
    }
}

export default Environment