import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

interface IProps {
}

interface IStates {
}

export default class App extends Component<IProps, IStates> {
    public render() {
        return (
            <View style={styles.container}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});
