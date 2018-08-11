import React, { Component } from 'react';
import { Text } from 'react-native';

import AuthenticatedScene from '../../components/authenticatedScene';

class LandingScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthenticatedScene {...this.props}>
                <Text>Landing</Text>
            </AuthenticatedScene>
        )
    }
}

export default LandingScene