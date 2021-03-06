import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: 'rgba(24,62,90,.75)',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})

class YumButton extends Component {
    static propTypes = {
        buttonText: PropTypes.string.isRequired,
        style: PropTypes.any,
        buttonTextStyle: PropTypes.any,
        onPress: PropTypes.func.isRequired
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()} style={[styles.container, this.props.style]}>
                <View>
                    <Text style={[styles.buttonText, this.props.buttonTextStyle]}>{this.props.buttonText.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default YumButton