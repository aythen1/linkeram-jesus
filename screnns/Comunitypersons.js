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
import candimg from "../assets/solar_feed-outline.png";
import candimg2 from "../assets/users2.png";
import candimg3 from "../assets/user-plus.png";
import imageseguidos from "../assets/seguidosseguidores.png";
import imgseg from "../assets/user-check.png";



const { width } = Dimensions.get("window");

const Comunitypersons = () => {

  
  
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
            
             
            <View style={styles.comunidad}>

              
<View style={styles.slice1}>

<ImageBackground

source={candimg}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Comunidad</Text>
      

</View>
<View style={styles.slice2}>

<ImageBackground

source={candimg2}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Personas</Text>
      

</View>
<View style={styles.slice3}>

<ImageBackground

source={candimg3}
resizeMode="cover"
style={styles.bell14}
>
<View></View>
</ImageBackground>
<Text>Solicitudes</Text>
      

</View>


  

</View>






            <View>



           

              
           
          </View>


          <ImageBackground

source={imageseguidos}
resizeMode="cover"
style={styles.bell24} 
/>     



            <FlatList
              data={userslist}
              renderItem={({ item }) => (
                <View style={{ height: 55 }}>
                  <View style={styles.imgfl}>
                 
                  <ImageBackground

                source={item.image}
                resizeMode="cover"
                style={styles.bell21} 
                />                
                
                  
                    <View>
                      
                      <Text style={styles.tituloart2}>{item.title}</Text>
                      {item.id == 1 || item.id == 3 || item.id == 6 || item.id == 8 ? (
                        
                        <Image source={item.image2} style={styles.img2} />
                      ) : null}
                      <Text style={styles.subtituloart2}>{item.subtitle}</Text>
                     

                      {item.id == 3 || item.id == 4 || item.id == 5 || item.id == 6 || item.id == 9 ? (
                        <>
                        <View style={styles.imgleft1}>
                        <ImageBackground

                        source={item.siguiendo}
                        resizeMode="cover"
                        style={styles.bell26} 
                        /> 
                        <Text style={styles.subtituloart23}>{item.txtsiguiendo}</Text>               
                        </View>
                        </>
                      ) : null}

                        {item.id == 2 || item.id == 7 || item.id == 8  ? (
                        <>
                        <View style={styles.imgleft2}>
                        <ImageBackground

                        source={item.seguir}
                        resizeMode="cover"
                        style={styles.bell26} 
                        />   
                        <Text style={styles.subtituloart24}>{item.txtseguir}</Text>            
                        </View>
                         </>
                      ) : null}

                      
 

                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            
            

            <View style={{ position: 'relative', top: '-20vw', left: '12%' }}>
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

export default Comunitypersons;


const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },   
  imgleft1:{
    backgroundColor: "#FAFAFA",
    width: "12.81vw",
    height: 35,
    position: 'relative',
    left: '45vw',
    top: '-7vw',
    display: 'flex',
    borderRadius: 6,
  },   
  imgleft2:{
    backgroundColor: "#1F184B",
    width: "12.81vw",
    height: 35,
    position: 'relative',
    left: '45vw',
    top: '-7vw',
    display: 'flex',
    borderRadius: 6,
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
  borderBottomWidth: 1,
},
slice3:{
width: '13.83vw',
height: 43,
},
  subtituloart2: {
    marginLeft: "0.3vw",
    color: "#C3C3C3",
    fontSize: 14,
  },
  subtituloart23: {
    marginLeft: "0.3vw",

    color: "#1F184B",
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
    maxHeight: '100%', // Asegúrate de que la imagen no sobrepase el contenedor
    maxWidth: '100%', // Asegúrate de que la imagen no sobrepase el contenedor
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
