import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { YumText, YumButton } from '../../components';


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
    }
});

class LoginScene extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.root} behavior={'padding'} enabled>
                <ScrollView style={styles.rootScrollView}>
                    <Image source={require('../../../assets/login_lock.png')} style={styles.root_lockImage} />
                    <YumText viewStyle={styles.userName} placeholder={'Username'} />
                    <YumText viewStyle={styles.password} placeholder={'Password'} />
                    <YumButton style={styles.loginButton} buttonText={'Login'} onClick={() => { }} />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default LoginScene