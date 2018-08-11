import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { YumText, YumButton } from '../../components';


const styles = StyleSheet.create({
    root: {
        margin: 30,
    },
    root_lockImage: {
        resizeMode: 'contain',
        height: 250,
        width: null,
        marginTop: 50
    },
    userName: {
        marginTop: 50
    },
    password: {
        marginTop: 20
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
            <ScrollView style={{ flex: 1, flexDirection: 'column' }} style={styles.root}>
                <Image source={require('../../../assets/login_lock.png')} style={styles.root_lockImage} />
                <YumText viewStyle={styles.userName} placeholder={'Username'} />
                <YumText viewStyle={styles.password} placeholder={'Password'} />
                <YumButton style={styles.loginButton} buttonText={'Log In'} onClick={() => { }} />
            </ ScrollView>
        )
    }
}

export default LoginScene