import React, { Component } from 'react';
import { 
    View, 
    Button, 
    StyleSheet, 
    ScrollView
} from 'react-native'
import PickLocation from '../../components/PickLocation/PickLocation'
import PickImage from '../../components/PickImage/PickImage'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/index'
import MainText from '../../components/UI/MainText/MainText'
import HeadingText from '../../components/UI/HeadingText/HeadingText'

class SharedPlacesScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "orange"
    }

    state = {
        placeName: ""
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })
    }

    placeAddedhandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName)
        }
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                <MainText><HeadingText>Share a Place With Us!</HeadingText></MainText>
                <PickImage />
                <PickLocation />
                <PlaceInput 
                placeName={this.state.placeName}
                onChangeText={this.placeNameChangedHandler}/>
                <View style={styles.Button}>
                    <Button title="Share The Place" onPress={this.placeAddedhandler}/>
                </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 200
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharedPlacesScreen)