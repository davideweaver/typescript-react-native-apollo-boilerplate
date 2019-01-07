import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import NewPost from '../components/NewPost';
import PostList from '../components/PostList';

class HomeScreen extends React.Component {

    public static navigationOptions = {
        title: 'Home',
    };

    public render() {
        return (
            <View style={styles.container}>
                <NewPost title='' />
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

export default HomeScreen;
