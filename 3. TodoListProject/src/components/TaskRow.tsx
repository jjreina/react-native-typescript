import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    },
    button: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#EAEAEA'
    }
})

interface Props {
    todo: any,
    onClickDone: any
}

export class TaskRow extends React.Component<Props, {}> {
    constructor(props) {
        super(props)
    }

    public render () {
        const { todo } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    {todo.task}
                </Text>
                <Button
                    onPress={this.onClickDone}
                    title='Done'
                    buttonStyle={styles.button}
                    textStyle={{color: 'black'}}
                />
            </View>
        )
    }

    private onClickDone = () => {
        this.props.onClickDone(this.props.todo.task)
    }
}