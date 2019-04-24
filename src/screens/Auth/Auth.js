import React, { Component } from 'react';
import {Dimensions, View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import TextHeading from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
import background from '../../assets/background.jpg'


class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape"
    }
    constructor(props) {
        super(props)
        Dimensions.addEventListener("change", this.updateStyles)
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        })
    }

    loginHandler = () => {
        startMainTabs()
    }

    render () {
        let headingText = null

        if (this.state.viewMode === "portrait") {
            headingText = (
                <MainText>
                    <TextHeading>Please Login</TextHeading>
                </MainText>
            )
        }
        return (
            <ImageBackground style={styles.backgroundImage} source={background}>
            <View style={styles.container}>
                {headingText}
                    <ButtonWithBackground color="#29aaf4" onClick={() => alert("Hello")}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Email" style={styles.input}/>
                        <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                                <DefaultInput placeholder="Password" style={styles.input}/>
                            </View>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground color="#29aaf4" onClick={this.loginHandler}>Submit</ButtonWithBackground>
            </View>
            </ImageBackground>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", // Center Vertically
        alignItems: "center" // Center Horizontally
    }, 
    inputContainer: {
        width: "80%"
    },
    backgroundImage: {
        flex: 1,
        width: "100%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
})

export default AuthScreen;