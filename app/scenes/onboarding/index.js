import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

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
        paddingRight: 5,
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

                <ImageBackground source={require('../../../assets/Background.jpeg')} style={{ width: '100%', height: '100%' }}>
                    <ScrollView style={styles.rootScrollView}>
                        <View style={styles.firstRow}>
                            <Tile text={'Log Out'} tileStyle={'grey'} style={styles.item} onPress={() => { AuthManager.SignOut(this.props.navigation) }} />
                            <Tile text={'Cook Book'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                        </View>
                        <View style={styles.row}>
                            <Tile text={'Dashboard Tile'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                            <Tile text={'Dashboard Tile'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                        </View>
                        <View style={styles.row}>
                            <Tile text={'Dashboard Tile'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                            <Tile text={'Dashboard Tile'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                        </View>
                        <View style={styles.row}>
                            <Tile text={'Dashboard Tile'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                            <Tile text={'Dashboard Tile'} tileStyle={'grey'} style={styles.item} onPress={() => { }} />
                        </View>
                        <View style={styles.lastRow}></View>
                    </ScrollView>
                </ImageBackground>

            </AuthenticatedScene>
        )
    }
}

export default DashboardScene