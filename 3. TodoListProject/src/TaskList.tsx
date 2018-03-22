import * as React from 'react'
import { Text, StyleSheet, View, ListView } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    }
})

interface Props {
    todos: any[]
}

interface State {
    dataSource: any
}

export default class TaskList extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context)

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
            dataSource: ds.cloneWithRows(this.props.todos)
        }
    }

    public render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }

    private renderRow = (todo: any) => {
        return (
            <Text>{todo.task}</Text>
        )
    }
}