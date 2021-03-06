import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, KeyboardAvoidingView, Alert, Text, View, ImageBackground} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Expo from 'expo';

import { YumText, YumButton } from '../../components';
import { AuthService } from '../../services';
import { AuthManager } from '../../managers';

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    rootScrollView: {
        flex: 1,
    },
    root_lockImage: {
        resizeMode: 'contain',
        height: 250,
        width: null,
        marginTop: 60,
        shadowColor: '#fff',
        shadowOffset: { width: -1, height: -1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    userName: {
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'rgba(115,115,115,.5)',
        borderColor: '#fff',
        borderBottomWidth: 1,
    },
    password: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        backgroundColor: 'rgba(115,115,115,.5)',
        borderColor: '#fff',
        borderBottomWidth: 1,
    },
    password2: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    loginButton: {
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: 'rgba(251, 172, 24, .50)',
        borderColor: 'rgba(251,172,24,.5)',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    newAccountButtonContainer: {
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
        justifyContent: 'flex-end',
        borderColor: '#183e5a',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    newAccountButtonText: {
        color: '#fbac18'
    },
    newAccountButtonText2: {
        color: '#fff'
    },
    modeTextContainer: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40
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

        let dashboardRedirect = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Dashboard' })
            ]
        });

        new AuthService().Login(this.state.username, this.state.password).then(success => {
            let { bearerToken } = success;
            console.log(`We logged in! ${JSON.stringify(bearerToken)}`)
            AuthManager.SetToken(bearerToken).then(save_success => {
                this.props.navigation.dispatch(dashboardRedirect);
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
                <ImageBackground source={require('../../../assets/Background.jpeg')} style={{ width: '100%', height: '100%' }}>
                <ScrollView style={styles.rootScrollView}>
                        <Image source={require('../../../assets/Logo.png')} style={styles.root_lockImage} />
                        
                    <YumText
                        viewStyle={styles.userName}
                        placeholder={'Username'}
                        onChange={(username) => this.setState({ username })}
                        value={this.state.username}
                        textContentType={'username'}
                        placeholderTextColor={'#fff'} />

                    <YumText
                        viewStyle={styles.password}
                        placeholder={'Password'}
                        onChange={(password) => this.setState({ password })}
                        value={this.state.password}
                        textContentType={'password'}
                        placeholderTextColor={'#fff'} 
                        secureTextEntry />

                    <YumButton style={styles.loginButton} buttonText={'Connect with Email'} onPress={() => { this.handleLogin() }} />
                    <YumText viewStyle={styles.password2}
                            placeholder={'OR'}
                        />
                    <YumButton style={styles.newAccountButtonContainer} buttonText={'Connect with new Account'} onPress={() => { this.handleCreatePressed() }} />
                </ScrollView>
                <View style={styles.modeTextContainer}>
                    <Text style={{ fontWeight: 'bold' }}>Application Mode: {Expo.Constants.appOwnership} on {Expo.Constants.isDevice ? 'device' : 'simulator'}</Text>
                    </View>
                    </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

export default LoginScene