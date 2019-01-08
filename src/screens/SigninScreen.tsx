import * as React from 'react';
import { AsyncStorage, Button, StyleSheet, View } from 'react-native';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

interface INavigationParams extends NavigationParams {
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class SigninScreen extends React.Component<IProps, IState> {

    public static navigationOptions = {
        title: 'Please sign in',
    };

    public render() {
        return (
            <View style={styles.container}>
                <Button title='Sign in!' onPress={() => this.signInAsync()} />
            </View>
        );
    }

    private async signInAsync() {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
    },
});

export default SigninScreen;
