import React from 'react'
import { CheckBox } from 'react-native-elements'

interface State {
  checked: boolean
}

interface Props {}

export default class App extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  public render() {
    return (
      <CheckBox
        center
        title='Click Here'
        checked={this.state.checked}
        containerStyle={{marginTop: 30}}
        onPress={this.onPess}
      />
    )
  }

  private onPess = () => {
    this.setState({ checked: !this.state.checked})
  }

}
