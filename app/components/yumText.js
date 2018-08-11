import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    textField: {
        backgroundColor: 'transparent',
        color: 'black',
    },
    container: {
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    }
})

class YumText extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        viewStyle: PropTypes.any,
        textStyle: PropTypes.any,
    }

    render() {
        return (
            <View style={[styles.container, this.props.viewStyle && this.props.viewStyle]}>
                <TextInput style={[styles.textField, this.props.textStyle && this.props.textStyle]} placeholder={this.props.placeholder && this.props.placeholder.toUpperCase()} placeholderTextColor={this.props.placeholderTextColor || 'black'} />
            </View>
        )
    }
}

export default YumText