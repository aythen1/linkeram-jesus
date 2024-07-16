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

const { width } = Dimensions.get("window");

const TermsandPrivacy = () => {
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

            <TouchableOpacity style={styles.btnsesion1}>
              <Text style={styles.txtbtn1}>Iniciar sesión</Text>
            </TouchableOpacity>
            <Image resizeMode="cover" source={link} style={styles.imgsize} />
            <TouchableOpacity style={styles.btnsesion2}>
              <Text style={styles.txtbtn2}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contenedorseccion1}>
          <TextInput placeholder="Español (ES)" style={styles.txtinput} />
        </View>
        <View style={styles.contenedorseccion2}>
          <FlatList
            data={datamenu}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={{ height: 15 }}>
                {item.id == "7" ? (
                  <Text style={styles.tituloartbold}>{item.title}</Text>
                ) : (
                  <Text style={styles.tituloart}>{item.title}</Text>
                )}
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={styles.logo}>
          <ImageBackground
            source={logo}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          >
            <View></View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.correo}>
        <Text style={styles.correobold}>info.linkeram@gmail.com</Text>
      </View>
      <View style={styles.padre}>
        <View style={styles.terminos}>
          <View style={styles.alturaheight}>
            {terminos.map((term, index) => (
              <View key={index}>
                {term.id === 1 ? (
                  <Text style={styles.tituloh1}>{term.title}</Text>
                ) : (
                  <Text style={styles.titulouso}>{term.title}</Text>
                )}{" "}
                <Text style={styles.parrafo}>{term.contenido}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsandPrivacy;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },
  contenedor: {
    height: "65%",
    width: "100vw",
    alignItems: "flex-start",
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
  terminos: {
    width: "70%",
    paddingBottom: 100,
  },
  alturaheight: {
    marginTop: "0vw",
    position: "relative",
    top: "-30vw",
  },
  titulouso: {
    color: "#1F184B",
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
  txtinput: {
    height: "20%",
    width: "80%",
    alignItems: "flex-start",
    padding: 10,
    marginTop: 120,
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
    position: "fixed",
    top: 0,
    right: 0,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10,
  },
  imgsize: {
    width: 25,
    height: 20,
    marginTop: 8,
    position: "relative",
    top: 10,
    left: -20,
  },
  smallScreenContainer: {
    flexDirection: "column",
  },
  contenedorseccion1: {
    height: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "center",

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
    marginLeft: "15vw",
    marginTop: "3vw",
  },
});
