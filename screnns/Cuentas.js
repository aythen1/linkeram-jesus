import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React  from "react";
import logo from "../assets/logo.png";
import { Table, Row, Rows } from 'react-native-table-component';
import tableHead from "../constants/datanotif"
import Listados from "../components/Listados";

const { width } = Dimensions.get("window");



const Cuentas = () => {

  const datamenu = [
    { id: 1, title: "Registrarse" },
    { id: 2, title: "Iniciar Sesión" },
    { id: 3, title: "Buscador" },
    { id: 4, title: "Sobre Nosotros" },
    { id: 5, title: "Planes" },
    { id: 6, title: "Centro de Ayuda" },
    { id: 7, title: "Términos y Políticas" },
  ];
  

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

          
        </View>
       

    
      </View>

      
      <View style={styles.padre}>
        
           <Text style={styles.tituloh1}>Añade tus Cuentas</Text>
           <Text style={styles.parrafo}>Integra Linkeram con otras plataformas para potenciar la productividad!</Text>
           <Table style={styles.tablast} >
           <View style={styles.seccionconten}>
              
              <Text style={styles.labeltxtp22}>Todo</Text>
              <Text style={styles.labeltxtp2}>Google</Text>
              <Text style={styles.labeltxtp2}>Mensajeria</Text>
              <Text style={styles.labeltxtp2}>Redes Sociales</Text>
              <Text style={styles.labeltxtp2}>E commerce</Text>
              </View>

            <Row  data={tableHead} style={styles.head} textStyle={styles.text}/>            
            <Listados />
            <View style={styles.containers}>
            <TouchableOpacity style={styles.btnCancel} >
              <Text style={styles.text1}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSave}>
              <Text style={styles.text}>Guardar cambios</Text>
            </TouchableOpacity>
            </View>
          </Table>

          
          

      </View>
    </ScrollView>
  );
};

export default Cuentas;


const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },
  labeltxtp2:{
    color: "#1F184B",
    fontSize: 16,
    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    marginTop: 10,
    
  },   
  seccionconten:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "50vw",    
    
   
  },
  labeltxtp22:{
    color: "#1F184B",
    fontSize: 16,
    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: "#1F184B",
    marginTop: 10,    
  }, 
  containers: {
   
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
   
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
  },
  btnSave: {
    backgroundColor: '#1F184B',
    color: '#ffffff',
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 250,
    textAlign: 'center', 
  },
  text: {
    fontSize: 16,
    color: '#fff',  
    textAlign: 'center',
  },
  contenedor: {
    height: "25%",
    width: "100vw",
    alignItems: "flex-start",
  },  
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
  },
  head: { 
    height: 40, 
    
  },
  text1: { 
    margin: 6 ,
    color: "#1F184B",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center',
  },
  tituloh1: {
    color: "#5F54A4",
    fontWeight: "bold",
    fontSize: 36,
    paddingLeft: 50,
    textAlign: "left",
  },
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    width: '65vw',
    paddingLeft: 140,
    marginLeft: 150,
    paddingTop: 0,
  },
    logo: {
    height: "4vw",
    width: "18vw",
    paddingLeft: 20,
    paddingTop: 10,
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
   smallScreenContainer: {
    flexDirection: "column",
  },
  });
