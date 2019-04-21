import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

class SideDrawer extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>side drawer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: "white",
        flex: 1
    }
})

export default SideDrawer