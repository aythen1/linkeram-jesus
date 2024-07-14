import { Text, StyleSheet, View,ImageBackground, TextInput , TouchableOpacity, Image, Dimensions,ScrollView,FlatList  } from 'react-native'
import React, { Component ,useState} from 'react'
import logo from '../assets/logo.png'
import link from '../assets/link.png'

const { width } = Dimensions.get('window');

const Faqs = () => {


  
    confirm('We use third-party cookies in order to personalise your experience.\nRead our cookie policy');

  
        const data = [
            { id: 1, title: 'Registrarse' },
            { id: 2, title: 'Iniciar Sesión' },
            { id: 3, title: 'Buscador' },
            { id: 4, title: 'Sobre Nosotros' },
            { id: 5, title: 'Planes' },
            { id: 6, title: 'Centro de Ayuda' },
            { id: 7, title: 'Términos y Políticas' },
            
          ];
          


    return (
        <ScrollView>
      <View style={styles.contenedor}  >
        <View style={[styles.header, width < 750 ? styles.smallScreenContainer : null]}>
        <View style={styles.logo}>
        <ImageBackground source={logo} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
            <View></View>
        </ImageBackground>        
        </View>
       
        <View style={styles.righside}>
        
        <TextInput        
        
        placeholder="Search"
        style={styles.elementxt}
        />



        <TouchableOpacity style={styles.btnsesion1}>
            <Text style={styles.txtbtn1}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Image
         resizeMode="cover"
        source={link}
        style={styles.imgsize}
      />
        <TouchableOpacity style={styles.btnsesion2}>
            <Text style={styles.txtbtn2}>Registrarse</Text>
        </TouchableOpacity>
       
        </View>
        </View>
       

    

        </View> 

         
        <View style={styles.padre}>      
        <View style={styles.terminos}>
        <Text style={[styles.tituloh1,styles.alturaheight]}>FAQs</Text>
        <Text style={styles.parrafoboldn}> Cuenta y Perfil</Text>
        <Text style={styles.titulousomor}>
        ¿Cómo creo una cuenta en Linkeram?
       </Text>
       <Text style={styles.parrafo}>
       Para crear una cuenta en Linkeram, simplemente visita nuestro sitio web y haz clic en el botón "Registrarse". Sigue las indicaciones para ingresar tu información y configurar tu perfil.
       </Text>
       <Text style={styles.titulousomor}>
       ¿Cómo edito la información de mi perfil?
       </Text>
       <Text style={styles.parrafo}>
       Para editar la información de tu perfil, inicia sesión en tu cuenta de Linkeram y ve a "Ajustes". Desde allí, selecciona "Información de contacto". Aquí podrás realizar cambios en tu imagen de perfil, biografía, y otros detalles de contacto según tus preferencias.
       </Text>
       <Text style={styles.parrafoboldn}> Creación de Contenido </Text>
       <Text style={styles.titulousomor}>
       ¿Cómo subo contenido a Linkeram?
       </Text>
       <Text style={styles.parrafo}>
       Para subir contenido a Linkeram, inicia sesión en tu cuenta y dirígete a la sección de "Crear". También puedes crear contenido desde la sección "Editar Perfil" en tu perfil. Sigue las indicaciones para seleccionar el tipo de contenido que deseas compartir.
       </Text>
       <Text style={styles.titulousomor}>
       ¿Puedo monetizar mi contenido en Linkeram?
       </Text>
       <Text style={styles.parrafo}>
       Sí, Linkeram ofrece herramientas para que puedas generar ingresos a partir de tu contenido. Explora las opciones disponibles en la sección de "Tienda" para obtener más información sobre cómo monetizar tu contenido.
       </Text>
       <Text style={styles.parrafoboldn}> Directrices de la Comunidad </Text>
       <Text style={styles.titulousomor}>
       ¿Cuáles son las directrices de la comunidad de Linkeram?
       </Text>
       <Text style={styles.parrafo}>
       Nuestras directrices de la comunidad fomentan un entorno positivo y respetuoso para todos los usuarios. Prohibimos el acoso, los discursos de odio y cualquier otro comportamiento perjudicial. Te invitamos a revisar nuestras directrices completas para obtener más información.
       </Text>
       <Text style={styles.titulousomor}>
       ¿Cómo puedo reportar contenido o comportamiento inapropiado en Linkeram?
       </Text>
       <Text style={styles.parrafo}>
       Si encuentras contenido o comportamiento inapropiado en Linkeram, utiliza las herramientas de reporte disponibles en la plataforma para alertar a nuestro equipo de moderación. Tomamos todas las denuncias en serio y tomaremos las medidas necesarias.
       </Text>
       <Text style={styles.parrafoboldn}> Privacidad y Seguridad </Text>
       <Text style={styles.titulousomor}>
       ¿Cómo protege Linkeram mi privacidad y seguridad?
       </Text>
       <Text style={styles.parrafo}>
       En Linkeram, nos tomamos muy en serio la privacidad y seguridad de nuestros usuarios. Implementamos medidas de seguridad robustas y protocolos de encriptación para proteger tus datos y garantizar tu privacidad en todo momento.
       </Text>
       <Text style={styles.titulousomor}>
       ¿Puedo controlar quién ve mi contenido en Linkeram?
       </Text>
       <Text style={styles.parrafo}>
       Sí, Linkeram te ofrece controles de privacidad para que puedas decidir quién puede acceder a tu contenido. Puedes configurar tu perfil como público o privado según tus preferencias.
       </Text>
       <Text style={styles.parrafoboldn}>Retiradas </Text>
       <Text style={styles.titulousomor}>
       ¿Qué comisión se cobra por las retiradas en la plataforma?       
       </Text>
       <Text style={styles.parrafo}>
       Cuando retiras dinero de tu cuenta en Linkeram, la plataforma cobra una comisión del 5%.
       </Text>
       <Text style={styles.parrafoboldn}>
       Soporte Técnico
       </Text>
       <Text style={styles.titulousomor}>
       ¿Estoy experimentando problemas técnicos con Linkeram. ¿Cómo puedo obtener ayuda?
       </Text>
       <Text style={styles.parrafo}>
       Si necesitas asistencia técnica, visita nuestro Centro de Ayuda o contacta a nuestro equipo de soporte. Por favor, proporciona la mayor cantidad de detalles posible sobre el problema que estás experimentando para que podamos ayudarte de manera efectiva.
       </Text>
       

       
       </View>


       <View style={styles.contenedorseccion1}  >
            
            <TextInput
        placeholder='Español (ES)'      
        style={styles.txtinput}
      />



        </View>
        <View style={styles.contenedorseccion2}  >
        <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }) => (
        
        <View style={{height:15}}>
            
            {item.id == '6' ? (
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
        <ImageBackground source={logo} resizeMode="cover" style={{ width: '100%', height: '100%', marginLeft: '-40vw', marginTop: '5vw' }}>
            <View></View>
        </ImageBackground>        
        </View>

        <View style={styles.correof}>
            <Text style={styles.correobold}>info.linkeram@gmail.com</Text>        
        </View>   

    
       </View>
      </ScrollView>
    )
  
}

export default Faqs


const styles = StyleSheet.create({
    header: {
      display: 'flex',
      backgroundColor: '#fff', 
      width: '100%',
      
      justifyContent: 'space-between',      
      flexDirection: 'row',

    },
    contenedor: {
      height: '65%',
      width: '100vw',      
      alignItems: 'flex-start',
      
    }, 
    tituloart:{
        marginLeft: '3vw',
       
    },    
    tituloartbold:{
        marginLeft: '3vw',
        fontWeight: 'bold',
    },
    tituloh1:{
        color: "#622FAE", 
        fontWeight: 'bold',
        fontSize: 36,
        paddingLeft: 50,
        textAlign: 'left',
       
      },
      padre:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      terminos:{
        width: '70%',
        paddingBottom: 100,
      },
      alturaheight:{
        marginTop: '-25vw',
      },
      titulouso:{
        color: "#1F184B", 
        fontWeight: 'bold',
        fontSize: 26,
        paddingLeft: 50,
        textAlign: 'left', 
      },
      titulousomor:{
        color: "#622FAE", 
        fontWeight: 'bold',
        fontSize: 26,
        paddingLeft: 50,
        textAlign: 'left', 
      },
      parrafo:{
        color: "#6D6D6D",
        textAlign: 'center',
        paddingLeft: 50,
        fontSize: 'medium',
        textAlign: 'left',
        paddingBottom: 20,
      },
      parrafobold:{
        color: "#6D6D6D",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 50,
        fontSize: 'medium',
        textAlign: 'left',
        paddingBottom: 20,
      },
      parrafoboldn:{
        color: "#000000",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 50,
        fontSize: 'large',
        textAlign: 'left',
        paddingBottom: 20,
      },
    txtinput:{
      height: '20%',
      width: '80%',
      alignItems: 'flex-start',
      padding: 10,
      marginTop: 0,
      borderBottomWidth: 1,
      borderBottomColor: "#C3C3C3",      
    },
    logo: {
        height: '4vw',
        width: '18vw',
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
        marginTop: 10
    },
    btnsesion1: {
        marginRight: 50,
        marginTop: 10,
        textShadowColor:"#8828FF", 
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
    correobold:{
        color: '#1F184B',
        fontWeight:'bold',
        fontSize: 18,
    }, 
    correo:{
        position: 'relative',
        top: '-49%',
        left: '80%',
    },
    correof:{
      position: 'relative',
      top: '5%',
      left: '40%',
  },
    txtbtn1:{
        color: "#8828FF",
        fontWeight: "bold",
    },  
    txtbtn2:{
        color: "#FFFFFF",
        fontWeight: "bold",
    },            
    righside: {
        display: 'flex',
        position: 'fixed',
        top: 0,
        right:0,
        justifyContent: 'flex-end',
        flexDirection: 'row',        
        marginTop: 10,
    },
    imgsize:{
        width: 25, 
        height: 20,
        marginTop: 8 ,
        position: 'relative',
        top: 10,
        left: -20,
    },
    smallScreenContainer: {
        flexDirection: 'column',
      },    
      contenedorseccion1:{
        height: '10%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-6vw', 
        flexDirection: 'row',
        paddingTop: 0,
        
      },
      contenedorseccion2:{
        height: '5%',
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',        
        flexDirection: 'column',
        textAlign: 'center',        
        paddingLeft: '10vw',
        marginTop: '0vw',               
      },            
  });
  