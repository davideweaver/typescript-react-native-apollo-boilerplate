import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import datetime from '../lib/datetime';

class HomeScreen extends React.Component {

    public static navigationOptions = {
        title: 'Home',
    };

    public render() {
        const sinceChristmas = datetime.formatTimeSince(new Date('2018-12-25'));
        return (
            <View style={styles.container}>
                <Text>{`Christmas was ${sinceChristmas} ago`}</Text>
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
