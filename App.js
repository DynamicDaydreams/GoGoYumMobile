import { createStackNavigator } from 'react-navigation';
import { LoginScene, LandingScene } from './app/scenes';

const goGoYum = createStackNavigator({
    Landing: {
        screen: LandingScene,
        navigationOptions: ({ navigation }) => ({
            header: null,
            headerBackTitle: null
        })
    },
    Login: {
        screen: LoginScene,
        navigationOptions: ({ navigation }) => ({
            header: null,
            headerBackTitle: null
        })
    }
});

export default goGoYum;