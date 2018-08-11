import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    root: {
        margin: 30,
    },
    root_lockImage: {
        resizeMode: 'contain',
        height: 250,
        width: null,
    },
    userName: {
        flex: 1,
        paddingTop: 50,
        alignSelf: 'center'
    }
});

class LoginScene extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column' }} style={styles.root}>
                <Image source={require('../../../assets/login_lock.png')} style={styles.root_lockImage} />
                <TextInput placeholder="username" style={styles.userName} />
            </ ScrollView>
        )
    }
}

export default LoginScene