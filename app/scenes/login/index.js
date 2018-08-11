import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { StyledImageTextBox } from '../../components';


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
        flex: 1,
        paddingTop: 50,
        alignSelf: 'center'
    },
    styledTextField: {
        marginTop: 50
    }
});

class LoginScene extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column' }} style={styles.root}>
                <Image source={require('../../../assets/login_lock.png')} style={styles.root_lockImage} />
                <StyledImageTextBox placeholder="username" viewStyle={styles.styledTextField} />
            </ ScrollView>
        )
    }
}

export default LoginScene