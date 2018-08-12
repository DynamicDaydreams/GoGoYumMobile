import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import { YumText, YumButton } from '../../components';
import { AuthService } from '../../services';
import { AuthManager } from '../../managers';


const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    rootScrollView: {
        flex: 1
    },
    root_lockImage: {
        resizeMode: 'contain',
        height: 250,
        width: null,
        marginTop: 60
    },
    userName: {
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    password: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    loginButton: {
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    },
    newAccountButtonContainer: {
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    newAccountButtonText: {
        color: '#3863F3'
    }
});

class LoginScene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin() {

        console.log('starting login')

        let landingRedirect = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Landing' })
            ]
        });

        new AuthService().Login(this.state.username, this.state.password).then(success => {
            let { access_token } = success;
            console.log(`We logged in! ${JSON.stringify(access_token)}`)
            AuthManager.SetToken(access_token).then(save_success => {
                this.props.navigation.dispatch(landingRedirect);
            }).catch(save_error => {
                console.log(`error saving token: ${save_error}`)
            });
        }).catch(error => {
            Alert.alert('Login Failed', 'The Username and Password combination could not be found. Please try again.');
            AuthManager.ClearToken();
            console.log(`login failed: ${error}`)
        })
    }

    handleCreatePressed() {
        let createAccountRedirect = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'CreateAccount' })
            ]
        });

        this.props.navigation.dispatch(createAccountRedirect);
    }

    render() {

        return (
            <KeyboardAvoidingView style={styles.root} behavior={'padding'} enabled>
                <ScrollView style={styles.rootScrollView}>
                    <Image source={require('../../../assets/login_lock.png')} style={styles.root_lockImage} />
                    <YumText
                        viewStyle={styles.userName}
                        placeholder={'Username'}
                        onChange={(username) => this.setState({ username })}
                        value={this.state.username}
                        textContentType={'username'} />

                    <YumText
                        viewStyle={styles.password}
                        placeholder={'Password'}
                        onChange={(password) => this.setState({ password })}
                        value={this.state.password}
                        textContentType={'password'}
                        secureTextEntry />

                    <YumButton style={styles.loginButton} buttonText={'Login'} onPress={() => { this.handleLogin() }} />
                    <YumButton style={styles.newAccountButtonContainer} buttonTextStyle={styles.newAccountButtonText} buttonText={'Create Account'} onPress={() => { this.handleCreatePressed() }} />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default LoginScene