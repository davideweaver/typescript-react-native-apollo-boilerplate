import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

interface INavigationParams extends NavigationParams {
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class AddBookingScreen extends React.Component<IProps, IState> {

    public static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<{}> }) => {
        return {
            title: 'Add Booking',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.dismiss()}>
                    <Icon name='close' size={30} />
                </TouchableOpacity>
            ),
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>AddBookingScreen</Text>
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

export default AddBookingScreen;
