import { Text, StyleSheet, View,TextInput, TouchableOpacity, Image, Dimensions,ScrollView,FlatList,CheckBox  } from 'react-native'
import React, { useState} from 'react'
import logoimg from '../assets/logo.png'
import presentacion from '../assets/presentacion.png'
import icollave from '../assets/llave.png'
import eye from '../assets/eye.png'
import capchadivimg from '../assets/capcha.png'
import imgvolver from '../assets/arrow-left.png'



const { width } = Dimensions.get('window');

const RecoveryPass = () => {
            
  const [selectedValue, setSelectedValue] = useState('');

        const data = [
            { id: 1, title: 'Registrarse' },
            { id: 2, title: 'Iniciar Sesión' },
            { id: 3, title: 'Buscador' },
            { id: 4, title: 'Sobre Nosotros' },
            { id: 5, title: 'Planes' },
            { id: 6, title: 'Centro de Ayuda' },
            { id: 7, title: 'Términos y Políticas' },
            
          ];


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
        <ScrollView >
              
            
        <View style={styles.contenedor}>
        
       

        <View style={styles.vistapresentacion} >
        <Image
          resizeMode="cover"
          source={presentacion}
          style={styles.imgsize2}
        />

        </View>
         
  <View style={styles.singupseccion1} >
    <View style={styles.volverdiv}>
  <Text style={styles.txtvolver}>
  <Image
         resizeMode="cover"
        source={imgvolver}  
        style={styles.volverimg}      
      />

     Volver</Text>
     </View>
  <Image
         resizeMode="cover"
        source={logoimg}
        style={styles.logo}
      />


             <Text style={styles.txtgooglellave}>
             <Image
         resizeMode="cover"
        source={icollave}
        style={styles.imgsize3lla}
      /> </Text>

            

            <Text style={styles.text}>
           ¿Olvidaste tú contraseña?   
        </Text>
        <Text style={styles.txtnormalcent}> Ingresa tu email registrado a tu cuenta de Linkeram para resetear tu contraseña </Text>


     <TextInput
        style={styles.btnsesion3}
        placeholder="email"
        
      />

      

           
<View>

     <View style={styles.capchadiv}>
     <View style={styles.capchadivcontent}>
     <Image
         resizeMode="cover"
        source={capchadivimg}
        style={styles.imgsize3}
      />

<Text style={styles.txtnormalck}><CheckBox
        value={isChecked}
        onValueChange={handleCheck}
      />  I'm not a robot</Text>


<Text style={styles.txtnormalr}>reCAPTCHA</Text>
<Text style={styles.txtnormalr}>Privacy - Terms</Text>

      
      
       
     </View>
     </View>

       <TouchableOpacity style={styles.btnsesion4}>
            <Text style={styles.txtbtn3}>Enviar link</Text>
        </TouchableOpacity>
        <View style={styles.contenopc2}>
       
       <Text style={styles.txtnormal}> ¿Recordaste tu contraseña? <Text  style={styles.txtnormalbold}>Iniciar Sesión</Text></Text>
    </View>   



    </View>

    </View>
        
       

       
       
       
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
            
            
            <Text style={styles.tituloart}>{item.title}</Text>
           
                    
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />

    
    </View>
      
      </ScrollView>
    )
  
}

export default RecoveryPass



const styles = StyleSheet.create({
    
    txtbtn3:{
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'center',
    },
    volverdiv:{
      width: '25vw',
      marginLeft: '3.5vw',
      marginTop: '0vw',
      position: 'relative',
      top: 10,
    },
    txtvolver:{
      color: "#1F1819",
      fontSize: 20,
      paddingBottom: 30,
    },
    volverimg:{
      position: 'relative',
      top: 10,
    },
    estilopicker:{
      padding: 10,
      width: '25vw',
      marginLeft: '3.5vw',
      borderColor: "#cccccc",
      color: "#1F1819",
    },
    selectopc:{
      padding: 25,
    },
    capchadiv:{
      borderWidth: 1,
      borderColor:"#CCCCCC",
      height: 50,
      width: '25vw',
      paddingStart: 30,
      justifyContent: 'center',
      borderStyle: 'dashed',
      borderRadius: 5,
      padding: 20,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 50,
      marginLeft: 50,
      marginTop: 10,
      paddingTop: 5,
      placeholderTextColor:"#C3C3C3",  
    },
    capchadivcontent:{
        width: 220,
        height: 50,
        borderWidth: 1,
        borderColor:"#CCCCCC",
        marginTop: 12,
        marginLeft: 50,
    },
    logo: {
        height: 36,
        width: 180,
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '25vw',
        position: 'relative',
        top: '-3vw',
       
    }, 
    imgsize2:{
        
        width: '50vw',
        height: '50vw',  
        position: 'relative',
        top: '-5vw',
        left: '12vw',
    },
    tituloart:{
        marginLeft: '3vw',
       
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
        flexDirection: 'column',
        width: '60%',
        marginTop: 0,
        
      },
      btnsesion4: {
        borderWidth: 1,
        borderColor:"#CCCCCC",
        backgroundColor: '#5F54A4',
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
      txtnormal:{
        color: "#1F184B", 
        textAlign: 'center',
      },
      txtnormalr:{
        color: "#1F184B", 
        textAlign: 'center',
        fontSize: 9,
        marginLeft: 130,
        marginTop: -26,
        lineHeight: 35,
      },
      txtnormalck:{
        color: "#1F184B", 
        textAlign: 'left',
        paddingLeft: 5,
        justifyContent: 'center',        
      },
      txtnormalcent:{
        color: "#1F184B", 
        textAlign: 'center',
        width: '28vw',
        marginLeft: 30,
      },     
      txtnormalbold:{
        color: "#1F184B", 
        fontWeight: 'bold'
      },
    
    text: {
        fontSize: 20,
        color: "#1F184B",
         textAlign: 'center',
         width: '30vw',
         fontWeight: 'bold',
      },
      btnsesion3: {
        borderWidth: 1,
        borderColor:"#CCCCCC",
        height: 50,
        width: '25vw',
        paddingStart: 30,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 50,
        marginLeft: 50,
        marginTop: 10,
        paddingTop: 5,
        placeholderTextColor:"#C3C3C3",        
    },
      
      imgsize3lla:{
        position: 'relative',
        top: 6,
        width: 50,
        textAlign: 'center',
        height: 50,   
        marginLeft: 30,
    },
    imgsize3:{
        position: 'relative',
        top: 6,
        width: 25,
        textAlign: 'center',
        height: 25,   
        marginLeft: '75%',
    },
    vistapresentacion:{
        width: '60vw',
        height: '10%',
             
    },
    singupseccion1:{
        width: '60vw',
        height: '30vw',

        flex: 1,        
        alignItems: 'left',
        paddingLeft: '5vw',
        paddingTop: '5vw',
        
        
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
      txtgoogle:{
        fontSize: 16,
      
        marginLeft: 100,
        marginBottom: 4,
      },txtgooglellave:{
        fontSize: 16,
      
        marginLeft: 160,
        marginBottom: 4,
      },
      
      contenedor:{
        width: '100%',
        height: '5%',
        paddingBottom: 100,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
         flex: 1,
      },
                     
    txtinput:{
      height: '20%',
      width: '80%',
      alignItems: 'flex-start',
      padding: 10,
      marginTop: -200,
      borderBottomWidth: 1,
      borderBottomColor: "#C3C3C3",      
    },
      
     smallScreenContainer: {
        flexDirection: 'column',
      },    
      contenedorseccion1:{
        height: '0%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',        
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
        marginLeft: '25vw',
        marginTop: '-10vw',               
      }, 
  });
  