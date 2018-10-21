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
    firstTextField: {
        marginTop: 80,
        marginLeft: 30,
        marginRight: 30,
    },
    textField: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    createAccountButton: {
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    },
    cancelCreateButton: {
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    cancelCreateButtonText: {
        color: '#3863F3'
    }

});

class CreateAccountScene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleCreate() {
        if (this.state.password === this.state.passwordConfirm) {
            new AuthService().CreateAccount(this.state.username, this.state.email, this.state.passwordConfirm).then(success => {
                Alert.alert('Account Created', 'Account created successfully, Please sign in!');
                this.handleLoginRedirect();
            }).catch(error => {
                Alert.alert('Account Creation Error', `Error: ${error.message}`);
            });
        }
        else {
            Alert.alert('Validation Error', 'Your passwords do not match, please try again.');
        }
    }

    handleLoginRedirect() {
        let loginRedirect = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login' })
            ]
        });

        this.props.navigation.dispatch(loginRedirect);
    }

    render() {

        return (
            <KeyboardAvoidingView style={styles.root} behavior={'padding'} enabled>
                <ScrollView style={styles.root}>
                    <YumText
                        viewStyle={styles.firstTextField}
                        placeholder={'Email'}
                        onChange={(email) => this.setState({ email })}
                        value={this.state.email}
                        textContentType={'emailAddress'} />

                    <YumText
                        viewStyle={styles.textField}
                        placeholder={'UserName'}
                        onChange={(username) => this.setState({ username })}
                        value={this.state.username}
                        textContentType={'username'} />

                    <YumText
                        viewStyle={styles.textField}
                        placeholder={'Password'}
                        onChange={(password) => this.setState({ password })}
                        value={this.state.password}
                        textContentType={'password'}
                        secureTextEntry />

                    <YumText
                        viewStyle={styles.textField}
                        placeholder={'Confirm Password'}
                        onChange={(passwordConfirm) => this.setState({ passwordConfirm })}
                        value={this.state.passwordConfirm}
                        textContentType={'password'}
                        secureTextEntry />

                    <YumButton style={styles.createAccountButton} buttonText={'Create Account'} onPress={() => { this.handleCreate() }} />

                    <YumButton style={styles.cancelCreateButton} buttonTextStyle={styles.cancelCreateButtonText} buttonText={'Cancel'} onPress={() => { this.handleLoginRedirect() }} />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default CreateAccountScene