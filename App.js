import { createStackNavigator } from 'react-navigation';
import { LoginScene, LandingScene } from './app/scenes';

const goGoYum = createStackNavigator({
    Landing: {
        screen: LandingScene,
        navigationOptions: ({ navigation }) => ({
            title: 'GoGoYum!',
            headerBackTitle: null
        })
    },
    Login: {
        screen: LoginScene,
        navigationOptions: ({ navigation }) => ({
            title: 'Log In',
            headerBackTitle: null
        })
    }
});

export default goGoYum;