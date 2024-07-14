import { Text, StyleSheet, View,ImageBackground, TextInput , TouchableOpacity, Image, Dimensions,ScrollView,FlatList  } from 'react-native'
import React, { Component ,useState} from 'react'
import logo from '../assets/logo.png'
import link from '../assets/link.png'
import lupa from '../assets/search.png'



const { width } = Dimensions.get('window');

const UserList = () => {



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
            color: item === currentPage ? 'blue' : 'black',
          }}
          onPress={() => handlePageChange(item)}
        >
          {item}
        </Text>
      </View>
    );
  };

  const pageNumbers = Array.from(Array(totalPages).keys()).map((x) => x + 1);
  
  

        const data = [
            { id: 1, title: 'Registrarse' },
            { id: 2, title: 'Iniciar Sesión' },
            { id: 3, title: 'Buscador' },
            { id: 4, title: 'Sobre Nosotros' },
            { id: 5, title: 'Planes' },
            { id: 6, title: 'Centro de Ayuda' },
            { id: 7, title: 'Términos y Políticas' },
            
          ];


          const dataconst = [
            { id: 1, title: 'Bowen Group', subtitle: '@BowenGroup', image: './assets/avatars/Avatar.png' , image2:'./assets/verify.png' },
            { id: 2, title: 'Alex Hamilton', subtitle: '@AlexHamilton', image: './assets/avatars/Avatar2.png' , image2:'./assets/verify.png'},
            { id: 3, title: 'Taylor Smith', subtitle: '@TaylorSmith', image: './assets//avatars/Avatar3.png' , image2:'./assets/verify.png'},
            { id: 4, title: 'Darcy Patterson', subtitle: '@DarcyPatterson', image: './assets/avatars/Avatar4.png' , image2:'./assets/verify.png'},
            { id: 5, title: '21 Industries', subtitle: '@21Industries', image: './assets//avatars/Avatar5.png' , image2:'./assets/verify.png'},
            { id: 6, title: 'Bowen Group', subtitle: '@AlexHamilton', image: './assets/avatars/Avatar6.png' , image2:'./assets/verify.png'},
            { id: 7, title: 'Alex Hamilton', subtitle: '@TaylorSmith', image: './assets/avatars/Avatar7.png' , image2:'./assets/verify.png'},            
            { id: 8, title: 'Taylor Smith', subtitle: '@TaylorSmith', image: './assets/avatars/Avatar8.png' , image2:'./assets/verify.png'},            
            { id: 9, title: 'Darcy Patterson', subtitle: '@DarcyPatterson', image: './assets/avatars/Avatar9.png' , image2:'./assets/verify.png'},            
            
            
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
     
       

    
        <View>
      <TextInput                
        style={styles.btnsesion3}  
        placeholder="Search... "
      />
      <TouchableOpacity >
      <Image
        source={lupa}
        style={styles.imglupa}
      />
      </TouchableOpacity>
    </View>

    <View style={styles.contenedorseccion3}>


       


  <FlatList
    data={dataconst}
    renderItem={({ item }) => (
      <View style={{ height: 55 }}>
        <View style={styles.imgfl} >
          
        
          <Image source={item.image} style={styles.img} />

         
          <View>
            <Text style={styles.tituloart2}>{item.title}</Text>{item.id == 1 || item.id == 3 || item.id == 7 ? <Image source={item.image2} style={styles.img2} /> : null }
            <Text style={styles.subtituloart2}>{item.subtitle}</Text>
          </View>
        </View>
      </View>
    )}
    keyExtractor={(item) => item.id.toString()}
  />

<View style={{ marginTop: -70 }}>
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
            
            {item.id == '3' ? (
            <Text style={styles.tituloartbold}>{item.title}</Text>
            ) : (
            <Text style={styles.tituloart}>{item.title}</Text>
            )}
                    
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />

    
    </View>

        
        <View style={styles.logof}>
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

export default UserList


const styles = StyleSheet.create({
    header: {
      display: 'flex',
      backgroundColor: '#fff', 
      width: '100%',
      
      justifyContent: 'space-between',      
      flexDirection: 'row',

    },
    contenedor: {
      height: '40%',
      width: '100vw',      
      alignItems: 'flex-start',
      
    }, 
    img:{
      width: 46,
      height: 46,      
    },
    img2:{
      width: 21,
      height: 20,      
      position: 'absolute',
      left: '8vw',
    },
      imglupa:{
      width: 20,
      height: 20, 
      position: 'relative',
      left: '22%',
      top: -35,
   },
    tituloart:{
        marginLeft: '3vw',
       
    },   
    imgfl:{
      flexDirection: 'row',
      width: '45vw',
      backgroundColor: '#FAFAFA',
    },
    tituloart2:{
      marginLeft: '0.3vw',
      color: '#1F184B',
      fontWeight: 'bold',
      fontSize: 15,
     
  },
    subtituloart2:{
      marginLeft: '0.3vw',
      color: '#C3C3C3',
      fontSize: 14,
  },   
    tituloartbold:{
        marginLeft: '3vw',
        fontWeight: 'bold',
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
      titulouso:{
        color: "#1F184B", 
        fontWeight: 'bold',
        fontSize: 26,
        paddingLeft: 50,
        textAlign: 'left', 
      }, 
    txtinput:{
      height: '20%',
      width: '80%',
      alignItems: 'flex-start',
      padding: 10,
      marginTop: 90,
      borderBottomWidth: 1,
      borderBottomColor: "#C3C3C3",      
    },
    
    logo: {
        height: '4vw',
        width: '18vw',
        paddingLeft: 20,
        paddingTop: 10,
       
    },  
    logof: {
      height: '4vw',
      width: '18vw',
      position: 'relative',
      top:'-10vw',
      marginBottom: 100,
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
        width: '46vw',    
        justifyContent: 'center',
        borderRadius: 5,
        paddingLeft: 29,
        paddingRight: 10,
        marginRight: 50,
        paddingStart: 500,
        marginLeft: '15vw',
        marginTop: 10,
        backgroundColor: "#F1EFEC",
        paddingTop: 5,
        placeholderTextColor:"#928F8F",        
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
      top: '-15vw',
      left: '40%',
      marginBottom: 100,
      
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
        height: '20%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0vw', 
        flexDirection: 'row',
        paddingTop: 0,
        
      },
      contenedorseccion2:{
        height: '30%',
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',        
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: '15vw',
        marginTop: '0vw',               
      },  
      contenedorseccion3:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',        
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: '15vw',
        marginTop: '0vw',               
      },  
  });
  