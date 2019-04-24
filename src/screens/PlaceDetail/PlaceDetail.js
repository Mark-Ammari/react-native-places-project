import React, { Component } from "react";
import { Dimensions, Platform, View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? "portrait" : "lanscape"
  }

  constructor(props) {
    super(props)
    Dimensions.addEventListener("change", this.styleUpdate)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.styleUpdate)
  }

  styleUpdate = () => {
    this.setState({
      viewMode: Dimensions.get('window').height > 500 ? "portrait" : "lanscape"
    })
  }

  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.placeImageTextContainer}>
          <Image source={this.props.selectedPlace.image} style={this.state.viewMode === "portrait" ? styles.portraitPlaceImage : styles.landscapePlaceImage} />
          <Text style={this.state.viewMode === "portrait" ? styles.portraitPlaceName : styles.landscapePlaceName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeleteHandler}>
            <View style={styles.deleteItems}>
              <Icon name={Platform.OS === "android" ? "md-trash" : "ios-trash"} size={30} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImageTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  portraitPlaceImage: {
    width: "100%",
    height: 200
  },
  portraitPlaceName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  landscapePlaceImage: {
    width: "50%",
    height: 150,
    alignItems: "center"
  },
  landscapePlaceName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteItems: {
    alignItems: "center"
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
