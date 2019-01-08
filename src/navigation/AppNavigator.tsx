import { createAppContainer, createStackNavigator } from 'react-navigation';

import AppointmentScreen from '../screens/AppointmentScreen';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Appointment: {
            screen: AppointmentScreen,
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

const BookingStack = createStackNavigator(
    {
        Booking: {
            screen: BookingScreen,
        },
    },
    {
        initialRouteName: 'Booking',
    },
);

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Booking: {
            screen: BookingStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
