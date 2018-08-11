import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    textField: {
        backgroundColor: 'transparent',
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    container: {
        backgroundColor: 'white',

    }
})

class YumText extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        viewStyle: PropTypes.any,
        textStyle: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        textContentType: PropTypes.string,
        onChange: PropTypes.func
    }

    render() {
        return (
            <View style={[styles.container, this.props.viewStyle && this.props.viewStyle]}>
                <TextInput
                    value={this.props.value}
                    style={[styles.textField, this.props.textStyle && this.props.textStyle]}
                    placeholder={this.props.placeholder && this.props.placeholder.toUpperCase()}
                    placeholderTextColor={this.props.placeholderTextColor || 'black'}
                    secureTextEntry={this.props.secureTextEntry}
                    textContentType={this.props.textContentType}
                    onChangeText={this.props.onChange}
                />
            </View>
        )
    }
}

export default YumText