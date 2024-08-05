import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
    FlatList,
  } from "react-native";
  import React, { Component, useState } from "react";
  import logo from "../assets/logo.png";
  import link from "../assets/link.png";
  import { terminos } from "../constants/terminos";
  import { datamenu } from "../constants/datamenu";
  import logolink from "../assets/linkobj.png";
import Textos from "../components/Textos";
import check from "../assets/check.png";
import checkwhite from "../assets/checkwhite.png";
import logolink3 from "../assets/logolink.png";

const { width } = Dimensions.get("window");
  
  const Landingpage = () => {
    return (
      <ScrollView>
        <View style={styles.contenedor}>
          <View
            style={[
              styles.header,
              width < 750 ? styles.smallScreenContainer : null,
            ]}
          >
            <View style={styles.logolink}>
              <ImageBackground
                source={logo}
                resizeMode="cover"
                style={{ width:180, height: 36, position: 'relative', top: '0vw', left: '0vw' }}
              >
                <View></View>
              </ImageBackground>
            </View>
  
            
          </View>
          
         
  
          
        </View>
  
        
        <View style={styles.padre}>
        <View style={styles.logolink2}>
              <ImageBackground
                source={logolink}
                resizeMode="cover"
                style={{ width:78, height: 58, position: 'relative', top: '0vw', left: '0vw' }}
              >
                <View></View>
              </ImageBackground>
            </View>
            <Textos txt="¡Lamentamos que ya no quieras recibir nuestro correo ...!" style={styles.construccion}/>
            <Textos txt="Introduce tu email para cancelar la suscripción al boletín de noticias:" style={styles.construcciontxt}/>
            
           

            <View style={styles.container}>
                <View style={styles.vistagenlb}>
                    <View style={styles.vistagen}>
                    
                    </View>

                    <TouchableOpacity style={styles.suscrib}>
                    <Textos txt="Anular suscripción" style={styles.suscribtxt}></Textos>
                    </TouchableOpacity>

                    <TextInput placeholder="Email" style={styles.emailtxt} />
                </View>
                
                

               

                <View style={styles.contenedorseccion6}>
         
          </View>          
        
    
      </View>
                
            
        </View>
      </ScrollView>
    );
  };
  
  export default Landingpage;
  
  const styles = StyleSheet.create({
    header: {
      display: "flex",
      backgroundColor: "#fff",
      width: "100%",
      height: 80,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    subtitle:{
     color: "#5F54A4",
     fontSize: 24,
     fontWeight: 'bold',
    },    
    labeltxt:{
     borderBottomColor: '#CFCFCF',
     borderBottomWidth: 5,
    },
    labeltxtp22:{
     position: 'relative',
     left: '5vw',
     top: '-2vw',
    },
   seccionconten:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "55vw",        
    marginTop: '3vw',
  },
    imgsocialcand4:{
      position: 'relative',
      top: '0vw',
      left: '-40vw',
    },    
    flexcard:{
      backgroundColor: "white",
      width: '20vw',
      margin: '5vw',
      padding: 10,
    },
    labeltxtp22x:{     
      
       position: 'relative',
       left: '3vw',
       top: '-2vw',
      
    },     
    labeltxtp2222:{     
      
       position: 'relative',
       left: '73vw',
       top: '-8vw',
      
    },     
    labeltxtp2222p:{     
      color: "#1F184B",
      position: 'relative',
      left: '60vw',
      top: '-6vw',
     
   },    
   labeltxtp2222p2:{     
     color: "#1F184B",
     position: 'relative',
     left: '43vw',
     top: '3vw',
     marginBottom: 10,
  }, 
    labeltxtp22x22:{     
      
       position: 'relative',
       left: '70vw',
       top: '-8vw',
      
    },
    labeltxtp222:{
      position: 'relative',
      left: '55vw',
      top: '-7vw',
    },
    labeltxtp22x2:{     
      
      position: 'relative',
      left: '50vw',
      top: '-7vw',
     
   },
    txtbold:{
      fontSize: 20,  
      fontWeight: 'bold',
      color: "#606362",
      padding: 8,
    },    
    txtnormalwhite2:{
      color: "#5F54A4",
      fontWeight: 'normal',
      padding: 10,
    },
    txtnormal2:{
      color: "#5F54A4",
      fontWeight: 'normal',
      padding: 10,
    },    
    contenedor: {
      height: "25%",
      width: "100vw",
      alignItems: "flex-start",
      backgroundColor: "#FAFAFA",
    },
    contflexcard:{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: "#FAFAFA",
    },
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
      
    },
    vistagenlb: {
        width: '100%', 
        backgroundColor: 'white', 
        borderRadius: 10,
        position: 'relative',
        height: 220,
        top: '5vw',
        width: '60vw',
        padding: 20, 
        textAlign: 'center',
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        backgroundColor: "#FAFAFA",
    },    
    emailtxt:{
        backgroundColor: "#EDEDED",
        color: "#cccccc",
        borderWidth: 1,
        borderColor: "#ffffff",
        width: '25vw',
        padding: 8,
        position: 'absolute',
        left: '10vw',
        top: '5vw',
    },
    suscrib:{
       padding: 10, 
       backgroundColor: "#E20000",
       color: "#ffffff",
       position: 'relative',
       top: '3.5vw',
       left: '35vw',
       borderRadius: 6,
       width: 150,
    },
    suscribtxt:{
        color: "#ffffff",
        fontWeight: 'bold',
        width: '45vw',        
        
    },
    suscribtxt2:{
        color: "#622FAE",
        fontWeight: 'bold',
        fontSize: 64,
        marginTop: '4vw',
    },
    tituloart: {
      marginLeft: "3vw",
    },
    vistagen:{
        backgroundColor:"#FAFAFA",
        width: "50vw",
        position: 'relative',
        top: '12vw',
        textAlign: 'center',
    },    
    tituloartbold: {
      marginLeft: "3vw",
      fontWeight: "bold",
    },
    tituloh1: {
      color: "#622FAE",
      fontWeight: "bold",
      fontSize: 36,
      paddingLeft: 50,
      textAlign: "left",
    },
    padre: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAFAFA",
    },
    terminos: {
      width: "70%",
      paddingBottom: 100,
    },
    alturaheight: {
      marginTop: "0vw",
      position: "relative",
      top: "-30vw",
    },      
     logo: {
      height: "4vw",
      width: "18vw",
      paddingLeft: 20,
      paddingTop: 10,
      
    },
    logolink:{
      height: 58,
      width: 78,
      paddingLeft: 20,
      paddingTop: 10,
      marginTop: -20,
      position: 'relative',
      top: '2vw',
    },
    logolink2:{
        height: 58,
        width: 78,
        paddingLeft: 20,
        paddingTop: 10,
        marginTop: -20,
        position: 'relative',
        top: '0vw',
        backgroundColor: "#FAFAFA",
      },
    construccion:{
        fontWeight: 'bold',
        color: "#472C7D",
        position: 'relative',
        top: '3vw',
        left: '2vw',
        
        fontSize: 25,
        height: 90,
    },
    construcciontxt:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '0vw',
        left: '2vw',
        fontSize: 18,
        textAlign: 'center',
       
    },construcciontxt4:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '0vw',
        left: '2vw',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
       
    },
    construcciontxt3:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '0vw',
        left: '2vw',
        fontSize: 18,
        textAlign: 'center',
       
    }
 
  });
  