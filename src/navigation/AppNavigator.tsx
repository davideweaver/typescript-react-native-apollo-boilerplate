import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import AddBookingScreen from '../screens/AddBookingScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import BookingsScreen from '../screens/BookingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SigninScreen from '../screens/SigninScreen';
import Drawer from './Drawer';

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
        headerMode: 'screen',
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
        headerMode: 'screen',
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
    {
        contentComponent: Drawer,
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

const AuthStack = createStackNavigator(
    {
        Signin: {
            screen: SigninScreen,
        },
    },
);

const AppStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        AddBooking: {
            screen: AddBookingStack,
        },
    },
    {
        initialRouteName: 'Main',
        mode: 'modal',
        headerMode: 'none',
    },
);

const AppNavigator = createSwitchNavigator(
    {
        Loading: {
            screen: LoadingScreen,
        },
        App: {
            screen: AppStack,
        },
        Auth: {
            screen: AuthStack,
        },
    },
    {
        initialRouteName: 'Loading',
    },
);

export default createAppContainer(AppNavigator);
