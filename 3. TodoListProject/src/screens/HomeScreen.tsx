import * as React from 'react'
import TaskList from '../components/TaskList'

interface State {
    todos: any[]
}

interface Props {
    navigation: any
}

export class HomeScreen extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context)
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                },
                {
                    task: 'Learn Redux'
                }
            ]
        }
    }

    public render() {
        return (
            <TaskList
                onAddStarted={this.onAddStarted}
                todos={this.state.todos}
            />
        )
    }

    private onAddStarted = () => {
        this.props.navigation.navigate('FormTask')
    }
}