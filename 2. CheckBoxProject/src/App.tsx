import React from 'react'
import { CheckBox } from 'react-native-elements'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <CheckBox
        center
        title='Click Here'
        checked={true}
        containerStyle={{marginTop: 30}}
      />
    )
  }
}
