import { createStackNavigator } from 'react-navigation';
import { LoginScene, DashboardScene, CreateAccountScene } from './app/scenes';


const goGoYum = createStackNavigator({
    Dashboard: {
        screen: DashboardScene,
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