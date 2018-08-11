import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: '#3863F3'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

class YumButton extends Component {
    static propTypes = {
        buttonText: PropTypes.string.isRequired,
        style: PropTypes.any,
        buttonTextStyle: PropTypes.any,
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity onClick={() => this.props.onClick()}>
                    <Text style={[styles.buttonText, this.props.buttonTextStyle]}>{this.props.buttonText.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default YumButton