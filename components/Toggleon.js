import {
    Text,
    StyleSheet,
    View,      
    ImageBackground,
  } from "react-native";
  import React from "react";
 import cand from "../assets/ggle.png";

  
  
 const Toogle = () => {
    
  
    return (
      <View>
         <ImageBackground
              source={cand}
              resizeMode="cover"
              style={{ width: 44, height: 24, position: 'absolute', top: '-1.3vw', left: '70%' }}
            />
      </View>
    );
  };
  
  export default Toogle;
  
  
  
const styles = StyleSheet.create({
    header: {
      display: "flex",
      backgroundColor: "#fff",
      width: "100%",
  
      justifyContent: "space-between",
      flexDirection: "row",
    },  
     labeltxt:{
      color: "#1F184B",
      fontSize: 18,
      textAlign: 'left',
      width: '35vw',
      fontWeight: 'bold',
      marginTop: 10,
      
    }, 
    text1: { 
      margin: 6 ,
      color: "#1F184B",
      fontWeight: "bold",
      fontSize: 18,
      textAlign: 'center',
    },  
    text: {
      fontSize: 16,
      color: '#fff',  
      textAlign: 'center',
    },
    btnCancel: {
      backgroundColor: '#ffffff',
      padding: 2,
      borderRadius: 5, 
      borderWidth: 1,  
      borderColor: '#1F184B',
      color: '#1F184B',
      height: 50, 
      width: 250,
      textAlign: 'center',
      position: 'relative',
      top: '5vw',
      left: '5vw',
    },
    containers:{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    btnSave: {
      backgroundColor: '#1F184B',
      color: '#ffffff',
      padding: 10,
      borderRadius: 5,
      height: 50,
      width: 250,
      textAlign: 'center', 
      position: 'relative',
      top: '5vw',
      left: '8vw',
    },
    labeltxtmin:{
      color: "#1F184B",
      fontSize: 15,
      textAlign: 'left',
      width: '25vw',
      fontWeight: 'bold',
      marginTop: 10,
      
    }, 
    imgeye: {
      width: 20,
      height: 20,
      position: "relative",
      left: "-6vw",
      top: 15,
    },
    labeltxtc:{
      color: "#1F184B",
      fontSize: 18,
      textAlign: 'left',
      width: '40vw',   
      marginTop: 3,
      
    }, 
    labeltxt2:{
      color: "#1F184B",
      fontSize: 18,
      textAlign: 'left',
      width: '50vw',
      fontWeight: 'bold',
      marginTop: 10,
    },
    labeltxt3:{
      color: "#ffffff",
      fontSize: 30,
      textAlign: 'left',
      width: '25vw',
      fontWeight: 'bold',    
      marginTop: 10,
      position: 'relative',
      top: 5,
      left: -10,
    },
    entrada:{
      color: "#1F184B",
      padding: '1.8vw',
      width: '20vw',
      marginRight: '4vw',
      height: 25,
      borderColor: "#cccccc",
      borderWidth: 1,
    },
    entradalg:{
      color: "#1F184B",
      padding: '1.8vw',
      width: '44vw',
      marginLeft: '0vw',
      height: 25,
      borderColor: "#cccccc",
      borderWidth: 1,
    },
    bg:{
      backgroundColor: "#cccccc",
      width: '5vw',
    },
    estiloscont:{
     display: 'flex',   
     justifyContent: 'left',
     flexDirection: 'row',
    },
    nombre:{
      position: 'relative',
      top: '1vw',        
      left: '3vw',
    },
    subtitulo:{
      
      color: "#cccccc",
      position: 'relative',
      top: '1vw',
      left: 40,
  
      
    },
    txtcrear:{
      color: "#622FAE",
      fontWeight: 'bold',
      marginBottom: 30,
      paddingBottom: 10,
      position: 'relative',
      top: '-1.1vw',
      left: 50,
      
    },
    crearboton:{
      width: '15vw',
      height: '4vw',
      marginLeft: 30,
      backgroundColor: "#EDEDED",
    },
    bell:{
       width: 32,
       height: 32, 
       position: 'relative',
       paddingLeft: 30,
       paddingRight: 30,
       top: 10,
       left: -30,
    },
     
    
  });