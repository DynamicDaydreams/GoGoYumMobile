import { AsyncStorage } from 'react-native';
import Config from '../config';

const AuthManager = {
    GetToken: async () => {
        try {
            return await AsyncStorage.getItem(Config().localStorageKeys.token);
        } catch (error) {
            return null;
        }
    },
    SetToken: async (token) => {
        try {
            await AsyncStorage.setItem(Config().localStorageKeys.token, token);
        } catch (error) {
            return null;
        }
    },
    ClearToken: async () => {
        try {
            await AsyncStorage.removeItem(Config().localStorageKeys.token);
        } catch (error) {
            return null;
        }
    }
}

export default AuthManager;