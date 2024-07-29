import React from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
} from "react-native";

export default Postyoutubedos = (props) => {
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
/>

<Text style={styles.txtlink}>{props.txtlinl}</Text>




{

props.iditem === 9 ? (

    <View>
    </View>
  
):(
<View>
</View>
  


)



}


    

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