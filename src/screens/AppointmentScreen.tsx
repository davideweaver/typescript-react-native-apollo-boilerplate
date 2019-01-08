import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

interface INavigationParams extends NavigationParams {
    itemId: number;
    otherParam: string;
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class AppointmentScreen extends React.Component<IProps, IState> {

    public static navigationOptions = {
        title: 'Appointment',
    };

    public render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={styles.container}>
                <Text>Appointment Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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

export default AppointmentScreen;
