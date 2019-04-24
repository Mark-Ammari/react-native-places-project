import React from 'react'
import { 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    View, 
    StyleSheet, 
    Text,
    Platform
} from 'react-native'

const buttonWithBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text>{props.children}</Text>
        </View>
    )
    if (Platform.OS === 'android' ) {
        return (
            <TouchableNativeFeedback onPress={props.onClick}>
                {content}
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <TouchableOpacity onPress={props.onClick}>
                {content}
            </TouchableOpacity>
        )
    }
    
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderColor: "#000",
        borderRadius: 5,
        borderWidth: 2
    }
})

export default buttonWithBackground