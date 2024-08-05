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
    CheckBox,
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
import googleico from "../assets/goolgeico.png";
import linea1 from "../assets/Line1.png";
import linea2 from "../assets/Line2.png";
import eye from "../assets/eye.png";
import presentacion from "../assets/presentacion.png";

const { width } = Dimensions.get("window");
  
  const Landingpage = () => {

    const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
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
  
        
        <View style={styles.padre}>
        <View style={styles.logolink2}>

          
              
            </View>


            
            
           
            <View style={styles.contenedorseccion1}>
          <View style={styles.imgseccion1}>
            <Image
              resizeMode="cover"
              source={presentacion}
              style={styles.imgsize2}
            />

            <View></View>
          </View>

          <View style={styles.singupseccion1}>
            
            <Text style={styles.txtgoogle}>
              <Image
                resizeMode="cover"
                source={googleico}
                style={styles.imgsize3}
              />{" "}
              Ingresar con Google
            </Text>
            <Text style={styles.text}>
              <Image
                resizeMode="cover"
                source={linea1}
                style={styles.imgline}
              />{" "}
              o ingresa con tus datos
              <Image
                resizeMode="cover"
                source={linea2}
                style={styles.imgline}
              />{" "}
            </Text>
            <TextInput
              style={styles.btnsesion3}
              placeholder="Usuario o email"
            />

            <View>
              <TextInput
                secureTextEntry={!showPassword}
                style={styles.btnsesion3}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Image source={eye} style={styles.imgeye} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.contenopc}>
              <Text style={styles.txtnormal}>
                <CheckBox value={isChecked} onValueChange={handleCheck} />{" "}
                Recuerdame
              </Text>
              <Text style={styles.txtnormalbold}>
                Olvidaste tu contraseña ?
              </Text>
            </View>

            <TouchableOpacity style={styles.btnsesion4}>
              <Text style={styles.txtbtn3}>Iniciar sesion</Text>
            </TouchableOpacity>

            <View style={styles.contenopc2}>
              <Text style={styles.txtnormal2}>¿ No tienes cuenta ?</Text>

              <Text style={styles.txtnormalbold}>Registrate</Text>
            </View>
            
              

              
            
          
           

            <View>
            
          </View>
        </View>
          
        </View>


            <View style={styles.container}>
                
                <Textos txt="¡Conecta, Crea y Monetiza!" style={styles.suscribtxt2}></Textos>
                <Textos txt="Todo accesible en un solo lugar.  Creemos en el poder de la conexión y en las infinitas posibilidades del mundo digital." style={styles.construcciontxt3} />
                <Textos txt="Empoderamos a usuarios y empresas conectándolos con herramientas para gestionar, compartir y monetizar su " style={styles.construcciontxt3} />
                <Textos txt="actividad digital. Facilitando la interacción con usuarios y clientes potenciales. " style={styles.construcciontxt3} />


                 

                <Textos txt="Personaliza y Organiza " style={styles.construcciontxt4} />
                <Textos txt="Mantenga su contenido digital bien organizado para un fácil acceso. " style={styles.construcciontxt3} />
                <Textos txt="Comparte y Promociona " style={styles.construcciontxt4} />
                <Textos txt="Haz que tu actividad digital llegue a una audiencia global y conéctate con usuarios de todo el mundo. " style={styles.construcciontxt3} />
                <Textos txt="Compra y Monetiza " style={styles.construcciontxt4} />
                <Textos txt="Convierte tu contenido en ganancias con nuestras herramientas. " style={styles.construcciontxt3} />
                <Textos txt="Analiza y Gestiona " style={styles.construcciontxt4} />
                <Textos txt="Entiende qué está convirtiendo a tu audiencia y optimiza tus estrategias. " style={styles.construcciontxt3} />

                <Textos txt="Precios del plan" style={styles.suscribtxt2}></Textos>

                <View style={styles.contenedorseccion6}>
         
          

          <View style={styles.contflexcard}>
            <View style={styles.flexcard}>
            <Text style={styles.subtitle}>Plan Freemium</Text>
              <Text style={styles.txtbold}>$0/mes</Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                2 GB
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                2 páginas
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                personalización del perfil
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                integraciones
              </Text>
              <Text style={styles.txtnormalazul}>
                {" "}
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                monetización
              </Text>

              <Text style={styles.txtnormalazul}>
                {" "}
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                analíticas básicas (1 mes)
              </Text>

              

            </View>
            <View style={styles.flexcard}>
              <Text style={styles.subtitle}>Plan Básico</Text>
              <Text style={styles.txtbold}>$10/mes</Text>

              <Text style={styles.txtnormalwhite2}>
                Todo lo del Plan Gratuito más:
              </Text>

              <Text style={styles.txtnormalwhite}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                10 GB
              </Text>
              <Text style={styles.txtnormalwhite}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                Lista de Correo
              </Text>
              <Text style={styles.txtnormalwhite}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                Integraciones CSV
              </Text>
              <Text style={styles.txtnormalwhite}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                Analíticas (6 meses)
              </Text>
              
            </View>
            <View style={styles.flexcard}>
              <Text style={styles.subtitle}>Plan Profesional</Text>
              <Text style={styles.txtbold}>$50/mes</Text>
              <Text style={styles.txtnormal2}>
              Todo lo del Plan Básico más:
              </Text>
 
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
               50 GB
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                5 páginas
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                Soporte prioritario
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
                Promociona tu contenido dentro de la plataforma
              </Text>
              <Text style={styles.txtnormalazul}>
                {" "}
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />{" "}
               Analíticas avanzadas (1 año)
              </Text>

              
            </View>
          </View>
        </View>

        <View style={styles.contenedorseccion1}>
        <Image
                  source={logolink3}
                  style={styles.imgsocialcand4}
                  resizeMode="cover"
                />
      </View>
      <View style={styles.contenedorseccion2}>
        
      <View style={styles.seccionconten}>
              
              <Text style={styles.labeltxtp22x}>Registrarse</Text>
              <Text style={styles.labeltxtp22}>Iniciar sesión</Text>
              <Text style={styles.labeltxtp22}>Comunidad</Text>
              <Text style={styles.labeltxtp22}>Sobre nosotros</Text>
              <Text style={styles.labeltxtp22}>Precios</Text>
              <Text style={styles.labeltxtp22}>Centro de Ayuda</Text>
              <Text style={styles.labeltxtp22}>Términos y políticas</Text>
                                
                      
           </View>

           <View style={styles.seccionconten}>
              
              <Text style={styles.labeltxtp22x22}>Español(es)</Text>
              <Text style={styles.labeltxtp2222}>English(en)</Text>               
              <Text style={styles.labeltxtp2222p2}>© 2024 Linkeram. All rights reserved.</Text>                                 
              <View style={styles.labeltxt}>

              </View>

              
           </View>

           <View
  style={{
    
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cccccc",
    marginBottom: '3vw',
    width: '90vw',
  }}
/>

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
  contenopc: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "60%",
  },  
  contenopc2: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "60%",
    marginTop: 20,
  },      
  txtnormal: {
    color: "#1F184B",
  },
  contenopc: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "60%",
  },
  contenedorseccion2:{
     height: '20vw',
  },
  imgseccion1:{
    position: 'relative',
    top: '50vw',
    width: '90%',
  },
  contenopc2: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "60%",
    marginTop: 20,
  },
  singupseccion1: {
    width: "100%",
    height: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    left: '30vw',
    top: '-80vw',
  },
  imgsize2:{
   resizeMode: 'cover', 
   position: 'relative',
   top: '-75vw',
   left: '-18vw',
   width: '45vw',
  },
  imgline: {
    width: "3vw",
    height: 2,
    marginBottom: 4,
    alignItems: "center",
  },        
  txtnormal: {
    color: "#1F184B",
    fontWeight: "bold",
    position: 'relative',
    left: '0vw',
  },
  txtnormalbold: {
    color: "#1F184B",
    fontWeight: "bold",
  },
  contenopc2: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "60%",
    marginTop: 20,
  },
  btnsesion4: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#8828FF",
    height: 50,
    width: "25vw",
    paddingStart: 30,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
    paddingTop: 5,
    placeholderTextColor: "#C3C3C3",
  },
  imgeye: {
    width: 20,
    height: 20,
    position: "relative",
    left: "26vw",
    top: -30,
  },
    subtitle:{
     color: "#5F54A4",
     fontSize: 24,
     fontWeight: 'bold',
    },            
  btnsesion3: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    height: 50,
    width: "25vw",
    paddingStart: 30,
    justifyContent: "center",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 10,
    paddingTop: 5,
    placeholderTextColor: "#C3C3C3",
  },
  text: {
    fontSize: 20,
    color: "#8828FF",
  },        
  
  imgsize3: {
    position: "relative",
    top: 6,
    width: 30,
    height: 30,
  },
  txtgoogle: {
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 4,
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
    borderColor: "#8828FF",
    
  },    
  imgsize: {
    width: 25,
    height: 20,
    marginTop: 8,
    position: "relative",
    top: 10,
    left: -20,
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
    txtbtn1: {
      color: "#8828FF",
      fontWeight: "bold",
    },
    txtbtn2: {
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    txtbtn3: {
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
    },
    labeltxt:{
     borderBottomColor: '#CFCFCF',
     borderBottomWidth: 5,
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
    labeltxtp22:{
      position: 'relative',
       left: '3vw',
       top: '-2vw',
       padding: 3,
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
       padding: 3,
    },       
  txtbtn2: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
     left: '56vw',
     top: '3vw',
     marginBottom: 0,
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
      color: "#1F184B",
      fontWeight: 'normal',
      padding: 0,
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
        position: 'absolute',
        top: '70vw',
        height: '30%',
      
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
        top: '10vw',
    },
    suscrib:{
       padding: 10, 
       backgroundColor: "#622FAE",
       color: "#ffffff",
       position: 'relative',
       top: '4.5vw',
       left: '35vw',
       borderRadius: 6,
       width: 100,
    },
    suscribtxt:{
        color: "#ffffff",
        fontWeight: 'bold',
        
    },
    suscribtxt2:{
        color: "#622FAE",
        fontWeight: 'bold',
        fontSize: 64,
        marginTop: '5vw',
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
        top: '12vw',
        left: '-3vw',
        backgroundColor: "#FAFAFA",
      },
    construccion:{
        fontWeight: 'bold',
        color: "#472C7D",
        position: 'relative',
        top: '10vw',
        left: '2vw',
        
        fontSize: 25,
        height: 90,
    },
    construcciontxt:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '8vw',
        left: '2vw',
        fontSize: 18,
        textAlign: 'center',
       
    },
    construcciontxt2:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '8vw',
        bottom: '8vw',
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
  