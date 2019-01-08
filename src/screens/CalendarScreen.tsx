import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

import NewPost from '../components/NewPost';
import PostList from '../components/PostList';

interface INavigationParams extends NavigationParams {
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class CalendarScreen extends React.Component<IProps, IState> {

    public static navigationOptions = {
        title: 'CalendarScreen',
    };

    public render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <NewPost title='' />
                <Button
                    title='Go to Appointment'
                    onPress={() => navigation.navigate('Appointment', { itemId: 86, otherParam: 'First Details' })}
                />
                <Button
                    title='Add Booking'
                    onPress={() => navigation.navigate('AddBooking')}
                />
                <PostList />
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

export default CalendarScreen;
