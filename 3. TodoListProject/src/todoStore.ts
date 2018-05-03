import { createStore } from 'redux'

const defaultTodos = [
    {
        task: 'Initial todo in store',
        state: 'pending'
    }
]

const defaultState = {
    todos: defaultTodos,
    allTodos: defaultTodos,
    filter: 'pending'
}

const todoStore = (state = defaultState, action) => {
    // tslint:disable-next-line:switch-default
    switch (action.type) {
    case 'ADD_TODO':
        const allTodos = state.allTodos.concat([{
            task: action.task,
            state: 'pending'
        }])
        const result =  Object.assign({}, state, {
            allTodos,
            todos: allTodos.filter( (todo) => {
                return todo.state === state.filter
            })
        })
        return result
    case 'DONE_TODO':
        const doneTodo = Object.assign({}, action.todo, {
            state: 'done'
        })

        const updateAllTodos = state.allTodos.map( (todo) => {
            return todo === action.todo ? doneTodo : todo
        })

        return Object.assign({}, state, {
            allTodos: updateAllTodos,
            todos: updateAllTodos.filter( (todo) => todo.state === state.filter)
        })
    case 'TOGGLE_TATE':
        const filter = state.filter === 'pending' ? 'done' : 'pending'
        return Object.assign({}, state, {
            filter,
            todos: state.allTodos.filter( (todo) => todo.state === filter)
        })
    default:
        return state
    }
}

export default createStore(todoStore)