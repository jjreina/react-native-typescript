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

    // tslint:disable-next-line:member-ordering
    didBlurSubscription = this.props.navigation.addListener(
        'willFocus',
        () => {
          const { params } = this.props.navigation.state
          if (params !== undefined) {
            this.setState({ todos: params.todosUpdated })
          }
        }
    )

    public render() {
        return (
            <TaskList
                onAddStarted={this.onAddStarted}
                todos={this.state.todos}
                onClickDone={this.onClickDone}
            />
        )
    }

    private onAddStarted = () => {
        this.props.navigation.navigate('FormTask', {
            todos: this.state.todos
          })
    }

    private onClickDone = (task) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(element => {
                return (element.task !== task)
            })
        }))
    }

}