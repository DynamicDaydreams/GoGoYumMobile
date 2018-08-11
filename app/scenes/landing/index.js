import React, { Component } from 'react';
import { Text } from 'react-native';

import { AuthenticatedScene } from '../../components';

const styles = {
    login: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 80,
        alignSelf: 'center'
    }
}
class LandingScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthenticatedScene {...this.props}>
                <Text style={styles.login}>Landing Page</Text>
            </AuthenticatedScene>
        )
    }
}

export default LandingScene