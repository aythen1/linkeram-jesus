import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import logoimg from "../assets/logo.png";
import presentacion from "../assets/presentacion.png";
import icocorreo from "../assets/correo.png";
import imgvolver from "../assets/arrow-left.png";
import { datamenu } from "../constants/datamenu";

const { width } = Dimensions.get("window");

const Activated = () => {
  


  return (
    <ScrollView>
      <View style={styles.contenedor}>
        <View style={styles.vistapresentacion}>
          <Image
            resizeMode="cover"
            source={presentacion}
            style={styles.imgsize2}
          />
        </View>

        <View style={styles.singupseccion1}>
          <View style={styles.volverdiv}>
            <Text style={styles.txtvolver}>
              <Image
                resizeMode="cover"
                source={imgvolver}
                style={styles.volverimg}
              />
              Volver
            </Text>
          </View>
          <Image resizeMode="cover" source={logoimg} style={styles.logo} />

          <Text style={styles.txtgooglellave}>
            <Image
              resizeMode="cover"
              source={icocorreo}
              style={styles.imgsize3lla}
            />{" "}
          </Text>

          <Text style={styles.text}>Código enviado</Text>
          <Text style={styles.txtnormalcent}>
            {" "}
            Por favor, revisa tu casilla de correo. Enviamos un código de
            activación de cuenta.{" "}
          </Text>
          <Text style={styles.txtnormalcent}> johndoe@mail.com </Text>

          <View style={styles.vistaflx}>
            <TextInput style={styles.btnsesion3} placeholder="-" />
            <TextInput style={styles.btnsesion3} placeholder="-" />
            <TextInput style={styles.btnsesion3} placeholder="-" />
            <TextInput style={styles.btnsesion3} placeholder="-" />
            <TextInput style={styles.btnsesion3} placeholder="-" />
            <TextInput style={styles.btnsesion3} placeholder="-" />
          </View>
          <Text style={styles.txtnormalcent2}> Resend </Text>

          <View>
            <TouchableOpacity style={styles.btnsesion4}>
              <Text style={styles.txtbtn3}>Verificar</Text>
            </TouchableOpacity>
            <View style={styles.contenopc2}>
              <Text style={styles.txtnormalcent}>
                {" "}
                Para ayudar a mantener tu cuenta segura, Linkeram quiere
                asegurarse que realmente estás tratando de iniciar sesión.{" "}
              </Text>
            </View>
          </View>
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
              <Text style={styles.tituloart}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Activated;

const styles = StyleSheet.create({
  txtbtn3: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  volverdiv: {
    width: "25vw",
    marginLeft: "3.5vw",
    marginTop: "0vw",
    position: "relative",
    top: 10,
  },
  vistaflx: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "-18vw",
    flexDirection: "row",
  },
  txtvolver: {
    color: "#1F1819",
    fontSize: 20,
    paddingBottom: 30,
  },
  volverimg: {
    position: "relative",
    top: 10,
  },
  logo: {
    height: 36,
    width: 180,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "25vw",
    position: "relative",
    top: "-3vw",
  },
  imgsize2: {
    width: "50vw",
    height: "50vw",
    position: "relative",
    top: "-5vw",
    left: "12vw",
  },
  tituloart: {
    marginLeft: "3vw",
  },  
  contenopc: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "60%",
  },
  contenopc2: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "60%",
    marginTop: 0,
  },
  btnsesion4: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#5F54A4",
    height: 50,
    width: "25vw",
    paddingStart: 30,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 50,
    marginBottom: 30,
    marginLeft: 50,
    marginTop: 10,
    paddingTop: 5,
    placeholderTextColor: "#C3C3C3",
  },
  txtnormal: {
    color: "#1F184B",
    textAlign: "center",
  },
  txtnormalr: {
    color: "#1F184B",
    textAlign: "center",
    fontSize: 9,
    marginLeft: 130,
    marginTop: -26,
    lineHeight: 35,
  },
  txtnormalck: {
    color: "#1F184B",
    textAlign: "left",
    paddingLeft: 5,
    justifyContent: "center",
  },
  txtnormalcent: {
    color: "#1F184B",
    textAlign: "center",
    width: "28vw",
    marginLeft: 30,
  },
  txtnormalcent2: {
    color: "#cccccc",
    textAlign: "right",
    width: "28vw",
    marginLeft: -50,
  },
  txtnormal2: {
    color: "#1F184B",
    paddingStart: 30,
    fontSize: 16,
  },
  txtnormalbold: {
    color: "#1F184B",
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
    color: "#1F184B",
    textAlign: "center",
    width: "30vw",
    fontWeight: "bold",
  },
  btnsesion3: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    height: 30,
    width: "2.2vw",
    paddingStart: 0,
    justifyContent: "center",
    borderRadius: 5,
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 0,
    marginLeft: "-5vw",
    marginTop: 10,
    paddingTop: 10,
    placeholderTextColor: "#C3C3C3",
  },  
  imgsize3lla: {
    position: "relative",
    top: 6,
    width: 50,
    textAlign: "center",
    height: 50,
    marginLeft: 30,
  },
  imgsize3: {
    position: "relative",
    top: 6,
    width: 25,
    textAlign: "center",
    height: 25,
    marginLeft: "75%",
  },
  vistapresentacion: {
    width: "60vw",
    height: "10%",
  },
  singupseccion1: {
    width: "60vw",
    height: "30vw",

    flex: 1,
    alignItems: "left",
    paddingLeft: "5vw",
    paddingTop: "5vw",
  },

  txtgoogle: {
    fontSize: 16,

    marginLeft: 100,
    marginBottom: 4,
  },
  txtgooglellave: {
    fontSize: 16,

    marginLeft: 160,
    marginBottom: 4,
  },

  contenedor: {
    width: "100%",
    height: "5%",
    paddingBottom: 100,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },

  txtinput: {
    height: "20%",
    width: "80%",
    alignItems: "flex-start",
    padding: 10,
    marginTop: -200,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },

  smallScreenContainer: {
    flexDirection: "column",
  },
  contenedorseccion1: {
    height: "0%",
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
    marginLeft: "25vw",
    marginTop: "-10vw",
  },
});
