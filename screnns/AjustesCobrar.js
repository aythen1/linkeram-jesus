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
  Row,
  Table,
  Slider,
  Animated,
  Modal,
} from "react-native";
import React, {  useState } from "react";
import logo from "../assets/logo.png";
import link from "../assets/link.png";
import { ayudas } from "../constants/ayuda";
import { datamenu } from "../constants/datamenu";
import { data } from "../constants/barmenu";
import { data2 } from "../constants/barmenu2";
import { datanotif } from "../constants/datanotif";
import  link1  from  "../assets/bell.png";
import  link2  from  "../assets/Ellipse.png";
import  link3  from  "../assets/menu.png";
import  link4  from  "../assets/menu.png";
import  crearbtn  from  "../assets/crearbtn.png";
import bgimg from "../assets/Ellipsef.png";
import Textos from "../components/Textos";
import Entradatxt from "../components/Entradatxt";
import bgimginsta from '../assets/instagram.png';
import bginfo from '../assets/info.png';
import verf from '../assets/iconverde.png';
import toggle from '../assets/ggle.png';
import eye from "../assets/eye.png";
import vatar from "../assets/vatar.png"; 
import switchd from "../assets/ajustes.png";
import cand from "../assets/settings.png";
import cand2 from "../assets/power.png";
import tglee from "../assets/ggle.png";
import tglee2 from "../assets/ggle2.png";
import Toogle from "../components/Toggle";
import Toogleon from "../components/Toggleon";
import dos from "../assets/dos.png";
import Listados from "../components/Listados";
import imgtarjeta from "../assets/credito.png";
import imgtarjeta12 from "../assets/credito.png";
import imgtarjeta13 from "../assets/credit2.png";
import imgtarjeta14 from "../assets/credit3.png";
import imgtarjetaedit from "../assets/edit-3.png"
import imgtarjetasav from "../assets/trash-2.png"
import { CarouselSlider } from "react-native-carousel-image-slider";
import mousepunt from "../assets/mousemov.png";
import stripe from "../assets/stripe.png";
import homelog from "../assets/homelog.png";
import mas from "../assets/plus-circle.png";
import credidcard from "../assets/credidcard.png";
import credidcard2 from "../assets/papelera.png";
import tarje from "../assets/card1.png";
import modo1 from "../assets/fram1.png";
import modo2 from "../assets/fram2.png";
import modo3 from "../assets/fram3.png";
import modo4 from "../assets/fram4.png";




const { width } = Dimensions.get("window");

const AjustesCobrar = () => {

  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  
  const renderItem = ({ item }) => {
    return (
      <View>
      <Text style={styles.nombre}>{item.name}</Text>        
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={{ width: 24, height: 24 }}
      />
      {([3, 4, 5, 6].includes(item.id)) && (
        <ImageBackground
          source={dos}
          resizeMode="cover"
          style={{ width: 20, height: 20, position: 'absolute', left: '14vw',top:'1vw' }}
        />
      )}
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
          <View  style={styles.alturaheight}>
            <View style={[styles.seccion1, width < 750 ? null : null]}>            
            <ImageBackground
              source={homelog}
              resizeMode="cover"
              style={{ width: 44, height: 44, position: 'relative', top: '3vw', left: '15vw' }}
            />


          
            
              <FlatList
                
                data={data2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
              
            <TouchableOpacity style={styles.crearboton}> <ImageBackground

source={crearbtn}
resizeMode="cover"
style={styles.bell2}
>
<View></View>
</ImageBackground><Text style={styles.txtcrear}> Crear </Text></TouchableOpacity>

<View style={styles.vistacont}>
<Text>12GB de 15GB usados</Text>
<ImageBackground

source={switchd}
resizeMode="cover"
style={styles.bell8}
>
<View></View>
</ImageBackground>

<ImageBackground

source={cand}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Ajustes</Text>


<ImageBackground

source={cand2}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Cerrar sesión</Text>

</View>

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
            
              <Text style={styles.labeltxt}>Editar</Text>
              <ImageBackground

              source={credidcard2}
              resizeMode="cover"
              style={styles.bell20}
              />
                     
              <ImageBackground

              source={credidcard}
              resizeMode="cover"
              style={styles.bell19}
              />
               

                      
<View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                          
                          <Textos txt="Titular de la tarjeta" style={styles.labeltxtmin}/>
                          <Textos txt="Número de la tarjeta" style={styles.labeltxtmin}/>
                         
                          </View>
                          <View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                                      
                                   <Entradatxt pholder="Andrew Boston" style={styles.entrada}/>
                                   <Entradatxt pholder="**** **** **** 3282 " style={styles.entrada}/>
                          </View>

                          
                          

                          <View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                          
                          <Textos txt="Fecha de vencimiento" style={styles.labeltxtmin}/>
                          <Textos txt="Código de seguridad" style={styles.labeltxtmin}/>

                          </View>
                        <View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                                      
                                   <Entradatxt pholder="12/33" style={styles.entrada}/>
                                   <Entradatxt pholder="***" style={styles.entrada}/>
                          </View>
   
                          <View style={styles.containers}>
      <Modal
        animationType="slide"
        transparent={true} 
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Agregar método de pago</Text>
<View style={styles.viewstile}>
            <ImageBackground

              source={tarje}
              resizeMode="cover"
              style={styles.bell23}
              
              />
              <Textos txt="Tarjeta de Débito" style={styles.txtestilo}></Textos>
              
              <ImageBackground

              source={tarje}
              resizeMode="cover"
              style={styles.bell23}
              
              />
              <Textos txt="Tarjeta de Crédito" style={styles.txtestilo}></Textos>
              </View>
              <View style={styles.viewstile2}>
              <ImageBackground

              source={modo1}
              resizeMode="cover"
              style={styles.bell22}

              />

              <ImageBackground

                            source={modo2}
                            resizeMode="cover"
                            style={styles.bell22}
                            
                            />


              <ImageBackground

              source={modo3}
              resizeMode="cover"
              style={styles.bell22}

              />

              <ImageBackground

                            source={modo4}
                            resizeMode="cover"
                            style={styles.bell22}
                            
                            />


              

              </View>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.btnCancel} onPress={() => setModalVisible2(true)}>
        <Text style={styles.text1}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSave} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>



    <View style={styles.containers}>
      <Modal
        animationType="slide"
        transparent={true} 
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Cargar datos</Text>
<View style={styles.viewstile}>
            
              </View>
              <View style={styles.viewstile2}>
              <ImageBackground

source={credidcard2}
resizeMode="cover"
style={styles.bell20}
/>
       
<ImageBackground

source={credidcard}
resizeMode="cover"
style={styles.bell19}
/>
 

        
<View style={{marginTop: 40, display: 'flex', position: 'relative', left: '-35vw', justifyContent: 'left', flexDirection: 'row',}}>
            
            <Textos txt="Titular de la tarjeta" style={styles.labeltxtmin}/>
            <Textos txt="Número de la tarjeta" style={styles.labeltxtmin}/>
           
            </View>
            <View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                        
                     <Entradatxt pholder="Andrew Boston" style={styles.entrada}/>
                     <Entradatxt pholder="**** **** **** 3282 " style={styles.entrada}/>
            </View>

            <View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                          
                          <Textos txt="Fecha de vencimiento" style={styles.labeltxtmin}/>
                          <Textos txt="Código de seguridad" style={styles.labeltxtmin}/>

                          </View>
                        <View style={{marginTop: 40, display: 'flex', justifyContent: 'left', flexDirection: 'row',}}>
                                      
                                   <Entradatxt pholder="12/33" style={styles.entrada}/>
                                   <Entradatxt pholder="***" style={styles.entrada}/>
                          </View>

              </View>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible2(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    
    </View>


            </View>
   
          
            </View>

            

            
          </View>
        </View>

       

      
        
      
    </ScrollView>
  );
};

export default AjustesCobrar;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },   
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    padding: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  viewstile:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30vw',
    position: 'relative',
    top: '0vw',
    left: '-2vw',
  },
  viewstile2:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30vw',
    position: 'relative',
    top: '1vw',
    left: '-2vw',
  },
  txtestilo:{
    color: '#622FAE',
    fontSize: 16,
  },
  modalContainer: {
    width: 500,
    height: 320,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: "#1F184B",
    width: '30vw',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
  btnCancel: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  btnSave: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
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
    bell10:{
    position: 'relative',
    top: 6,
    width: 32,
    height: 32,
    left: '35vw',
    borderRadius: '2vw',
  },     
  estiloscont:{
    display: 'flex',   
    justifyContent: 'left',
    flexDirection: 'row',
   },   
   containers: {
   
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 'inherit',
    marginTop: 200,
    
   
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
  labeltxtmin:{
    color: "#1F184B",
    fontSize: 15,
    textAlign: 'left',
    width: '25vw',
    fontWeight: 'bold',
    marginTop: 10,
    
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
  bell15:{
    position: 'relative',
    top: 6,
    width: 32,
    height: 32,
    left: '46vw',
    borderRadius: '2vw',
  },     
  bell16:{
    position: 'relative',
    top: -20,
    width: 22,
    height: 22,
    left: '49vw',
    borderRadius: '2vw',
  },       
  bell17:{
    position: 'relative',
    top: 40,
    width: 22,
    height: 22,
    left: '39vw',
    borderRadius: '2vw',
  },   
  estiloscont2: {
    
    padding: 0,
    margin: 0,
    width: '60vw',
},
box: {
    margin: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
},
  bell11:{
    position: 'relative',
    left: '36vw',
    width: 22,
    height: 22,
    top: 8,
    borderRadius: '2vw',
  },
  bell12:{
    position: 'relative',
    left: '0vw',
    width: 405,
    height: 251,
    top: 8,
    borderRadius: '2vw',
  },
  bell13:{
    position: 'relative',
    
    width: 44,
    height: 44,
    top: 160,
    left: '47vw',
    borderRadius: '2vw',
    zIndex: 100,
  },  
  bell18:{
    position: 'relative',
    left: '-25vw',
    width: 405,
    height: 251,
    top: 30,
    borderRadius: '2vw',
  },  
  bell19:{
    position: 'relative',
    left: '0vw',
    width: 405,
    height: 135,
    top: 30,
    borderRadius: '2vw',
  },
  bell20:{
    position: 'relative',
    left: '45vw',
    width: 25,
    height: 32,
    top: '-2vw',

    borderRadius: '2vw',
  },
  bell22:{
    position: 'relative',
    left: '0vw',
    width: '8vw',
    height: '7vw',
    top: '0vw',

    borderRadius: '2vw',
  },
  bell23:{
    position: 'relative',
    left: '0vw',
    width: 45,
    height: 46,
    top: '0vw',    
    borderRadius: '2vw',
  },
   labeltxt:{
    color: "#1F184B",
    fontSize: 18,
    textAlign: 'left',
    width: '20vw',    
    fontWeight: 'bold',
    marginTop: 10,    
    paddingLeft: 3,
  },
  labeltxt3:{
   color: "#1F184B",
   fontSize: 18,
   textAlign: 'left',
   width: '60vw',    
   fontWeight: 'bold',
   marginTop: 15,    
   paddingLeft: 3,
   position: 'relative',
   left: '41vw',
 },   
   labeltxtp3:{
    color: "#1F184B",
    fontSize: 16,

    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    position: 'relative',
    top: '-2vw',
    left: '12vw',
    
  },labeltxtp34:{
    color: "#1F184B",
    fontSize: 16,

    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    position: 'relative',
    top: '-3.5vw',
    left: '42vw',
    
  },         
  estiloscont:{
   display: 'flex',  
   height: '5vw', 
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
   bell2:{
    width: 32,
    height: 32, 
    position: 'relative',
    paddingLeft: 30,
    paddingRight: 30,
    top: 10,
    left: 8,
 },
bell8:{
  width: 192,
  height: 31, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 0,
  left: -10,
},
bell9:{
  width: "80%",
  height: "15vw", 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 50,
  left: -150,
},
bell14:{
  width: 24,
  height: 24, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 20,
  left: -30,
},
vistacont:{
position: 'relative',
top: width < 750 ? '2vw' : '20vw',
left: 40,
},
  contenedor: {
    height: "65%",
    width: "100vw",
    alignItems: "flex-start",
  },
  seccion1:{    
    
    height: 'max-content',
    width: width < 750 ? "100%" : "20%",
    marginLeft:  width < 750 ? '14vw' : '3vw',
    
  },
  seccion2:{
 
    width: width < 750 ? "100%" : "20%",    
    marginLeft:  width < 750 ? '14vw' : '3vw',
  },
  seccionconten:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "55vw",    
    height: '20vw',
    backgroundColor: "#cccccc",
    marginTop: '3vw',
    
   
  },
  seccionconten2:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "55vw",    
    height: '20vw',
    
    
   
  },
  seccion3:{
    height: '70vw',  
    width: width < 750 ? "100%" : "65%",
    marginLeft:  width < 750 ? '14vw' : '3vw',
  }, 
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ajustes: {
    width: "100%",
    height: 100,
    paddingBottom: 100,
  },
  alturaheight: {
    
    display: 'flex',
    flexDirection: width < 750 ? 'column' : 'row',
    justifyContent: 'left',
    height: '50vw',
    width: '100%',
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
  righside: {
    display: "flex",
      
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10,
    height: 80,
  }, 
  smallScreenContainer: {   
    flexDirection: "column",
  },
});
