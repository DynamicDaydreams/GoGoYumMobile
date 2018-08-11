import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textField: {
        backgroundColor: 'transparent'
    },
    container: {
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    }
})

class StyledImageTextBox extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.viewStyle && this.props.viewStyle]}>
                <TextInput style={[styles.textField, this.props.textStyle && this.props.textStyle]} placeholder='testing' />
            </View>
        )
    }
}

export default StyledImageTextBox