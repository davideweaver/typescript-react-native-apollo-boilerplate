import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerItemsProps } from 'react-navigation';

interface IProps extends DrawerItemsProps {
}

interface IState {
}

class Drawer extends Component<IProps, IState> {

    public render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text
                        style={styles.navItemStyle}
                        onPress={() => this.signOutAsync()}>
                        Log Out
                    </Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text
                                style={styles.navItemStyle}
                                onPress={() => this.navigateToScreen('Calendar')}>
                                My Calendar
                            </Text>
                            <Text
                                style={styles.navItemStyle}
                                onPress={() => this.navigateToScreen('Bookings')}>
                                Manage Bookings
                            </Text>
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
    navItemStyle: {
        padding: 10,
    },
    navSectionStyle: {
    },
    headerContainer: {
        backgroundColor: 'lightgrey',
    },
});

export default Drawer;
