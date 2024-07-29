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
import { data } from "../constants/barmenu";
import { datanotif } from "../constants/datanotif";
import  link1  from  "../assets/bell.png";
import  link2  from  "../assets/Ellipse.png";
import  link3  from  "../assets/menu.png";
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
import dos from "../assets/dos.png";
import homelog from "../assets/homelog.png";


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
            
            <ImageBackground
              source={homelog}
              resizeMode="cover"
              style={{ width: 44, height: 44, position: 'relative', top: '3vw', left: '15vw' }}
            />


              <FlatList
                data={data}
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
            <Text style={styles.labeltxt}>Administrar Cuenta</Text>
              <ImageBackground

              source={bgimg}
              resizeMode="cover"
              style={styles.bell3}
              >
                  <Textos txt="AB" style={styles.labeltxt3}/>
              <View></View>
              </ImageBackground>
              <View style={styles.estiloscont}>
                          
              <Textos txt="Nombre" style={styles.labeltxtmin}/>
              <Textos txt="Apellido" style={styles.labeltxtmin}/>
             
              </View>
              <View style={styles.estiloscont}>
                          
                       <Entradatxt pholder="Andrew" style={styles.entrada}/>
                       <Entradatxt pholder="Boston" style={styles.entrada}/>
              </View>
              <View style={styles.estiloscont}>
                          
              <Textos txt="Nombre Empresa" style={styles.labeltxtmin}/>
             
             
              </View>
              <View style={styles.estiloscont}>
              <Entradatxt pholder="Linkeram S.L." style={styles.entradalg}/>
              </View>  
              <View style={styles.estiloscont}>
                          
              <Textos txt="Nombre de usuario" style={styles.labeltxtmin}/>
            
             
              </View>
              <View style={styles.estiloscont}>
                          
                       <Entradatxt pholder="@andrewboston" style={styles.entrada}/>

                       <ImageBackground

                      source={verf}
                      resizeMode="cover"
                      style={styles.bell5}
                      >
                      <View></View>
                      </ImageBackground>

                       <ImageBackground

                      source={bgimginsta}
                      resizeMode="cover"
                      style={styles.bell4}
                      >
                      <View></View>
                      </ImageBackground>
                       <Textos txt="Importar de Instagram" style={styles.labeltxt}/>

                       
              </View>

              <View style={styles.estiloscont}>
                          
                     
                     <ImageBackground

                    source={bginfo}
                    resizeMode="cover"
                    style={styles.bell4}
                    >
                    <View></View>
                    </ImageBackground>
                       <Textos txt="Entre 8 y 22 caracteres" style={styles.labeltxt2}/>

                       <ImageBackground

                      source={bgimginsta}
                      resizeMode="cover"
                      style={styles.bell4}
                      >
                      <View></View>
                      </ImageBackground>
                      <Textos txt="Instagram" style={styles.labeltxt}/>
                      

                      
                       
              </View>
              <View style={styles.estiloscont}>
                          
                     
                          <ImageBackground
     
                         source={bginfo}
                         resizeMode="cover"
                         style={styles.bell4}
                         >
                         <View></View>
                         </ImageBackground>
                            <Textos txt="Este usuario ya existe." style={styles.labeltxt2}/>
                            <Textos txt="@AlexHamilton" style={styles.labeltxtc}/>
                   </View>

                   
                   <View style={styles.estiloscont}>
                            <Textos txt="Tipo de Cuenta" style={styles.labeltxt}/>
                           
                   </View>
                   <View style={styles.estiloscont}>
                           
                            <Textos txt="Administra qué contenido mostraras en tu perfil." style={styles.labeltxtc}/>
                   </View>
                   <View style={styles.estiloscont}>
                            <Textos txt="¿Tu cuenta es personal o de empresa?" style={styles.labeltxtmin}/>
                            <Entradatxt pholder="personal" style={styles.entrada}/>
                   </View>
                   <View style={styles.estiloscont}>
                            <Textos txt="Audiencia" style={styles.labeltxt}/>
                                                                                                            
                            
                   </View>
                   <View style={styles.estiloscont}>
                            
                            <Textos txt="Administra qué información permites que vean otras personas." style={styles.labeltxtc}/>
                            
                   </View>
                                      
                   <View style={styles.estiloscont}>
                            <Textos txt="Cuenta privada" style={styles.labeltxtmin}/>
                           
                   </View>
                   <View style={styles.estiloscont}>
                   <Textos txt="Cuando se selecciona esta opción tu información de tu cuenta solo es visibles para las personas que te siguen." style={styles.labeltxtc}/>
                           
                          <ImageBackground
     
     source={toggle}
     resizeMode="cover"
     style={styles.bell6}
     >
     <View></View>
     </ImageBackground>
                   </View>
                   <View style={styles.estiloscont}>
                            <Textos txt="Cambiar contraseña" style={styles.labeltxt}/>
                                                                                                            
                            
                   </View>
                   <View style={styles.estiloscont}>
                            <Textos txt="Contraseña actual" style={styles.labeltxtmin}/>
                           
                   </View>
                   <View style={styles.estiloscont}>
                          
                  
            
              <TextInput
                secureTextEntry={!showPassword}
                style={styles.entrada}
                value={password}
                onChangeText={setPassword}
                placeholder="***********"
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Image source={eye} style={styles.imgeye} />
              </TouchableOpacity>
            
              </View>
              <View style={styles.estiloscont}>
                            <Textos txt="¿Olvidaste tu contraseña?" style={styles.labeltxtmin}/>
                           
                   </View>

                   <View style={styles.estiloscont}>
                            <Textos txt="Nueva contraseña" style={styles.labeltxtmin}/>
                            <Textos txt="Confirmar Contraseña" style={styles.labeltxtmin}/>
                   </View>
                   <View style={styles.estiloscont}>
                          
                  
            
              <TextInput
                secureTextEntry={!showPassword2}
                style={styles.entrada}
                value={password2}
                onChangeText={setPassword2}
                placeholder="***********"
              />
              <TouchableOpacity onPress={toggleShowPassword2}>
                <Image source={eye} style={styles.imgeye} />
              </TouchableOpacity>


              
              <TextInput
                secureTextEntry={!showPassword3}
                style={styles.entrada}
                value={password3}
                onChangeText={setPassword3}
                placeholder="***********"
              />
              <TouchableOpacity onPress={toggleShowPassword3}>
                <Image source={eye} style={styles.imgeye} />
              </TouchableOpacity>

              
            
              </View>

              <Textos txt="Si cambias tu contraseña, se cerrarán todas tus sesiones activas de Linkeram, excepto la que estás usando en este momento. Las aplicaciones que tienen acceso a tu cuenta no se verán afectadas." style={styles.labeltxtc}/>

              <View style={styles.estiloscont}>
                            <Textos txt="Actualizar correo electrónico" style={styles.labeltxt}/>
                                                                                                            
                            
                   </View>

                   <View style={styles.estiloscont}>
                            <Textos txt="Email actual" style={styles.labeltxtmin}/>                            
                   </View>
                   <View style={styles.estiloscont}>
                           
                            <Entradatxt pholder="johndoe@gmail.com" style={styles.entrada}/>                           
                   </View>
                   <View style={styles.estiloscont}>
                            <Textos txt="¿Olvidaste tu email?" style={styles.labeltxtmin}/>                            
                   </View>
                   <View style={styles.estiloscont}>
                            <Textos txt="Nuevo email" style={styles.labeltxtmin}/> 
                          
                   </View>
                   <View style={styles.estiloscont}>
                          
                            <Entradatxt pholder="usuario o email" style={styles.entrada}/>                             
                   </View>

                   <Textos txt="Si cambias tu email, se cerrarán todas tus sesiones activas de Linkeram, excepto la que estás usando en este momento. Las aplicaciones que tienen acceso a tu cuenta no se verán afectadas. Se envíará un correo electrónico de confirmación para verificar el cambio de dirección de correo." style={styles.labeltxtc}/>
                   <View style={styles.estiloscont}>
                            <Textos txt="Eliminar cuenta Linkeram" style={styles.labeltxt}/>
                                                                                                            
                            
                   </View>
                   <View style={styles.estiloscont}>

                                    <ImageBackground
                      
                      source={vatar}
                      resizeMode="cover"
                      style={styles.bell7}
                      >
                      <View></View>
                      </ImageBackground>
                            <Textos txt="Borrar cuenta Linkeram" style={styles.labeltxt}/>
                                                                                                            
                          
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
    width: '25vw',
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
    left: '-24vw',
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
    left: '-20vw',
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
    color: "#777777",
    fontSize: 18,
    textAlign: 'left',
    width: '40vw',   
    marginTop: 3,
    
  }, 
  labeltxt2:{
    color: "#DC3545",
    fontSize: 16,
    textAlign: 'left',
    width: '25vw',    
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
vistacont:{
position: 'relative',
top: width < 750 ? '2vw' : '70vw',
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
