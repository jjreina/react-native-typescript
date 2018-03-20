import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

// tslint:disable-next-line:variable-name
const App: React.StatelessComponent<{}> = () => {
  let pic: any = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  const text: string = 'Open up App.js to start working on your app!'

  return (
    <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <Text>{text}</Text>
      <Text>{text}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
