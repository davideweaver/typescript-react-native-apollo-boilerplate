import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, View } from 'react-native';

import { isMocked, mockedLink } from './mocks';
import AppNavigator from './navigation/AppNavigator';

const link = isMocked ? mockedLink : new HttpLink({ uri: 'https://5y92v7q73k.sse.codesandbox.io/' });
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

interface IProps {
}

interface IState {
}

class App extends Component<IProps, IState> {
    public render() {
        return (
            <ApolloProvider client={client}>
                <View style={styles.container}>
                    <AppNavigator />
                </View>
            </ApolloProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});

export default App;
