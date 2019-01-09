import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, View } from 'react-native';
import { DrawerItemsProps } from 'react-navigation';

import DrawerLink from './DrawerLink';

interface IProps extends DrawerItemsProps {
}

interface IState {
}

class Drawer extends Component<IProps, IState> {

    public render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.links}>
                            <DrawerLink
                                title='Log Out'
                                onPress={() => this.signOutAsync()}
                                active={false}
                            />
                            <DrawerLink
                                title='My Calendar'
                                onPress={() => this.navigateToScreen('Calendar')}
                                active={this.props.activeItemKey === 'Calendar'}
                            />
                            <DrawerLink
                                title='Manage Bookings'
                                onPress={() => this.navigateToScreen('Bookings')}
                                active={this.props.activeItemKey === 'Bookings'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    private navigateToScreen(route: string) {
        this.props.navigation.navigate(route);
    }

    private async signOutAsync() {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
        paddingTop: 50,
    },
    links: {
    },
});

export default Drawer;
