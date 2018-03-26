import * as React from 'react'
import { StackNavigator } from 'react-navigation'
import { HomeScreen } from './screens/HomeScreen'
import { FormAddTaskScreen } from './screens/FormAddTaskScreen'

// tslint:disable-next-line:variable-name
const RootStack = StackNavigator (
    {
        Home: {
            screen: HomeScreen
        },
        FormTask: {
            screen: FormAddTaskScreen
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)

export default class App extends React.Component {
    render() {
      return <RootStack />
    }
}