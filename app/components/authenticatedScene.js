import React, { Component } from 'react';
import { AuthManager } from '../managers';
import { AuthService } from '../services';
import { View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

class AuthenticatedScene extends Component {
    authCheck() {
        var self = this;
        let loginRedirect = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login' })
            ]
        });
        AuthManager.GetToken().then(function (token) {
            if (token) {
                new AuthService().Validate().then(function (validationResults) {
                    if (!validationResults.tokenValid) {
                        if (self.props.navigation) {
                            self.props.navigation.dispatch(loginRedirect);
                        }
                    }
                }).catch(function (error) {
                    if (self.props.navigation) {
                        self.props.navigation.dispatch(loginRedirect);
                    }
                });
            }
            else {
                self.props.navigation.dispatch(loginRedirect);
            }
        }).catch(function (error) {
            self.props.navigation.dispatch(loginRedirect);
        });
    }

    render() {
        this.authCheck();

        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}

export default AuthenticatedScene;