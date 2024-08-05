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
            <Textos txt="¡Linkeram está en construcción!" style={styles.construccion}/>
            <Textos txt="Estamos trabajando arduamente para ofrecerte la mejor plataforma digital" style={styles.construcciontxt}/>
            <Textos txt="para gestionar tu presencia en línea." style={styles.construcciontxt}/>
           

            <View style={styles.container}>
                <View style={styles.vistagenlb}>
                    <View style={styles.vistagen}>
                    <Textos txt="¡Únete a nuestra Lista de Correo y te mantendremos informado sobre las últimas novedades y la fecha de lanzamiento!" style={styles.construcciontxt} />
                    </View>

                    <TouchableOpacity style={styles.suscrib}>
                    <Textos txt="Suscribirse" style={styles.suscribtxt}></Textos>                    
                    </TouchableOpacity>
                    <Textos txt="Al suscribirte, aceptas los Términos y Políticas" style={styles.suscribtxt3}></Textos>                    

                    <TextInput placeholder="Email" style={styles.emailtxt} />
                </View>
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
              
              <Text style={styles.labeltxtp22x}>Precios</Text>
              <Text style={styles.labeltxtp22}>Términos y políticas</Text>
                                
                      
           </View>

           <View style={styles.seccionconten}>
              
              <Text style={styles.labeltxtp22x22}>Español(es)</Text>
              <Text style={styles.labeltxtp2222}>English(en)</Text>
              <Text style={styles.labeltxtp2222p}>info.linkeram@gmail.com</Text> 
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
        height: 250,
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
       top: '6vw',
       left: '35vw',
       borderRadius: 6,
       width: 100,
    },
    suscribtxt:{
        color: "#ffffff",
        fontWeight: 'bold',
        
    },
    suscribtxt3:{
      color: "#ffffff",
      fontWeight: 'bold',
      marginTop: '3vw',
      position: 'relative',
      top: '-5vw',
  },
    suscribtxt2:{
        color: "#622FAE",
        fontWeight: 'bold',
        fontSize: 64,
        position: 'relative',
        height: 174,
        top: '7vw',
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
        top: '-12vw',
        backgroundColor: "#FAFAFA",
      },
    construccion:{
        fontWeight: 'bold',
        color: "#472C7D",
        position: 'relative',
        top: '-8vw',
        left: '2vw',
        
        fontSize: 25,
        height: 90,
    },
    construcciontxt:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '-11vw',
        left: '2vw',
        fontSize: 18,
        textAlign: 'center',
       
    },construcciontxt4:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '5vw',
        left: '2vw',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
       
    },
    construcciontxt3:{
        backgroundColor: "#FAFAFA",
        color: "#6D6D6D",
        position: 'relative',
        top: '5vw',
        left: '2vw',
        fontSize: 18,
        textAlign: 'center',
       
    }
 
  });
  