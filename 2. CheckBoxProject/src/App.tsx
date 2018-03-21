import React from 'react'
import { CheckBox } from 'react-native-elements'
import { View, TouchableHighlight } from 'react-native'

interface State {
  checked: boolean
  checkedLastIcon: boolean
}

interface Props {}

export default class App extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      checkedLastIcon: false
    }
  }

  public render() {
    return (
      <View>
        <CheckBox
          center
          title='Click Here'
          checked={this.state.checked}
          containerStyle={{marginTop: 30}}
          onPress={this.onPressFirstIcon}
        />
        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
          checkedColor='blue'
          component={TouchableHighlight}
        />
        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
          checked={this.state.checked}
          component={TouchableHighlight}
        />
        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='done'
          uncheckedIcon='done'
          checkedColor='purple'
          checked={this.state.checkedLastIcon}
          onPress={this.onPressLastIcon}
        />
      </View>
    )
  }

  private onPressFirstIcon = () => {
    this.setState({ checked: !this.state.checked})
  }

  private onPressLastIcon = () => {
    this.setState({ checkedLastIcon: !this.state.checkedLastIcon})
  }

}
