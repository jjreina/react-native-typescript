import * as React from 'react'
import { StyleSheet, View, ListView, Switch, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { TaskRow } from './TaskRow'

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    },
    button: {
        borderRadius: 15,
        margin: 20
    },
    toggleRow: {
        flexDirection: 'row',
        padding: 10
    },
    toggleText: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 3
    }
})

interface Props {
    todos: any[],
    onAddStarted: any,
    onClickDone: any,
    filter: String,
    onToggle: any
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

    componentWillReceiveProps(nextProps) {
        const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos)
        this.setState({ dataSource })
    }

    public render() {
        return (
            <View style={styles.container}>
                <View style={styles.toggleRow}>
                    <Switch
                        onValueChange={this.props.onToggle}
                        value={this.props.filter !== 'pending'}
                    />
                    <Text style={styles.toggleText}>
                        Showing {this.props.todos.length} {this.props.filter} todo(s)
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
                <Button
                    onPress={this.props.onAddStarted}
                    title='Add one'
                    buttonStyle={styles.button}
                />
            </View>
        )
    }

    private renderRow = (todo: any) => {
        return (
            <TaskRow
                todo={todo}
                onClickDone={this.props.onClickDone}
            />
        )
    }
}