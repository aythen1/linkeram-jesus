import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
} from "react-native";
import dos1 from "../assets/awardfr.png";
import dos2 from "../assets/more-vertical.png";
import linked from "../assets/linkend.png";

export default Componentes = (props) => {
    return (
        
        <View style={styles.content}>
            
        
        <Text style={{width: '15vw'}}>Titulo del enlace</Text>
        <ImageBackground
           source={dos1}           
           style={{ width: 20, height: 20, position: 'absolute', left: '18vw',top:'0vw' }}
         />
         <ImageBackground
           source={dos2}
           resizeMode="cover"
           style={{ width: 20, height: 20, position: 'absolute', left: '20vw',top:'0vw' }}
         />
         
        

          <View style={styles.container}>
      <ImageBackground
        source={props.img}
        resizeMode="cover" 
        style={styles.imageBackground}
      >
      
      </ImageBackground>
    </View>
         
         
          <Text style={{ position: 'absolute', left: '0vw',top:'22vw',width: '15vw' }}>Titulo del enlace</Text>
 
         </View>



         


    );
};


const styles = StyleSheet.create({
      
    bell14:{
        width: 24,
        height: 24, 
        position: 'relative',
        paddingLeft: 30,
        paddingRight: 0,
        top: 20,
        left: -30,
      },      
      container: {
        flex: 1, 
        justifyContent: 'center',  
        alignItems: 'center',      
        position: 'relative',      
        
      },
      imageBackground: {
        width: 350,
        height: 250,        
        position: 'absolute',   
        left: '0%',  
        top: '3%',                
        transform: [{ translateX: -7 }], // Ajusta para centrar horizontalmente (la mitad del ancho)
      },
    bellframe5: {
    position: 'relative',    
    left: '0vw',
    marginRight: '1vw',
    width: '35vw',
    height: 300,
    paddingTop: 50,
    paddingBottom: 50,
   
    backgroundColor: "#F6F6F6",
    
    top: '1vw',
      },  
      posic:{
        position: 'relative',
        top: '-1vw',
        left: '-3vw',
      },
      txtlink:{
        color: '#1F184B',
        fontWeight: 'bold',
         position: 'relative',
         top: '-1vw',
      },
      bell25:{
        position: 'relative',
        left: '-2.5vw',
        width: 26,
        height: 26,
        top: '0.5vw',    
        
      },
      titulouso:{
        color: '#18204B',
       },  
       boldTextbol:{
        color: "#622FAE",
        fontWeight: 'bold',
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
  titulosub1css2:{
    color: "#1F184B",
    
    fontSize: 13,
  },  

})   