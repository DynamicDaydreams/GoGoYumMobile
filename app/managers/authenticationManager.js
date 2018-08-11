import { AsyncStorage } from 'react-native'
import Config from '../config';

const AuthenticationManager = {
    GetToken = async () => {
        return await AsyncStorage.getItem(Config.localStorageKeys.token);
    },
    SetToken = async (token) => {
        await AsyncStorage.setItem(Config.localStorageKeys.token, token);
    },
    ClearToken = async () => {
        await AsyncStorage.removeItem(Config.localStorageKeys.token);
    }
}

export default AuthenticationManager;