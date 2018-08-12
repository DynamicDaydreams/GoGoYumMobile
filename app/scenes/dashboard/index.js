import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { AuthenticatedScene } from '../../components';
import { AuthManager } from '../../managers';

import Tile from './tile';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column'
    },
    firstRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 50,
        paddingLeft: 5,
        paddingRight: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    lastRow: {
        height: 20,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    },
    item: {
        margin: 10
    }
});

class DashboardScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthenticatedScene navigation={this.props.navigation} style={styles.root}>
                <View style={styles.firstRow}>
                    <Tile text={'Log Out'} tileStyle={'darkGreen'} style={styles.item} onPress={() => { AuthManager.SignOut(this.props.navigation) }} />
                    <Tile text={'Dashboard Tile'} tileStyle={'orange'} style={styles.item} onPress={() => { }} />
                </View>
                <View style={styles.row}>
                    <Tile text={'Dashboard Tile'} tileStyle={'yellow'} style={styles.item} onPress={() => { }} />
                    <Tile text={'Dashboard Tile'} tileStyle={'lightBlue'} style={styles.item} onPress={() => { }} />
                </View>
                <View style={styles.row}>
                    <Tile text={'Dashboard Tile'} tileStyle={'gray'} style={styles.item} onPress={() => { }} />
                    <Tile text={'Dashboard Tile'} tileStyle={'darkBlue'} style={styles.item} onPress={() => { }} />
                </View>
                <View style={styles.row}>
                    <Tile text={'Dashboard Tile'} tileStyle={'purple'} style={styles.item} onPress={() => { }} />
                    <Tile text={'Dashboard Tile'} tileStyle={'lightGreen'} style={styles.item} onPress={() => { }} />
                </View>
                <View style={styles.lastRow}></View>
            </AuthenticatedScene>
        )
    }
}

export default DashboardScene