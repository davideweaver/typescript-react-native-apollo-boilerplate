import * as React from 'react';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

interface INavigationParams extends NavigationParams {
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class BookingsScreen extends React.Component<IProps, IState> {

    public static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<{}> }) => {
        return {
            title: 'Manage Bookings',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name='menu' size={30} />
                </TouchableOpacity>
            ),
        };
    }

    public render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Button
                    title='Go to Appointment'
                    onPress={() => navigation.navigate('Appointment', { itemId: 86, otherParam: 'First Details' })}
                />
                <Button
                    title='Add Booking'
                    onPress={() => navigation.navigate('AddBooking')}
                />
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

export default BookingsScreen;
