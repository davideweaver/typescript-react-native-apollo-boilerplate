import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {

    public static navigationOptions = {
        title: 'Home',
    };

    public render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
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

export default HomeScreen;
