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
  Row,
} from "react-native";
import React, {  useState } from "react";
import logo from "../assets/logo.png";
import { data2 } from "../constants/barmenu2";
import  link1  from  "../assets/bell.png";
import  link2  from  "../assets/Ellipse.png";
import  link3  from  "../assets/menu.png";
import  crearbtn  from  "../assets/crearbtn.png";
import Textos from "../components/Textos";
import switchd from "../assets/ajustes.png";
import cand from "../assets/settings.png";
import cand2 from "../assets/power.png";
import dos from "../assets/dos.png";
import homelog from "../assets/homelog.png";
import tableHead from "../constants/datanotif";
import Listados2 from "../components/Listados2";
import leidosimg from "../assets/sector.png";

const { width } = Dimensions.get("window");

const AjustesNotificacionesTodo = () => {

  
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

  
 


  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Número total de páginas

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumber = ({ item }) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 18,
            color: item === currentPage ? "blue" : "black",
          }}
          onPress={() => handlePageChange(item)}
        >
          {item}
        </Text>
      </View>
    );
  };

  const pageNumbers = Array.from(Array(totalPages).keys()).map((x) => x + 1);

  
  

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
                
                data={data2}
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
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Ajustes</Text>


<ImageBackground

source={cand2}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Cerrar sesión</Text>

</View>

            </View>
            
  <View style={styles.seccion3} >
            
              <Text style={styles.labeltxt}>Notificaciones</Text>
              <ImageBackground
              source={leidosimg}
              resizeMode="cover"
              style={{ width: 23, height: 12, position: 'relative', top: '2vw', left: '48vw' }}
            />
            <Textos txt="Marrcar todo como leído" style={styles.leido}/>
              <View style={styles.seccionconten}>
              
              <Text style={styles.labeltxtp22}>Todo</Text>
              <Text style={styles.labeltxtp2}>Comunidad</Text>
              <Text style={styles.labeltxtp2}>Lista de correo</Text>
              <Text style={styles.labeltxtp2}>Calendario</Text>              
              </View>
                      
              <Listados2 />
              
              <View >
              <FlatList
                data={pageNumbers}
                renderItem={renderPageNumber}
                keyExtractor={(item) => item.toString()}
                horizontal={true}
                ListHeaderComponent={() => (
                  <View style={{ marginHorizontal: 10 }}>
                    <Text>«</Text>
                  </View>
                )}
                ListFooterComponent={() => (
                  <View style={{ marginHorizontal: 10 }}>
                    <Text>»</Text>
                  </View>
                )}
              />
            </View>


  </View>

            
          </View>
        </View>

       

      
        
      </View>
    </ScrollView>
  );
};

export default AjustesNotificacionesTodo;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },              
   labeltxtp2:{
    color: "#1F184B",
    fontSize: 16,
    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    marginTop: 10,
    
  },  
  head: { 
    height: 40, 
    
  },   
  leido:{
    color: "#622FAE",
    fontSize: 16,
    textAlign: 'left',
    width: '35vw',
   fontWeight: 'bold',
    marginTop: 10,
    position: 'relative',
    left: '50vw',


  },
  text: {
    fontSize: 16,
    color: '#fff',  
    textAlign: 'center',
  },
   labeltxtp22:{
    color: "#1F184B",
    fontSize: 16,
    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    marginTop: 10,
    borderBottomWidth: 1,
    
  },   
  labeltxtp:{
   color: "#1F184B",
   fontSize: 13,
   textAlign: 'left',    
   width: '40vw',    
 
   marginTop: 10,    
   paddingLeft: 3,
 }, 
   labeltxt:{
    color: "#1F184B",
    fontSize: 18,
    textAlign: 'left',
    width: '20vw',    
    fontWeight: 'bold',
    marginTop: 10,    
    paddingLeft: 3,
  },
  labeltxt3:{
   color: "#1F184B",
   fontSize: 18,
   textAlign: 'left',
   width: '60vw',    
   fontWeight: 'bold',
   marginTop: 15,    
   paddingLeft: 3,
   position: 'relative',
   left: '41vw',
 },   
   labeltxtp3:{
    color: "#1F184B",
    fontSize: 16,

    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    position: 'relative',
    top: '-2vw',
    left: '12vw',
    
  }, 
    nombre:{
    position: 'relative',
    top: '1vw',        
    left: '3vw',
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
bell8:{
  width: 192,
  height: 31, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: 0,
  left: -10,
},
bell14:{
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
top: width < 750 ? '2vw' : '20vw',
left: 40,
},
  contenedor: {
    height: "65%",
    width: "100vw",
    alignItems: "flex-start",
  },
  seccion1:{    
    
    height: 'max-content',
    width: width < 750 ? "100%" : "20%",
    marginLeft:  width < 750 ? '14vw' : '3vw',
    
  },  
  seccionconten:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "55vw",        
    marginTop: '3vw',
  },
  seccionconten2:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "55vw",    
    height: '20vw',
  },
  seccion3:{
    height: '70vw',  
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
    height: 100,
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
