import { createStore } from 'redux'

const defaultState = {
    todos: [
        {
            task: 'Initial todo in store'
        }
    ]
}

const todoStore = (state = defaultState, action) => {
    // tslint:disable-next-line:switch-default
    switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: state.todos.concat([{
                task: action.task
            }])
        })
    case 'DONE_TODO':
        return Object.assign({}, state, {
            todos: state.todos.filter( (todo) => todo.task !== action.task )
        })
    default:
        return state
    }
}

export default createStore(todoStore)