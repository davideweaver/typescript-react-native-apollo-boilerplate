import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import AddBookingScreen from '../screens/AddBookingScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import BookingsScreen from '../screens/BookingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';

const CalendarStack = createStackNavigator(
    {
        Calendar: {
            screen: CalendarScreen,
        },
        Appointment: {
            screen: AppointmentScreen,
        },
    },
    {
        initialRouteName: 'Calendar',
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

const BookingsStack = createStackNavigator(
    {
        Bookings: {
            screen: BookingsScreen,
        },
        Appointment: {
            screen: AppointmentScreen,
        },
    },
    {
        initialRouteName: 'Bookings',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Profile',
    },
);

const MainStack = createDrawerNavigator(
    {
        Calendar: {
            screen: CalendarStack,
        },
        Bookings: {
            screen: BookingsStack,
        },
        Profile: {
            screen: ProfileStack,
        },
    },
);

const AddBookingStack = createStackNavigator(
    {
        AddBooking: {
            screen: AddBookingScreen,
        },
    },
    {
        initialRouteName: 'AddBooking',
    },
);

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        AddBooking: {
            screen: AddBookingStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
