import React from 'react';
import { GestureResponderEvent, StyleSheet, Text } from 'react-native';

interface IDrawerProps {
    onPress: ((event: GestureResponderEvent) => void);
    title: string;
    active: boolean;
}

const DrawerLink = (props: IDrawerProps) => (
    <Text
        style={[styles.link, { backgroundColor: props.active ? 'lightgrey' : 'white' }]}
        onPress={props.onPress}>
        {props.title}
    </Text>
);

const styles = StyleSheet.create({
    link: {
        padding: 10,
    },
});

export default DrawerLink;
