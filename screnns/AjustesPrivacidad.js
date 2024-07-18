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
import { ayudas } from "../constants/ayuda";
import { datamenu } from "../constants/datamenu";
import  link1  from  "../assets/bell.png";
import  link2  from  "../assets/Ellipse.png";
import  link3  from  "../assets/menu.png";
import  link4  from  "../assets/menu.png";
import  crearbtn  from  "../assets/crearbtn.png";
import bgimg from "../assets/Ellipsef.png";

const { width } = Dimensions.get("window");

const AjustesPrivacidad = () => {


  const data = [
    { id: 1, name: 'Candy Bar' , image: "./assets/home.png" },
    { id: 2, name: 'White Chocolate Bar' , image: "./assets/user.png"},
    { id: 3, name: 'Red Velvet' , image: "./assets/users.png"},
    { id: 4, name: 'Lista de correo' , image: "./assets/mail.png"},
    { id: 5, name: 'Mensajes' , image: "./assets/message-circle.png"},
    { id: 6, name: 'Calendario' , image: "./assets/calendar.png"},
    { id: 7, name: 'Analíticas' , image: "./assets/trending-up.png"},
  ];

  
  const datanotif = [
    { id: 1, name: 'Adminstrar cuenta' , image: "./assets/userfinal.png", subtitle: 'Gestiona los detalles de tu cuenta' },
    { id: 2, name: 'Notificaciones de la cuenta' , image: "./assets/bellcamp.png", subtitle: 'Configura tus notificaciones'},
    { id: 3, name: 'Integraciones' , image: "./assets/verifyc.png", subtitle: 'Conecta aplicaciones y servicios'},
    { id: 4, name: 'Cobros' , image: "./assets/credit-card.png", subtitle: 'Añade una tarjeta o conecta stripe'},
    { id: 5, name: 'Suscripción y Precios' , image: "./assets/award.png", subtitle: 'Aumenta la productividad'},   
  ];



  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.nombre}>{item.name}</Text>        
        <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={{ width: 24, height: 24 }}
            />
      </View>
    );
  };

  
  const renderItem2 = ({ item }) => {
    return (
      
         <View>             
        <Text style={styles.nombre}>{item.name}</Text>
        <Text style={styles.subtitulo}>{item.subtitle}</Text>
        <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={{ width: 24, height: 24, position: 'relative', top: '-1.1vw' }}
            />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <View
          style={[
            styles.header,
            width < 750 ? styles.smallScreenContainer : null,
          ]}
        >
          <View style={styles.logo}>
            <ImageBackground
              source={logo}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            >
              <View></View>
            </ImageBackground>
          </View>

          <View style={styles.righside}>
          
          <TextInput placeholder="Search" style={styles.elementxt} />
          <ImageBackground

              source={link1}
              resizeMode="cover"
              style={styles.bell}
            >
              <View></View>
            </ImageBackground>
            <ImageBackground

              source={link2}
              resizeMode="cover"
              style={styles.bell}
            >
              <View></View>
            </ImageBackground>
            <ImageBackground

              source={link3}
              resizeMode="cover"
              style={styles.bell}
            >
              <View></View>
            </ImageBackground>
          </View>
        </View>
      </View>

      <View style={styles.padre}>
        <View style={styles.ajustes}>
          <View style={styles.alturaheight}>
            <View style={styles.seccion1}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
            <TouchableOpacity style={styles.crearboton}> <ImageBackground

source={crearbtn}
resizeMode="cover"
style={styles.bell2}
>
<View></View>
</ImageBackground><Text style={styles.txtcrear}> Crear </Text></TouchableOpacity>
            </View>
            <View style={styles.seccion2}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={datanotif}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
            </View>
            <View style={styles.seccion3}>
              <Text>Administrar Cuenta</Text>
              <ImageBackground

              source={bgimg}
              resizeMode="cover"
              style={styles.bell3}
              >
              <View></View>
              </ImageBackground>
              <View>
              <View>
                <Text>Administrar Cuenta</Text>
              </View>
              <View>
                <Text>Administrar Cuenta</Text>
              </View>
              </View>
             
            </View>
          </View>
        </View>

       

      
        
      </View>
    </ScrollView>
  );
};

export default AjustesPrivacidad;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },
  bg:{
    backgroundColor: "#cccccc",
    width: '5vw',
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
   bell2:{
    width: 32,
    height: 32, 
    position: 'relative',
    paddingLeft: 30,
    paddingRight: 30,
    top: 10,
    left: 8,
 }, 
  bell3:{
  width: 80,
  height: 80, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 30,
  top: 10,
  left: 180,
},
  contenedor: {
    height: "65%",
    width: "100vw",
    alignItems: "flex-start",
  },
  seccion1:{
    flex: 1,
    width: '5vw',
    height: '30vw',
    paddingLeft: 15,
    
    
  },
  seccion2:{
    flex: 2,
    width: '20%',
    
  },
  seccion3:{
    flex: 3,
    width: '65%',
   
  },
  tituloart: {
    marginLeft: "3vw",
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
  },
  ajustes: {
    width: "100%",
    height: 200,
    paddingBottom: 100,
  },
  alturaheight: {
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    height: '50vw',
    width: '100%',
  },
  titulouso: {
    color: "#1F184B",
    fontWeight: "bold",
    fontSize: 26,
    paddingLeft: 50,
    textAlign: "left",
  },
  titulousomor: {
    color: "#622FAE",
    fontWeight: "bold",
    fontSize: 26,
    paddingLeft: 50,
    textAlign: "left",
  },
  parrafo: {
    color: "#6D6D6D",
    textAlign: "center",
    paddingLeft: 50,
    fontSize: "medium",
    textAlign: "left",
    paddingBottom: 20,
  },
  parrafobold: {
    color: "#6D6D6D",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 50,
    fontSize: "medium",
    textAlign: "left",
    paddingBottom: 20,
  },
  parrafoboldn: {
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 50,
    fontSize: "1.5vw",
    textAlign: "left",
    paddingBottom: 10,
    paddingTop: 20,
  },
  txtinput: {
    height: "20%",
    width: "80%",
    alignItems: "flex-start",
    padding: 10,
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  logo: {
    height: "4vw",
    width: "18vw",
    paddingLeft: 20,
    paddingTop: 10,
  },
  elementxt: {
    height: 40,
    width: 200,
    backgroundColor: "#F5F5F5",
    borderWidth: 0,
    borderRadius: 10,
    paddingStart: 20,
    marginRight: 50,
    marginTop: 10,
  },
  btnsesion1: {
    marginRight: 50,
    marginTop: 10,
    textShadowColor: "#8828FF",
    borderWidth: 1,
    borderColor: "#8828FF",
    height: 35,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  btnsesion2: {
    backgroundColor: "#8828FF",
    height: 35,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 50,
    marginTop: 10,
    paddingTop: 5,
  },
  correobold: {
    color: "#1F184B",
    fontWeight: "bold",
    fontSize: 18,
  },
  correo: {
    position: "relative",
    top: "-49%",
    left: "80%",
  },
  correof: {
    position: "relative",
    top: "5%",
    left: "40%",
  },
  txtbtn1: {
    color: "#8828FF",
    fontWeight: "bold",
  },
  txtbtn2: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  righside: {
    display: "flex",
      
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10,
    height: 80,
  },
  imgsize: {
    width: 25,
    height: 20,
    marginTop: 8,
    position: "relative",
    top: 10,
    left: -20,
  },
  imgsize3: {
    width: 10,
    height: 10,
    marginTop: 8,
    position: "relative",
    top: 10,
    left: -40,
  },
  smallScreenContainer: {
    flexDirection: "column",
  },
  contenedorseccion1: {
    height: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "-6vw",
    flexDirection: "row",
    paddingTop: 0,
  },
  contenedorseccion2: {
    height: "5%",
    width: "80vw",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    paddingLeft: "10vw",
    marginTop: "0vw",
  },
});
