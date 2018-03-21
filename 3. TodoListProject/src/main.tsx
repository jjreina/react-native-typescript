import * as React from 'react'
import TaskList from './TaskList'

interface State {
    todos: any[]
}

export default class Main extends React.Component<{}, State> {
    constructor(props, context) {
        super(props, context)
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                }
            ]
        }
    }

    public render() {
        return (
            <TaskList />
        )
    }
}