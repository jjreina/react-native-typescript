import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    }
})

interface Props {
    todo: any
}

export class TaskRow extends React.Component<Props, {}> {
    constructor(props) {
        super(props)
    }

    public render () {
        const { todo } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    {todo.task}
                </Text>
            </View>
        )
    }
}
