import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

interface INavigationParams extends NavigationParams {
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class BookingScreen extends React.Component<IProps, IState> {

    public static navigationOptions = {
        title: 'BookingScreen',
    };

    public render() {
        return (
            <View style={styles.container}>
                <Text>BookingScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
    },
});

export default BookingScreen;
