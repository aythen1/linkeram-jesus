import { Text, StyleSheet, View,ImageBackground, TextInput , TouchableOpacity, Image, Dimensions,CheckBox,ScrollView } from 'react-native'
import React, { Component ,useState} from 'react'
import logo from '../assets/logo.png'
import link from '../assets/link.png'
import presentacion from '../assets/presentacion.png'
import googleico from '../assets/goolgeico.png'
import linea1 from '../assets/Line1.png'
import linea2 from '../assets/Line2.png'
import eye from '../assets/eye.png'
import social1 from '../assets/social1.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'
import social5 from '../assets/social5.png'
import social6 from '../assets/social6.png'
import social7 from '../assets/social7.png'
import candado from '../assets/candado.png'
import grafico from '../assets/chart.png'
import check from '../assets/check.png'
import checkwhite from '../assets/checkwhite.png'



const { width } = Dimensions.get('window');

const HomeScreen = () => {

    
        const [password, setPassword] = useState('');
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
        <View style={styles.contenedorseccion1}  >
            <View style={styles.imgseccion1}  >
              <Image
          resizeMode="cover"
          source={presentacion}
          style={styles.imgsize2}
        />

            <View> 
      
        </View>

     

            </View>  
            <View style={styles.singupseccion1}  >
             <Text style={styles.txtgoogle}>
             <Image
         resizeMode="cover"
        source={googleico}
        style={styles.imgsize3}
      /> Ingresar con Google
             </Text>
            <Text style={styles.text}>
            <Image
         resizeMode="cover"
        source={linea1}
        style={styles.imgline}
      />  o ingresa con tus datos  
        <Image
         resizeMode="cover"
        source={linea2}
        style={styles.imgline}
      /> </Text>
     <TextInput
        style={styles.btnsesion3}
        placeholder="usuario o email"
        
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
      <Image
        source={eye}
        style={styles.imgeye}
      />
      </TouchableOpacity>
    </View>
       
       <View style={styles.contenopc}>
       <Text style={styles.txtnormal}><CheckBox
        value={isChecked}
        onValueChange={handleCheck}
      />  Recuerdame</Text>

       <Text  style={styles.txtnormalbold}>Olvidaste tu contraseña ?</Text>
       
       </View>

       <TouchableOpacity style={styles.btnsesion4}>
            <Text style={styles.txtbtn3}>Iniciar sesion</Text>
        </TouchableOpacity>
        <View style={styles.contenopc2}>
       <Text style={styles.txtnormal}>  No tienes cuenta</Text>

       <Text  style={styles.txtnormalbold}>Registrate</Text>
       
       </View>
      
       </View>  

        </View> 

        <View style={styles.contenedorseccion3}  >
            
            <Text style={styles.tituloh1}>¡Crea, Organiza, Comparte y  Monetiza!</Text>            
            <Text style={styles.parrafo}>Todo accesible en un solo lugar.  Creemos en el poder de la conexión y en las infinitas posibilidades del mundo digital.</Text>
           
            <View style={styles.contenedorprintxt}  >

                <View style={styles.contenedortxt}  >
                 <Text style={styles.txttitulo}>Personaliza tu Presencia Digital</Text>
                 <Text style={styles.txtparrafo}>Personaliza tu perfil para reflejar tu identidad y tus intereses de manera única y atractiva.
                </Text>    
                </View>    
                <View style={styles.contenedortxt}  >
                <Text style={styles.txttitulo}>Crea y Organiza tu Contenido Digital</Text>
                <Text style={styles.txtparrafo}>Comparte tus intereses o tu trabajo y conecta con personas que aprecian tu perspectiva única. Mantén tu contenido organizado y fácil de encontrar para ti y tus seguidores.            .
                </Text>  

                </View>
                <View style={styles.contenedortxt}  >
                <Text style={styles.txttitulo}>¡Monetiza sin límites!</Text>
                <Text style={styles.txtparrafo}>Convierte tu pasión en ganancias con las herramientas de monetización.</Text>                                    
                </View>

            </View>    
     
        </View>
        <View style={styles.contenedorseccion4}  >
            
        <Text style={styles.tituloh1}>Centraliza Todos Tus Mensajes</Text>            
            <Text style={styles.parrafo}>Todos tus mensajes de las principales plataformas de mensajería en un solo lugar.</Text>
                      
            <View style={styles.contenedorsocial}>
            <Image
                source={social1}
                style={styles.imgsocial}
            />
            <Image
                source={social2}
                style={styles.imgsocial}
            />
            <Image
                source={social3}
                style={styles.imgsocial}
            />
            <Image
                source={social4}
                style={styles.imgsocial}
            />
            <Image
                source={social5}
                style={styles.imgsocial}
            />
            <Image
                source={social6}
                style={styles.imgsocial}
            />
            <Image
                source={social7}
                style={styles.imgsocial}
            />
            </View>


         </View>

         <View style={styles.contenedorseccion5}  >
            
                      
            <View style={styles.contenedorprintxt2}  >

                <View style={styles.contenedortxt2}  >
                 <Text style={styles.txttitulo}>Privacidad y seguridad</Text>
                 <Text style={styles.txtparrafo}>Personaliza tu perfil para reflejar tu identidad y tus intereses de manera única y atractiva.
                </Text>
                </View>  
                <Image
                source={candado}
                style={styles.imgsocialcand}
            />  
                <View style={styles.contenedortxt2}  >
                <Text style={styles.txttitulo}>Asistencia IA</Text>
                <Text style={styles.txtparrafo}>Comparte tus intereses o tu trabajo y conecta con personas que aprecian tu perspectiva única. Mantén tu contenido organizado y fácil de encontrar para ti y tus seguidores.            .
                </Text>  

                </View>
                

            </View> 


            <Text style={styles.tituloh1}>Analiza y Optimiza tu Estrategia</Text>            
            <Text style={styles.parrafo}>Entiende mejor a tu audiencia, optimiza tus estrategias y ve crecer tus ingresos.</Text>


                 <View style={styles.contenedorprintxt2}  >

                <View style={styles.contenedortxt2}  >
                <Image
                source={grafico}
                style={styles.imgsocialcand2}
            />      
                <View  style={styles.contencoluna}><Text style={styles.txtfont}>W</Text><Text style={styles.txtfont}>T</Text  ><Text style={styles.txtfont}>W</Text><Text style={styles.txtfont}>T</Text><Text style={styles.txtfont}>F</Text><Text style={styles.txtfont}>S</Text></View>
                <View  style={styles.contencoluna2}><Text style={styles.txtfont2}>40K</Text><Text style={styles.txtfont2}>30K</Text  ><Text style={styles.txtfont2}>20K</Text><Text style={styles.txtfont2}>10K</Text></View>
                </View>  
               
                <View style={styles.contenedortxt4}  >
                <Text style={styles.txttitulo}>Comparte tu actividad digital con el Mundo
                </Text>
                <Text style={styles.txtparrafo}>Difunde y promociona tu contenido de manera efectiva, alcanzando a una audiencia global. 
Haz un seguimiento del engagement a lo largo del tiempo, monitorea tus ingresos y descubre qué está convirtiendo a tu audiencia.
                </Text>  

                </View>
                

            </View>   


           
     
        </View>     


       


        <View style={styles.contenedorseccion6}  >  

            <Text style={styles.tituloh1}>Precios del plan</Text>            
            <Text style={styles.parrafo}>Entiende mejor a tu audiencia, optimiza tus estrategias y ve crecer tus ingresos.</Text>



            <View style={styles.contflexcard}>
        <View style={styles.flexcard} >
            <Text style={styles.subtitle}>Plan Freemium</Text>
            <Text style={styles.txtbold}>$0/mes</Text>
            <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Hasta 50 campos personalizados</Text>   
             <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Botones de contacto</Text>   
             <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Personalización del perfil</Text> 
            <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Embed Fields (próximamente).</Text> 
             <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Enlace único de Linkeram
             </Text>  

             <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Monetización básica
            </Text>
            
            <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Tarjeta de visita digital
            </Text>
              
            <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Analíticas básicas (1 mes)
            </Text>

            <TouchableOpacity style={styles.btnsesion5}>
            <Text style={styles.txtbtn5}>Get Started</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.flexcard2} >
            <Text style={styles.subtitlewhite}>Plan Básico</Text>
            <Text style={styles.txtboldwhite}>$10/mes</Text>
            
            <Text style={styles.txtnormalwhite2}>Todo lo del Plan Gratuito más:</Text>
            


            <Text style={styles.txtnormalwhite}><Image
                source={checkwhite}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Hasta 100 campos personalizados</Text>   
             <Text style={styles.txtnormalwhite}><Image
                source={checkwhite}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Cifrado de campos</Text>   
             <Text style={styles.txtnormalwhite}><Image
                source={checkwhite}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Campos programados (próximamente).</Text> 
            <Text style={styles.txtnormalwhite}><Image
                source={checkwhite}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Envío de correos a suscriptores del boletín.</Text> 
             <Text style={styles.txtnormalwhite}> <Image
                source={checkwhite}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Integraciones CSV
             </Text>  

             <Text style={styles.txtnormalwhite}> <Image
                source={checkwhite}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Analíticas básicas (6 mes)
            </Text>
            
            
            <TouchableOpacity style={styles.btnsesion55}>
            <Text style={styles.txtbtn55}>Get Started</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.flexcard} >
            <Text style={styles.subtitle}>Plan Profesional</Text>
            <Text style={styles.txtbold}>$50/mes</Text>
            <Text style={styles.txtnormal2}>Todo lo del Plan Básico más:</Text>
           
            
            <Text style={styles.txtnormalazul} ><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Soporte prioritario</Text>   
             <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            /> Promoción, promocionarse dentro de la plataforma</Text>   
             <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Campañas de marketing (próximamente).</Text> 
            <Text style={styles.txtnormalazul}><Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Motor de búsqueda de elementos en el perfil (próximamente</Text> 
             <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Añade metadatos para mejorar el SEO (próximamente).
             </Text>  

             <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Integración de Meta Pixel Tracking para análisis avanzado (próximamente).
            </Text>
            
            <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Tarjeta de visita sin marca de agua
            </Text>
              
            <Text style={styles.txtnormalazul}> <Image
                source={check}
                style={styles.imgsocialcand3}
                 resizeMode="cover"
            />  Analíticas avanzadas
            </Text>

            <TouchableOpacity style={styles.btnsesion5heigth}>
            <Text style={styles.txtbtn5}>Get Started</Text>
        </TouchableOpacity>

        </View>
        </View>


        </View>    
        
        
      </View>
      </ScrollView>
    )
  
}

export default HomeScreen


const styles = StyleSheet.create({
    header: {
      display: 'flex',
      backgroundColor: '#fff', 
      width: '100%',      
      justifyContent: 'space-between',      
      flexDirection: 'row',

    },
    contenedor: {
      height: '100%',
      width: '100%',
      alignItems: 'flex-start',
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
    btnsesion3: {
        borderWidth: 1,
        borderColor:"#CCCCCC",
        height: 50,
        width: '25vw',
        paddingStart: 30,
        justifyContent: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 10,
        paddingTop: 5,
        placeholderTextColor:"#C3C3C3",        
    },
    btnsesion4: {
        borderWidth: 1,
        borderColor:"#CCCCCC",
        backgroundColor: '#8828FF',
        height: 50,
        width: '25vw',
        paddingStart: 30,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 10,
        paddingTop: 5,
        placeholderTextColor:"#C3C3C3",        
    },
    btnsesion5: {
        borderWidth: 1,
        borderColor:"#CCCCCC",
        backgroundColor: '#8828FF',
        height: 50,
        width: '20vw',
        paddingStart: 30,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 155,
        paddingTop: 5,
        borderRadius: '0.5vw',
        placeholderTextColor:"#C3C3C3",        
    },
    btnsesion55: {
        borderWidth: 1,
        borderColor:"#CCCCCC",
        backgroundColor: '#FFFFFF',
        height: 50,
        width: '20vw',
        paddingStart: 30,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 180,
        paddingTop: 5,
        
        borderRadius: '0.5vw',
        placeholderTextColor:"#C3C3C3",        
    },
    btnsesion5heigth:{        
        borderWidth: 1,
        borderColor:"#CCCCCC",
        backgroundColor: '#8828FF',
        height: 50,
        width: '20vw',
        borderRadius: '0.5vw',
        paddingStart: 30,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 62,
        paddingTop: 5,
        placeholderTextColor:"#C3C3C3",
    },   

    txtbtn1:{
        color: "#8828FF",
        fontWeight: "bold",
    },  
    txtbtn2:{
        color: "#FFFFFF",
        fontWeight: "bold",
    }, 
    txtbtn3:{
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'center',
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
        height: '25%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
     
        flexDirection: 'row',
        paddingTop: 0,
        
      },
      contenedorseccion2:{
        height: '20%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',        
        flexDirection: 'column',
        textAlign: 'center',
        
        
      },
      imgsize2:{
        
        width: '50vw',
        height: '50vw',       
    },
    imgsize4:{
        
      width: '40vw',
      height: '20vw',
      position: 'relative',
      top: -200,
      left: 80,       
  },
  imgsize5:{
        
    width: '20vw',
    height: '25vw',
    position: 'relative',
    borderRadius: '1vw',
    top: -500,
    left: 210,
    backgroundColor: '#000000',
},
imgsize6:{
        
  width: '15vw',
  height: '8vw',
  position: 'relative',
  borderRadius: '1vw',
  top: 0,
  left: 210,
  backgroundColor: '#000000',
},
imgsize7:{
        
  width: '15vw',
  height: '8vw',
  position: 'relative',
  borderRadius: '1vw',
  top: -150,
  left: 50,
  backgroundColor: '#000000',
},
imgsize8:{
        
  width: '15vw',
  height: '8vw',
  position: 'relative',
  borderRadius: '1vw',
  top: 0,
  left: 50,
  backgroundColor: '#000000',
},
imgsize9:{
        
  width: '15vw',
  height: '8vw',
  position: 'relative',
  borderRadius: '1vw',
  top: 0,
  left: 50,
  backgroundColor: '#000000',
  zIndex: 1500,
},
imgsize10:{
        
  width: '15vw',
  height: '8vw',
  position: 'relative',
  borderRadius: '1vw',
  top: 0,
  left: 50,
  backgroundColor: '#000000',
  zIndex: 1500,
},
imgsize11:{
        
  width: '25vw',
  height: '10vw',
  position: 'relative',
  borderRadius: '1vw',
  top: 100,
  left: 300,
  
},
    imgsize3:{
        position: 'relative',
        top: 6,
        width: 30,
        height: 30,       
    },
    singupseccion1:{
        width: '50vw',
        height: '50vw',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: "#8828FF",
       
      },
      imgline:{
        width: '3vw',
        height: 2,
        marginBottom: 4,
        alignItems: 'center',
        
      },
      txtgoogle:{
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 4,
      },
      imgeye:{
         width: 20,
         height: 20, 
         position: 'relative',
         left: '26vw',
         top: -30,
      },
      imgsocial:{
        width: 50,
        height: 50, 
        marginRight: 20,
       
      },
      imgsocialcand:{
        width: 30,
        height: 30, 
        marginRight: 50,
        marginTop: 60,
      },
      imgsocialcand2:{
        width: '90%',
        height: 250, 
        marginRight: 50,
        marginTop: 60,
      },
      imgsocialcand3:{
        width: 20,
        height: 20, 
        marginLeft: 30,
        marginTop: 0,
        
      },
      btnsesion33:{
        marginLeft: 70,
      },
      contenopc:{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '60%'
        
      },
      contenopc2:{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '60%',
        marginTop: 20,
        
      },
      txtnormal:{
        color: "#1F184B", 
      },
      txtnormal2:{
        color: "#1F184B",         
        paddingStart: 30,
        fontSize: 16, 
      },
      txtnormalbold:{
        color: "#1F184B", 
        fontWeight: 'bold'
      },
      tituloh1:{
        color: "#622FAE", 
        fontWeight: 'bold',
        fontSize: 36,
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
          
        contenedorprintxt: {
            display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        },
        contenedorprintxt2: {
            display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        },
        contenedortxt: {
          flex: 1,
          margin: 10,
          width: '15vw',
          float: 'left',
          padding: 30,
          color: "#6D6D6D",         
          fontSize: 'medium',
        },
        contenedortxt2: {
            flex: 1,
            margin: 10,
            width: '48%',
            float: 'left',
            padding: 30,
            color: "#6D6D6D",         
            fontSize: 'medium',
          },
          contenedortxt3: {
            flex: 1,
            margin: 10,
            width: '48%',
            float: 'left',
            padding: 30,
            color: "#6D6D6D",         
            fontSize: 'medium',
          },
          contenedortxt4: {
            flex: 1,
            margin: 10,
            width: '48%',            
            height: 400,
            padding: 30,
            color: "#6D6D6D",         
            fontSize: 'medium',
            justifyContent: 'center', 
            flexDirection: 'column',          
            alignItems: 'left',
            textAlignVertical: 'bottom',
            
          },
        txttitulo: {
            color: "#8828FF",
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'left',
        },
        txtparrafo:{
            color: "#6D6D6D",
        textAlign: 'left',
        fontSize: 'medium',
        },
        contenedorseccion3:{
            height: '6%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',        
            flexDirection: 'column',
            textAlign: 'center',
          },
          contenedorseccion4:{
            height: '20%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',        
            flexDirection: 'column',
            textAlign: 'center',
          },
          contenedorseccion5:{
            height: '20%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',        
            flexDirection: 'column',
            textAlign: 'center',
          },
          contenedorseccion6:{
           flex: 1,
           justifyContent: 'space-between',
           width: '100%',
           height: '40%',
          },
        
          contenedorsocial:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: 50,
            marginTop: 30,
            marginBottom: 30
          },
          contencoluna:{
            flex: 1,
            flexDirection: 'row',
          },
          contencoluna2:{
            flex: 1,
            flexDirection: 'column',
            position: 'relative',
            left: '40.26vw',
            top: -340,
          },
          txtfont:{
            paddingLeft: '4.39vw',
          },
          txtfont2:{
           paddingBottom: 40,
          },
          contenedorvista:{
            width: '33%',
            height: 250,
            backgroundColor: "#cccccc",
            justifyContent: 'space-between',
          },
          flexcard:{
             flex: 1,
             width: '8vw',
             borderWidth: 1,
             height: 650,
             marginLeft: '3vw',
             marginRight: '3vw',
             borderColor: '#622FAE',
             borderRadius: '1vw',
             
          },
          flexcard2:{
            flex: 1,
            width: '8vw',
            borderWidth: 1,
            height: 650,
            marginLeft: '3vw',
            marginRight: '3vw',
            backgroundColor: '#622FAE',
            color: '#ffffff',
            borderRadius: '1vw', 
         },
          contflexcard:{
            flex: 1,
            flexDirection: 'row',
            width: '100%', 
            height: 500, 
          },
          subtitle:{
            fontSize: 25,
            paddingStart: 30,
            paddingTop: 22,
            color: '#1F184B',            
          },
          txtbold: {
            fontWeight: 'bold',
            color: '#1F184B',
            fontSize: 30,
            paddingStart: 30,
            paddingTop: 10,
          },
          subtitlewhite:{
            fontSize: 25,
            paddingStart: 30,
            paddingTop: 22,
            color: '#FFFFFF',            
          },
          txtboldwhite: {
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontSize: 30,
            paddingStart: 30,
            paddingTop: 10,
          },
          txtnormalazul:{
            color: "#1F184B",            
            paddingStart: 0, 
            display: 'flex',
            justifyContent: 'justify',
            width: '23vw',
            paddingTop: 20,

          },
          txtnormalwhite:{
            color: "#FFFFFF", 
            paddingStart: 0, 
            display: 'flex',
            justifyContent: 'justify',
            width: '20vw',
            paddingTop: 20,
          },
          txtnormalwhite2:{
            color: "#FFFFFF",
            paddingStart: 30,
            fontSize: 16, 
          },
          txtbtn5:{
            color: "#ffffff",
            fontWeight: "bold",
            paddingStart: 40,
            fontSize: 15,
          },
          txtbtn55:{
            paddingStart: 40,
            color: "#622FAE",
            fontWeight: "bold",
            fontSize: 15,
          }                
      
  });
  