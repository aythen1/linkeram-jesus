import {
    Text,
    StyleSheet,
    View,      
  } from "react-native";
  import React from "react";
 

  
  const Textos = (props) => {
    
  
    return (
      <View>
        <Text style={props.style}>{props.txt}</Text>
      </View>
    );
  };
  
  export default Textos;
  
  
  