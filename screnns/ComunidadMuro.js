import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,  
  Dimensions,
  ScrollView,
  FlatList,    
  Modal,
} from "react-native";
import React, {  useState } from "react";
import logo from "../assets/logo.png";
import { data2 } from "../constants/barmenu2";
import { datanotif } from "../constants/datanotif";
import { data3 } from "../constants/barmenu3";
import  link1  from  "../assets/bell.png";
import  link2  from  "../assets/Ellipse.png";
import  link3  from  "../assets/menu.png";
import  link4  from  "../assets/menu.png";
import  crearbtn  from  "../assets/crearbtn.png";
import bgimg from "../assets/Ellipsef.png";
import Textos from "../components/Textos";
import Entradatxt from "../components/Entradatxt";
import switchd from "../assets/ajustes.png";
import cand from "../assets/settings.png";
import cand2 from "../assets/power.png";
import dos from "../assets/dos.png";
import homelog from "../assets/homelog.png";
import credidcard from "../assets/credidcard.png";
import credidcard2 from "../assets/papelera.png";
import tarje from "../assets/card1.png";

import logo1 from "../assets/logos_stripe.png";
import logo2 from "../assets/logo_paypal.png";
import logo3 from "../assets/logos_google-pay.png";
import logo4 from "../assets/pay.png";
import candimg from "../assets/solar_feed-outline.png";
import candimg2 from "../assets/users2.png";
import candimg3 from "../assets/user-plus.png";
import imgpersona from "../assets/fotoprinc.png";
import { muro1 } from "../constants/muro1";
import link from "../assets/link2.png";
import barraslices from "../assets/barraslices.png";
import Postsocial from "../components/Postsocial";


const { width } = Dimensions.get("window");

const CommunityWall = () => {

  
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
      {([3].includes(item.id)) && (
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
                
                data={data3}
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
           
            <View style={styles.seccion3}>
            

            
            <View style={styles.comunidad}>

              
              <View style={styles.slice1}>
             
              <ImageBackground

source={candimg}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Comunidad</Text>
                    

              </View>
              <View style={styles.slice2}>

              <ImageBackground

source={candimg2}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Personas</Text>
                    

              </View>
              <View style={styles.slice3}>

              <ImageBackground

source={candimg3}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Solicitudes</Text>
                    

              </View>
              </View>

              <View style={styles.alturaheight2}>
            {muro1.map((term, index) => (
              <View key={term.id}>

               <Postsocial iditem={term.id} contenido={term.contenido} subtitle={term.subtitle} subtitulo={term.subtitulo} titulosub1={term.titulosub1} instacomen={term.instacomen} instacount={term.instacount} imginsta={term.imginsta} imgframe={term.imgframe} id={term.id} txtlinl={term.txtlinl} image={term.image} fotopersonal={term.fotopersonal} title={term.title} redsocial={term.social} time={term.time}/>                           
               
                 
          
                
              </View>
            ))}
          </View>


            </View>
   
          
            </View>

            

            
          </View>
        </View>

       

      
        
      
    </ScrollView>
  );
};

export default CommunityWall;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },   
  titulosub1css1:{
    color: "#1F184B",
    position: 'relative',
    top: '1.2vw',
  },
  titulosub1css:{
    color: "#1F184B",
    fontWeight: 'bold',
    marginTop: '3vw',
    fontSize: 16
  },
  titulosub1css:{
    color: "#1F184B",
    fontWeight: 'bold',
    marginTop: '3vw',
    fontSize: 16
  },
  
  instacountcss:{
    color: "#1F184B",
    position: 'relative',
    left: '2vw',
    top: '0.5vw',
  },
  instacountcss2:{
    color: "#1F184B",
    position: 'relative',
    left: '90%',
    top: '-2.5vw',
  },
  boldTextsocial:{
    color: "#C3C3C3",
  },
  boldTexttime:{
    color: "#C3C3C3",
    position: 'relative',
    left: '80%',
    top: '-1vw',
  },
  boldTextbol:{
    color: "#622FAE",
    fontWeight: 'bold',
  },
  titulosub1css2:{
    color: "#1F184B",
    
    fontSize: 13,
  },
  titulouso:{
    color: '#18204B',
  },
  comunidad:{
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70.71vw',
    height: 43,
    marginLeft: '3vw',
    
  },
  txtlink:{
    color: '#1F184B',
    fontWeight: 'bold',
     position: 'relative',
     top: '-1vw',
  },
  slice1:{
      width: '10.83vw',
      height: 43,
  },
  slice2:{
    width: '10.83vw',
    height: 43,
  },
  slice3:{
  width: '10.83vw',
  height: 43,
  },
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarje1:{
    backgroundColor: "#F6F6F6",
    width: "50%",
    marginLeft: '1vw',
    flexDirection: 'row',
    height: '5vw',
    paddingLeft: '1vw',
    paddingTop: '0vw',
    alignItems: 'center',
  },
  tarje2:{
    backgroundColor: "#F6F6F6",
    height: '5vw',
    width: "50%",
    marginLeft: '1vw',
    paddingLeft: '1vw',
    paddingTop: '0vw',
    alignItems: 'center',
    flexDirection: 'row',
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
    width: '35vw',
    position: 'relative',
    top: '0vw',
    left: '-2vw',
  },
  viewstile2:{    
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    width: 100,
    height: 100,
    
  },  
  txtestilo:{
    color: '#622FAE',
    fontWeight: 'bold',
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
  modalContainer2: {
    width: 700,
    height: 430,
    paddingTop: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 0,
    justifyContent: 'top',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: "#1F184B",
    width: '37vw',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    position: 'relative',
    top: '-15vw',
    left: '22vw',
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
  btnGuardar:{
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1F184B',
    borderRadius: 5,    
    position: 'relative',
    top: '10vw',
    width: '42vw',
    left: '2vw',
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
    fontSize: 13,
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
  bell192:{
    position: 'relative',
    left: '-18vw',
    width: 300,
    height: 105,
    top: -15,
    borderRadius: '3vw',
  },
  bell20:{
    position: 'relative',
    left: '5vw',
    width: 25,
    height: 32,
    top: '-2vw',
    borderRadius: '2vw',
  },
  bellframe: {
    position: 'relative',    
    left: '0vw',
    marginRight: '1vw',
    width: '65.59vw',
    height: 197,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor: "#F6F6F6",
    
    top: '1vw',
  },  
  bellframe4: {
    position: 'relative',    
    left: '0vw',
    marginRight: '1vw',
    width: '65.59vw',
    height: 394,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor: "#F6F6F6",
    
    top: '1vw',
  },  
  bell22: {
    position: 'relative',    
    left: '-15vw',
    marginRight: '1vw',
    width: 105,
    height: '7vh',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor: "#F6F6F6",
    
    top: '1vw',
  },
  imginstacss: {
    position: 'relative',    
    left: '0vw',
    marginRight: '1vw',
    width: 18,
    height: 16,        
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor: "#F6F6F6",
    
    top: '2vw',
  },
  imginstacss2: {
    position: 'relative',    
    left: '60vw',
    marginRight: '1vw',
    width: 18,
    height: 18,        
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor: "#F6F6F6",
    
    top: '-1vw',
  },
  img: {
    maxHeight: '100%', // Asegúrate de que la imagen no sobrepase el contenedor
    maxWidth: '100%', // Asegúrate de que la imagen no sobrepase el contenedor
  },
  bell23:{
    position: 'relative',
    left: '0vw',
    width: 45,
    height: 46,
    top: '0vw',    
    borderRadius: '2vw',
  },
  bell25:{
    position: 'relative',
    left: '-2.5vw',
    width: 26,
    height: 26,
    top: '0.5vw',    
    
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
  height: 25, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 30,
  left: -30,
},
bell24:{
  width: 46,
  height: 45, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 20,
  left: 0,
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
  alturaheight2: {
    
    display: 'flex',
    flexDirection: width < 750 ? 'column' : 'column',
    justifyContent: 'left',
    paddingLeft: '5vw',
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
