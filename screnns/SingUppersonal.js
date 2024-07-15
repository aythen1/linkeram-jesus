import { Text, StyleSheet, View,TextInput , Picker , TouchableOpacity, Image, Dimensions,ScrollView,FlatList,CheckBox  } from 'react-native'
import React, { Component ,useState} from 'react'
import logoimg from '../assets/logo.png'
import link from '../assets/link.png'
import presentacion from '../assets/presentacion.png'
import googleico from '../assets/goolgeico.png'
import linea1 from '../assets/Line1.png'
import linea2 from '../assets/Line2.png'
import eye from '../assets/eye.png'



const { width } = Dimensions.get('window');

const SingUppersonal = () => {
            
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

  <Image
         resizeMode="cover"
        source={logoimg}
        style={styles.logo}
      />


             <Text style={styles.txtgoogle}>
             <Image
         resizeMode="cover"
        source={googleico}
        style={styles.imgsize3}
      /> Registrarse con Google
             </Text>

            

            <Text style={styles.text}>
            <Image
         resizeMode="cover"
        source={linea1}
        style={styles.imgline}
      />  o registrate con tus datos    
        <Image
         resizeMode="cover"
        source={linea2}
        style={styles.imgline}
      /> </Text>

<Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.estilopicker}
      >
        <Picker.Item label="Personal" value = "0" />
        <Picker.Item label="Empresa" value = "1" />
        <Picker.Item label="General" value = "2" />
      </Picker>

<TextInput
        style={styles.btnsesion3}
        placeholder="Nombre"
        
      />


<TextInput
        style={styles.btnsesion3}
        placeholder="Apellido"
        
      />


     <TextInput
        style={styles.btnsesion3}
        placeholder="Usuario o email"
        
      />

      

<TextInput        
        secureTextEntry={!showPassword}
        style={styles.btnsesion3}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
      />
      <TouchableOpacity onPress={toggleShowPassword}>
      <Image
        source={eye}
        style={styles.imgeye}
      />
      </TouchableOpacity>

      
           
<View>



       <TouchableOpacity style={styles.btnsesion4}>
            <Text style={styles.txtbtn3}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.contenopc2}>
       <Text style={styles.txtnormal}> Creando una cuenta afirmas estar de acuerdo con nuestros <Text  style={styles.txtnormalbold}>Términos y Políticas de Privacidad</Text></Text>
       
       <Text style={styles.txtnormal}> ¿Ya tienes cuenta? <Text  style={styles.txtnormalbold}>Inicia Sesión</Text></Text>
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
            
            {item.id == '7' ? (
            <Text style={styles.tituloartbold}>{item.title}</Text>
            ) : (
            <Text style={styles.tituloart}>{item.title}</Text>
            )}
                    
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />

    
    </View>
      
      </ScrollView>
    )
  
}

export default SingUppersonal



const styles = StyleSheet.create({
    
    txtbtn3:{
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'center',
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
    logo: {
        height: 36,
        width: 180,
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '8vw',
       
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
    estiloselect:{
      padding: '3vw',
      height: '5vw',
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
      txtnormal2:{
        color: "#1F184B",         
        paddingStart: 30,
        fontSize: 16, 
      },
      txtnormalbold:{
        color: "#1F184B", 
        fontWeight: 'bold'
      },
    imgeye:{
        width: 20,
        height: 20, 
        position: 'relative',
        left: '26vw',
        top: -30,
     },
    text: {
        fontSize: 20,
        color: "#8828FF",
         marginLeft: 50,
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
      imgline:{
        width: '3vw',
        height: 2,
        marginBottom: 4,
        alignItems: 'center',
        
      },
    imgsize3:{
        position: 'relative',
        top: 6,
        width: 30,
        height: 30,       
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
  