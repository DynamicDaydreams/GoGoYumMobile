import React, { Component } from 'react';
import { Text } from 'react-native';

import { AuthenticatedScene } from '../../components';

const styles = {
    login: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }
}
class LandingScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthenticatedScene {...this.props}>
                <Text style={styles.login}>Landing</Text>
            </AuthenticatedScene>
        )
    }
}

export default LandingScene