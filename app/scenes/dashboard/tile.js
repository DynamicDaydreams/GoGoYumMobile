import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    sharedContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    darkGreenContainer: {
        flex: 1,
        backgroundColor: '#7d9027'
    },
    darkGreenText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    orangeContainer: {
        flex: 1,
        backgroundColor: '#ea744c'
    },
    orangeText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    yellowContainer: {
        flex: 1,
        backgroundColor: '#f9e68c'
    },
    yellowText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    lightBlueContainer: {
        flex: 1,
        backgroundColor: '#28a5b2'
    },
    lightBlueText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    grayContainer: {
        flex: 1,
        backgroundColor: '#a3a3a3'
    },
    grayText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    darkBlueContainer: {
        flex: 1,
        backgroundColor: '#6590b7'
    },
    darkBlueText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    purpleContainer: {
        flex: 1,
        backgroundColor: '#7e7399'
    },
    purpleText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    lightGreenContainer: {
        flex: 1,
        backgroundColor: '#c5ca54'
    },
    lightGreenText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

class YumButton extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        style: PropTypes.any,
        textStyle: PropTypes.any,
        onPress: PropTypes.func.isRequired,
        tileStyle: PropTypes.oneOf([
            'darkGreen',
            'orange',
            'yellow',
            'lightBlue',
            'gray',
            'darkBlue',
            'purple',
            'lightGreen'
        ]).isRequired
    }

    render() {

        let containerStyle = styles[this.props.tileStyle + 'Container'];
        let textStyle = styles[this.props.tileStyle + 'Text'];

        return (
            <TouchableOpacity onPress={() => this.props.onPress()} style={[containerStyle, styles.sharedContainerStyle, this.props.style]}>
                <View style={[containerStyle, styles.sharedContainerStyle, this.props.style]}>
                    <Text style={[textStyle, this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default YumButton