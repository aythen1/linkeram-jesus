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

const { width } = Dimensions.get("window");

const AjustesPrivacidad = () => {

  const [selectedValue, setSelectedValue] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };


  const [password3, setPassword3] = useState("");
  const [showPassword3, setShowPassword3] = useState(false);

  const toggleShowPassword3= () => {
    setShowPassword3(!showPassword3);
  };


  

  
 



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
style={styles.bell9}
>
<View></View>
</ImageBackground>
<Text>Ajustes</Text>


<ImageBackground

source={cand2}
resizeMode="cover"
style={styles.bell9}
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
              <Text style={styles.labeltxt}>Notificaciones de cuenta</Text>
             

              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando los usuarios que sigues publiquen contenido.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text> 
              
              <Toogle/>     
              
              <Text style={styles.labeltxtc}>Notifiación push</Text>
             
              <Toogleon/>

              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando hagas una compra en la plataforma.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text>  
              <Toogle/>               
              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/> 


              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando tengas un nuevo seguidor o solicitud de seguimiento.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text> 
              <Toogle/>   
                  
              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/>
              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando hagas una compra en la plataforma.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text>  
              <Toogle/>  
                

              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/>

              


              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando un campo haya alcanzado el límite de acceso, de compra o de descarga.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text>  

              <Toogle/>
              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/>

              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando tengas un nuevo seguidor o solicitud de seguimiento.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text>              
              <Toogle/>  
             

              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/>

              

              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando tus amigos de Instagram creen una cuenta en Linkeram.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text>              
              <Toogle/>
              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/>
              <Text style={styles.labeltxt2}>Recibirás notificaciones cuando alguien se suscriba a tu NewsLetter.</Text>
              <Text style={styles.labeltxtc}>Notificaciones vía mail</Text>              
              <Toogle/>
              <Text style={styles.labeltxtc}>Notifiación push</Text>
              <Toogleon/>

                   <View style={styles.estiloscont}>

                                  
                                                                                                          
                          
            <View style={styles.containers}>
            <TouchableOpacity style={styles.btnCancel} >
              <Text style={styles.text1}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSave}>
              <Text style={styles.text}>Guardar cambios</Text>
            </TouchableOpacity>
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
  left: 250,
},
bell4:{
  width: 24,
  height: 24, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 3,
  left: 0,
},
bell5:{
  width: 16,
  height: 15, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 15,
  left: -85,
},
bell6:{
  width: 44,
  height: 24, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 15,
  left: 10,
},
bell7:{
  width: 52,
  height: 52, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 5,
  left: -10,
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
  width: 24,
  height: 24, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 20,
  left: -30,
},
bell10:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,  
  top: 100,
  left: '40vw',
},
bell11:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 70,
  left: '40vw',
},
bell12:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 100,
  left: '40vw',
},
bell13:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 190,
  left: '40vw',
},
bell14:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 160,
  left: '40vw',
},
bell15:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 250,
  left: '40vw',
},
bell16:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 285,
  left: '40vw',
},
bell17:{
  width: 44,
  height: 24, 
  position: 'absolute',
  paddingLeft: 30,
  paddingRight: 0,
  top: 250,
  left: '40vw',
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
    
   
    width: width < 750 ? "100%" : "20%",
    marginLeft:  width < 750 ? '14vw' : '3vw',
    
  },
  seccion2:{
 
    width: width < 750 ? "100%" : "20%",    
    marginLeft:  width < 750 ? '14vw' : '3vw',
  },
  seccion3:{
     
    width: width < 750 ? "100%" : "65%",
    marginLeft:  width < 750 ? '14vw' : '3vw',
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
    flexDirection: width < 750 ? 'column' : 'row',
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
