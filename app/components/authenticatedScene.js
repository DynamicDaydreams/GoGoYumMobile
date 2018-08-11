import React, { Component } from 'react';
import { AuthenticationManager } from '../managers';
import { AuthService } from '../services';
import { NavigationActions } from 'react-native';


class AuthenticatedScene extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        let token = await AuthenticationManager.GetToken();
        let loginRedirect = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login' })
            ]
        });

        try {
            let validationResults = await AuthService.Validate();
            if (!validationResults.tokenValid) {
                if (this.props.navigation) {
                    this.props.navigation.dispatch(loginRedirect);
                }
            }
        } catch (error) {
            if (this.props.navigation) {
                this.props.navigation.dispatch(loginRedirect);
            }
        }

    }
}

export default AuthenticatedScene;