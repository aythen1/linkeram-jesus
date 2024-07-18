import {
    Text,
    StyleSheet,
    View, 
    TextInput,     
  } from "react-native";
  import React from "react";
 

  
  const Entradatxt = (props) => {
    
  
    return (
      <View>
        <TextInput style={props.style} placeholder={props.pholder}></TextInput>
      </View>
    );
  };
  
  export default Entradatxt;
  
  
  