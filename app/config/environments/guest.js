import { Platform } from 'react-native';

const Environment = {
    api: {
        remoteBearer: 'ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUpqYkdsbGJuUWlMQ0poZFdRaU9pSm5iMmR2ZVhWdExXRndhU0o5Lk5WWGstMW41TEZtVUJjVFhnTGYyT3RFZ2dmcmZGdW1ZRVUwWVBHeV8tSGs=',
        baseUrl: `http://${url.parse(Expo.Constants.linkingUri).hostname}:5000/api/v1/`
    },
    localStorageKeys: {
        token: 'GOGOYUM::AUTH_TOKEN'
    }
}

export default Environment