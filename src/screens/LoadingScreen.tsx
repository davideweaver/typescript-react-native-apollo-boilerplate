import * as React from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, View } from 'react-native';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';

interface INavigationParams extends NavigationParams {
}

interface IProps {
    navigation: NavigationScreenProp<undefined, INavigationParams>;
}

interface IState {
}

class LoadingScreen extends React.Component<IProps, IState> {

    public static navigationOptions = {
        title: 'LoadingScreen',
    };

    constructor(props: IProps) {
        super(props);
        this.bootstrapAsync();
    }

    public render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }

    private async bootstrapAsync() {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15,
    },
});

export default LoadingScreen;
