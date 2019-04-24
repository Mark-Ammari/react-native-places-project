import React from "react";
import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = (props) => {
    return ( <DefaultInput 
    placeholder="place name" 
    value={props.placeName} 
    onChangeText={props.onChangeText}/> );
}

export default placeInput;
