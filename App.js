import { createStackNavigator } from 'react-navigation';
import { LoginScene, DashboardScene, CreateAccountScene, OnboardingScene, CatalogScene } from './app/scenes';


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
    },
    Onboarding: {
        screen: OnboardingScene,
        navigationOptions: () => ({
            header: null
        }),
    },
    Catalog: {
        screen: CatalogScene,
        navigationOptions: () => ({
            header: null
        })
    }
})
export default goGoYum;