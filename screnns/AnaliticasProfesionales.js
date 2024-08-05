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
  FlatList          
} from "react-native";
import React, {  useState } from "react";
import logo from "../assets/logo.png";
import link from "../assets/link.png";
import { data } from "../constants/barmenu";
import { data2 } from "../constants/barmenu2";
import { data3 } from "../constants/barmenu3";
import  link1  from  "../assets/bell.png";
import  link2  from  "../assets/Ellipse.png";
import  link3  from  "../assets/menu.png";
import  link4  from  "../assets/menu.png";
import  crearbtn  from  "../assets/crearbtn.png";
import Textos from "../components/Textos";
import Entradatxt from "../components/Entradatxt";
import switchd from "../assets/ajustes.png";
import cand from "../assets/settings.png";
import dos from "../assets/dos.png";
import homelog from "../assets/homelog.png";
import mas from "../assets/plus-circle.png";
import lupa from "../assets/search.png";
import { userslist } from "../constants/userslist";
import { userslistdos } from "../constants/userslist2";
import { userslisttres } from "../constants/userslist3";
import candimg from "../assets/solar_feed-outline.png";
import candimg2 from "../assets/users2.png";
import candimg3 from "../assets/user-plus.png";
import imageseguidos from "../assets/barraseguidos.png";
import imgseg from "../assets/user-check.png";
import imgseg2 from "../assets/user-checkmor.png";
import candimg4 from "../assets/rocket-svgrepo-com 1.png";
import candimg5 from "../assets/monedero.png";
import graficoimg from "../assets/graficocharts.png";
import figuno from "../assets/letra1.png";
import figdos from "../assets/letra2.png";
import figtres from "../assets/letra3.png";
import figcuatro from "../assets/letra4.png";
import figcinco from "../assets/letra5.png";
import csv from "../assets/csv-light.png";
import { datamenu2 } from "../constants/datamenu2";

const { width } = Dimensions.get("window");

const HomeWallet = () => {

  
  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  
  const renderItem = ({ item }) => {
    return (
      <View>
      <Text style={styles.nombre}>{item.name}</Text>        
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={{ width: 24, height: 24 }}
      />
      {([3].includes(item.id)) && (
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
                
                data={data3}
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
<Text style={styles.txt}> Vea su descripción general dentro de los últimos 30 días o más </Text>



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




</View>

            </View>
           
            <View style={styles.seccion3}>
            
             
         <Text style={styles.txtcrear}>Analíticas</Text>
    

         <View>
 
            <View>

          
            </View>
            <View>

          
            </View>
            <View>

          
            </View>

         </View>


        <View style={{ marginTop: -280, marginLeft: 200 }}>
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
           

    
            <View>

          </View>


          

            </View>
   
          
            </View>

            

            
          </View>
        </View>

       

      
        
      
    </ScrollView>
  );
};

export default HomeWallet;


const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },   
  labeltxtp2:{
    padding: 0,
    color: "#1F184B",
    height: 40,
    paddingLeft: 15,
    paddingBottom: 20,
  },    
  txtnombre:{
    position: 'relative',
    left: '3vw',
  },
  txtcampo:{
    position: 'relative',
    left: '20vw',
    top: '-1.5vw',
  },
  txtfecha:{
    position: 'relative',
    left: '33vw',
    top: '-3vw',
  },
  txtmetpago:{
    position: 'relative',
    left: '45vw',
    top: '-4.2vw',
  },
  txtsaldo:{
    position: 'relative',
    left: '120vw',
    top: '-6vw',
  },
  contenedorseccion2: {
    height: "100%",
    width: "80vw",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    position: 'relative',
    top: '20vw',
  }, 
  labeltxtp22:{
    padding: 10,
    color: "#1F184B",
    fontWeight: 'bold',
    paddingLeft: 120,
    
  },
  labeltxtp22x:{
    padding: 10,
    color: "#1F184B",
    fontWeight: 'bold',
    paddingLeft: 40,
    
  },
  labeltxtp22vent:{
    
    color: "#1F184B",
    fontWeight: 'bold',
    height: 30,
    borderBottomWidth: 1,
    
  },
  labeltxtp22saldo:{
    padding: 10,
    color: "#1F184B",
    fontWeight: 'bold',
    paddingLeft: '77%',
    marginTop: -80,
  },  
  seccionconten:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "65vw",  
          
    marginTop: '3vw',
    position: 'relative',
    top: '20vw',
  },  
  stadistic:{
   width: '50vw',
   flexDirection: 'column',
   height: 50,   
   position: 'relative',
   left: '95%',
   padding: 10,
  },
  figura1:{
   position: 'relative',
   left: '-31vw',
   top: '9vw',
   width: 175,
   height: 49,
  },
  figura2:{
    position: 'relative',
    left: '-47vw',
    top: '14vw',
    width: 175,
    height: 49,
   },
   figura3:{
    position: 'relative',
    left: '-32vw',
    top: '10vw',
    width: 175,
    height: 49,
   },
   figura4:{
    position: 'relative',
    left: '-17vw',
    top: '6vw',
    width: 175,
    height: 49,
   },
   figura5:{
    position: 'relative',
    left: '-3vw',
    top: '2vw',
    width: 175,
    height: 49,
   },
   figura6: {
    borderWidth: 1,          
    borderColor: '#622FAE',   
    borderRadius: 10,         
    padding: 10,          
    width: '20vw',    
    alignItems: 'center',     
    justifyContent: 'center',  
    backgroundColor: 'white',  
    margin: 10,      
    position: 'relative',
    left:'20vw',
  },
  imgfigura6: {
    width: 30,
    height: 30,
    position: 'absolute',      
    top: 5,
    left: 0,
    borderRadius: 10,         
  },
  textoBoton: {
    color: '#622FAE',           
    fontWeight: 'bold',       
    zIndex: 1,                
  },

   
   fig:{
    paddingTop: 20,
    paddingBottom: 20, 
  },
  boton:{
    backgroundColor: "#622FAE",
    width: "16.76vw",
    borderRadius: 6,
    position: 'relative',
    left: '70%',
    top: '4%',
    cursor: "pointer",
  },  
  imagengrafico:{
     width: '95%',
  },
  elementos:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 10, 
    
    
    
    
  },
  elementosuno:{
  flex: 1,
  height: 40,
  
  },
  image:{
   position: 'relative',
   top: 8,
   left: 5,
   
  },
  elementosdos:{
   flex: 1,
   backgroundColor: "#413258",
   width: '100%',
   flexDirection: 'column',
   height: 40,
   width: '80vw', 
   
  },
  buttonText1: {
    color: '#413258',
    fontSize: 16, 
    textAlign: 'center', 
    padding: 5,
    
  },
  buttonText2: {
    color: '#413258',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'left', 
    padding: 5,
    width: '30vw',
  },
  buttonText3: {
    color: '#622FAE',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'left', 
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, 
    textAlign: 'center', 
    padding: 5,
    
  },
  txtrechazar:{
    color: "#413258",
    borderColor: "#413258",
    width: '6.8vw',
    height: 29,
    borderWidth: 2,
    borderRadius: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    padding: '0.7vw',
    fontWeight: 'bold',
    position: 'relative',
    left: '-8vw',
    top: '5vw',
  },
  txtaceptar:{
    color: "#ffffff",
    width: '6.8vw',
    height: 29,
    borderColor: "#413258",
    backgroundColor: "#413258",
    borderWidth: 2,
    borderRadius: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontWeight: 'bold',
    position: 'relative',
    left: '0vw',
    top: '2.8vw',
  },
  imgleft1:{
  
    width: "12.81vw",
    height: 35,
    position: 'relative',
    left: '45vw',
    top: '-7vw',
    display: 'flex',
    borderRadius: 6,
    zIndex: 0,
  },   
  imgleft2:{
    
    width: "12.81vw",
    height: 35,
    position: 'relative',
    left: '45vw',
    top: '-7vw',
    display: 'flex',
    borderRadius: 6,
    zIndex: 0,
  },
  comunidad:{
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70.71vw',
    height: 43,
    marginLeft: '3vw',
    
  },
  slice1:{
    width: '13.83vw',
    height: 43,
},
slice2:{
  width: '13.83vw',
  height: 43,
 
},
slice3:{
width: '13.83vw',
height: 43,
borderBottomWidth: 1,
},
  subtituloart2: {
    marginLeft: "0.3vw",
    color: "#C3C3C3",
    fontSize: 14,
  },
  subtituloart23: {
    marginLeft: "0.3vw",
    color: "#622FAE",
    fontWeight: "bold",
    fontSize: 14,
    position: 'relative',
    left: '5vw',
    top: '-1.1vw',
    borderRadius: 6,
  },
  subtituloart24: {
    marginLeft: "0.3vw",
    color: "#ffffff",
    fontSize: 14,
    position: 'relative',
    left: '5vw',
    top: '-1.2vw',
    borderRadius: 6,
  },
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imglupa: {
    width: 20,
    height: 20,
    position: "relative",
    left: "1%",
    top: -35,
  },
  btnsesion3: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    height: 50,
    width: "46vw",
    justifyContent: "center",
    borderRadius: 5,
    paddingLeft: 29,
    paddingRight: 10,
    marginRight: 50,
    paddingStart: 500,
    marginLeft: "0vw",
    marginTop: 10,
    backgroundColor: "#F1EFEC",
    paddingTop: 5,
    placeholderTextColor: "#928F8F",
  },  
  tituloart: {
    marginLeft: "3vw",
  },
  imgfl: {
    flexDirection: "row",
    width: "45vw",
    backgroundColor: "#FAFAFA",
  },
  tituloart2: {
    marginLeft: "0.3vw",
    color: "#1F184B",
    fontWeight: "bold",
    fontSize: 15,
  },  
  img2: {
    width: 21,
    height: 20,
    position: "absolute",
    left: "8vw",
  },  
  img: {
    width: 46,
    height: 46,
  },
  
  viewstile:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '35vw',
    position: 'relative',
    top: '0vw',
    left: '-2vw',
  },
  viewstile2:{    
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    width: 100,
    height: 100,
    
  }, 
  btnGuardar:{
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1F184B',
    borderRadius: 5,    
    position: 'relative',
    top: '10vw',
    width: '42vw',
    left: '2vw',
  },
  text1: { 
    margin: 6 ,
    color: "#1F184B",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',  
    textAlign: 'center',
  },
    bell10:{
    position: 'relative',
    top: 6,
    width: 32,
    height: 32,
    left: '35vw',
    borderRadius: '2vw',
  },     
  estiloscont:{
    display: 'flex',   
    justifyContent: 'left',
    flexDirection: 'row',
   },   
   containers: {
   
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 'inherit',
    marginTop: 200,
    
   
  },  
  btnSave: {
    backgroundColor: '#1F184B',
    color: '#ffffff',
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 250,
    textAlign: 'center', 
  },
    entrada:{
    color: "#1F184B",
    padding: '1.8vw',
    width: '20vw',
    marginRight: '4vw',
    height: 25,
    borderColor: "#cccccc",
    borderWidth: 1,
  },    
    box: {
    margin: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
},
    bell20:{
    position: 'relative',
    left: '5vw',
    width: 25,
    height: 32,
    top: '-2vw',
    borderRadius: '2vw',
  },  
  bell21:{
    position: 'relative',
    left: '0vw',
    width: 46,
    height: 46,
    top: '0vw',
    borderRadius: '2vw',
  },
  bell25:{
    position: 'relative',
    left: '20vw',
    top: '0vw',
    width: 23,
    height: 23,    
    borderRadius: '2vw',
  },
  bell26:{
    position: 'relative',
    left: '1vw',
    top: '0.3vw',    
    color: "#000000",
    width: 23,
    height: 23,    
    borderRadius: '2vw',
  },  
  bell27:{
    position: 'relative',
    left: '40vw',
    top: '-3vw',
    color: "#000000",
    backgroundColor: "#000",
    width: 23,
    height: 23,    
    borderRadius: '2vw',
  },
  bell24:{
    
    width: 956,
    height: 60,
    top: '0vw',
    borderRadius: '2vw',
  },
  bell22: {
    position: 'relative',    
    left: '-15vw',
    marginRight: '1vw',
    width: 105,
    height: '7vh',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundColor: "#F6F6F6",
    
    top: '1vw',
  },
  img: {
    maxHeight: '100%', 
    maxWidth: '100%', 
  },
  bell23:{
    position: 'relative',
    left: '0vw',
    width: 45,
    height: 46,
    top: '0vw',    
    borderRadius: '2vw',
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
    
  },labeltxtp34:{
    color: "#1F184B",
    fontSize: 16,

    textAlign: 'left',
    width: '35vw',
    fontWeight: 'bold',
    position: 'relative',
    top: '-3.5vw',
    left: '42vw',
    
  },         
  estiloscont:{
   display: 'flex',  
   height: '5vw', 
   justifyContent: 'left',
   flexDirection: 'row',
  },
    nombre:{
    position: 'relative',
    top: '1vw',        
    left: '3vw',
  },
  subtitulo:{
    
    color: "#cccccc",
    position: 'relative',
    top: '1vw',
    left: 40,

    
  },
  txtcrear:{
    color: "#622FAE",
    fontWeight: 'bold',
    marginBottom: 30,
    paddingBottom: 10,
    position: 'relative',
    top: '-1.1vw',
    left: 50,
    fontSize: 20,
    
  },
  txt:{
    color: "#cccccc",    
    marginBottom: '-10vw',
    paddingBottom: 10,
    top: '-23vw',
    left: '20vw',
    width: '40vw',
    fontSize: 16,
    
  },
  crearboton:{
    width: '15vw',
    height: '4vw',
    marginLeft: 30,
    marginTop: 80,
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
  marginBottom: 80,
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
bell15:{
  
  width: 24,
  height: 24, 
  position: 'relative',
  paddingLeft: 30,
  paddingRight: 0,
  top: -8,
  left: 4,
  
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
