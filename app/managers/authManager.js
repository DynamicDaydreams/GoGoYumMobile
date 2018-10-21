import { AsyncStorage } from 'react-native';
import Config from '../config';
import { NavigationActions, StackActions } from 'react-navigation';

const AuthManager = {
    GetToken: async () => {
        try {
            return await AsyncStorage.getItem(Config().localStorageKeys.token);
        } catch (error) {
            return null;
        }
    },
    GetRemoteToken: async () => {
        return Config().api.remoteBearer;
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
    },
    SignOut: async (navigation) => {
        try {
            await AsyncStorage.removeItem(Config().localStorageKeys.token);
            let loginRedirect = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Login' })
                ]
            });
            navigation.dispatch(loginRedirect);
        } catch (error) {
            navigation.dispatch(loginRedirect);
        }
    }
}

export default AuthManager;