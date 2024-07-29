import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
} from "react-native";
import Postyoutubedos from "../components/Componentyoutube";


export default Postsocial = (props) => {
    return (
        <View>
        <ImageBackground
            source={props.fotopersonal} 
            resizeMode="cover"
            style={styles.bell14}
        >
          
        </ImageBackground>

        

        <View style={{ marginVertical: 8 }}>
    <Text style={styles.titulouso}>
        <Text style={styles.boldTextbol}>{props.title.substring(0, 13)}</Text>
        {props.title.substring(13)}
    </Text>
    <Text style={styles.boldTextsocial}>{props.social}</Text>
    <Text style={styles.boldTexttime}>{props.time}</Text>
    </View>

    

<ImageBackground

source={props.image}
resizeMode="cover"
style={styles.bell25}
>

</ImageBackground>

<Text style={styles.txtlink}>{props.txtlinl}</Text>




{

props.iditem === 9 ? (
  <ImageBackground

source={props.imgframe}
resizeMode="cover"
style={styles.bellframe4}
></ImageBackground>
):(

  
  <ImageBackground

source={props.imgframe}
resizeMode="cover"
style={styles.bellframe}
></ImageBackground>

)



}






{

props.iditem === 4 ? (<Text style={styles.titulosub1css1}>{props.subtitulo}</Text>):(
  <Text style={styles.titulosub1css1}></Text>
)


}


<ImageBackground

source={props.imginsta}
resizeMode="cover"
style={styles.imginstacss}
></ImageBackground>
<Text style={styles.instacountcss}>{props.instacount}</Text>
                     
<ImageBackground

source={props.comentsinsta}
resizeMode="cover"
style={styles.imginstacss2}
></ImageBackground>
<Text style={styles.instacountcss2}>{props.instacomen}</Text>

                      <Text style={styles.titulosub1css}>{props.titulosub1}</Text>
                      <Text style={styles.titulosub1css2}>{props.subtitulo}</Text>


          
                <Text style={styles.parrafo}>{props.contenido}</Text>
                <Text style={styles.parrafoboldn}>{props.subtitle}</Text>



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
  titulosub1css2:{
    color: "#1F184B",
    
    fontSize: 13,
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
      titulouso:{
        color: '#18204B',
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
  titulosub1css1:{
    color: "#1F184B",
    position: 'relative',
    top: '1.2vw',
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
    boldTextsocial:{
    color: "#C3C3C3",
  },

})   