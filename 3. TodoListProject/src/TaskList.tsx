import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    }
})

export default class TaskList extends React.Component {
    public render() {
        return (
            <View style={styles.container}>
                <Text>Hi, this is the TaskList!</Text>
            </View>
        )
    }
}