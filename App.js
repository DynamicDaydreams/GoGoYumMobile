import { createStackNavigator } from 'react-navigation';
import { LoginScene, LandingScene, CreateAccountScene } from './app/scenes';

const goGoYum = createStackNavigator({
    Landing: {
        screen: LandingScene,
        navigationOptions: () => ({
            header: null
        })
    },
    Login: {
        screen: LoginScene,
        navigationOptions: () => ({
            header: null
        })
    },
    CreateAccount: {
        screen: CreateAccountScene,
        navigationOptions: () => ({
            header: null
        })
    }
});

export default goGoYum;