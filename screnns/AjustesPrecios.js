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
  Pressable,   
} from "react-native";
import React, {  useState } from "react";
import logo from "../assets/logo.png";
import { data2 } from "../constants/barmenu2";
import { datanotif } from "../constants/datanotif";
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
import check from "../assets/check.png";
import checkwhite from "../assets/checkwhite.png";

const { width } = Dimensions.get("window");

const AjustesPrecios = () => {


  

  const [count, setCount] = useState(0);
  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };


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

  
  const renderItem2 = ({ item }) => {
    return (
      
         <View>             
        <Text style={styles.nombre}>{item.name}</Text>
        <Text style={styles.subtitulo}>{item.subtitle}</Text>
        <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={{ width: 24, height: 24, position: 'relative', top: '-1.1vw' }}
            />
      </View>
    );
  };
  

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
            <View style={styles.seccion2}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={datanotif}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>

            

            </View>
<View style={styles.seccion3}>
            <ScrollView vetical={true} showsVerticalScrollIndicator={false}  style={styles.containersroll}>
            <Text style={styles.labeltxt}>Suscripción</Text>
  <Text style={styles.labeltxtp}>
    Integra Linkeram con otras plataformas para potenciar la productividad!
  </Text>
  <View style={styles.flexContainer}>
    <View style={styles.flexcard}>
      <Text style={styles.subtitle}>Plan Freemium</Text>
      <Text style={styles.txtbold}>$0/mes</Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Hasta 50 campos personalizados
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Botones de contacto
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Personalización del perfil
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Embed Fields (próximamente).
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Enlace único de Linkeram
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Monetización básica
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Tarjeta de visita digital
      </Text>
      <Text style={styles.txtnormalazul}>
        <Image
          source={check}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Analíticas básicas (1 mes)
      </Text>
      <TouchableOpacity style={styles.btnsesion5}>
        <Text style={styles.txtbtn5}>Plan actual</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsesion55}>
        <Text style={styles.txtbtn55}>Plan actual</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.flexcard2}>
      <Text style={styles.subtitlewhite}>Plan Básico</Text>
      <Text style={styles.txtboldwhite}>$10/mes</Text>
      <Text style={styles.txtnormalwhite2}>Todo lo del Plan Gratuito más:</Text>
      <Text style={styles.txtnormalwhite}>
        <Image
          source={checkwhite}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Hasta 100 campos personalizados
      </Text>
      <Text style={styles.txtnormalwhite}>
        <Image
          source={checkwhite}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Cifrado de campos
      </Text>
      <Text style={styles.txtnormalwhite}>
        <Image
          source={checkwhite}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Campos programados (próximamente).
      </Text>
      <Text style={styles.txtnormalwhite}>
        <Image
          source={checkwhite}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Envío de correos a suscriptores del boletín.
      </Text>
      <Text style={styles.txtnormalwhite}>
        <Image
          source={checkwhite}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Integraciones CSV
      </Text>
      <Text style={styles.txtnormalwhite}>
        <Image
          source={checkwhite}
          style={styles.imgsocialcand3}
          resizeMode="cover"
        />&nbsp;
        Analíticas básicas (6 mes)
      </Text>
      <TouchableOpacity style={styles.btnsesion556}>
        <Text style={styles.txtbtn55}>Mejorar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsesion555}>
        <Text style={styles.txtbtn55}>Plan actual</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.flexcard}>
              <Text style={styles.subtitle}>Plan Profesional</Text>
              <Text style={styles.txtbold}>$50/mes</Text>
              <Text style={styles.txtnormal2}>
                Todo lo del Plan Básico más:
              </Text>

              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Soporte prioritario
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Promoción, promocionarse dentro de la plataforma
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Campañas de marketing (próximamente).
              </Text>
              <Text style={styles.txtnormalazul}>
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Motor de búsqueda de elementos en el perfil (próximamente
              </Text>
              <Text style={styles.txtnormalazul}>
               
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Añade metadatos para mejorar el SEO (próximamente).
              </Text>

              <Text style={styles.txtnormalazul}>
                
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Integración de Meta Pixel Tracking para análisis avanzado
                (próximamente).
              </Text>

              <Text style={styles.txtnormalazul}>
             
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Tarjeta de visita sin marca de agua
              </Text>

              <Text style={styles.txtnormalazul}>
                
                <Image
                  source={check}
                  style={styles.imgsocialcand3}
                  resizeMode="cover"
                />&nbsp;
                Analíticas avanzadas
              </Text>

              <TouchableOpacity style={styles.btnsesion53}>
        <Text style={styles.txtbtn5}>Plan actual</Text>
      </TouchableOpacity>
            <TouchableOpacity style={styles.btnsesion552}>
        <Text style={styles.txtbtn55}>Plan actual</Text>
      </TouchableOpacity>
            </View>
          

            
            
  </View>

  <Text style={styles.labeltxt}> 
      <Text >Comprar</Text>
      <Pressable onPress={handleDecrement}>
        <Text>-</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={handleIncrement}>
        <Text>+</Text>
      </Pressable>
      
      
      
      
      </Text>

  <Text style={styles.labeltxtp}>
    Integra Linkeram con otras plataformas para potenciar la productividad!
  </Text>
  <TouchableOpacity style={styles.btnsesion532}>
        <Text style={styles.txtbtn5}>Comprar</Text>
      </TouchableOpacity>

      <Textos txt="Darse de baja" style={styles.baja}/>
      <Textos txt="Una vez suscrito, puedes cancelar tu suscripción en cualquier momento. Si superas el límite de GB en el plan Freemium, tu cuenta quedará suspendida hasta que liberes espacio o adquieras más almacenamiento." style={styles.labeltxtp}/>
      
      </ScrollView>
            </View>


            
            
            


            
            </View>

            
          </View>
        </View>

       
       
      
        
      
    </ScrollView>
  );
};

export default AjustesPrecios;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
  },  
  flexcard: {
    flex: 1,
    width: "5vw",
    borderWidth: 1,
    height: 700,
    marginLeft: "0.2vw",
    marginRight: "0vw",
    borderColor: "#622FAE",
    borderRadius: "1vw",
    padding: 5,
  },  
  txtbtn55: {
    paddingStart: 40,
    color: "#622FAE",
    fontWeight: "bold",
    fontSize: 15,
  },
  baja:{
    color: "#DC3545",
    fontSize: 25,    
    width: '20vw',    
    height: 25,   
    
  },
  btnsesion55: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: "12vw",    
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0,
    paddingTop: 5,
    position: 'relative',
    top: '11vw',
    borderRadius: "0.5vw",
    placeholderTextColor: "#C3C3C3",
  },btnsesion556: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: "12vw",
    paddingStart: 30,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0,
    paddingTop: 5,
    position: 'relative',
    top: '9.3vw',
    borderRadius: "0.5vw",
    placeholderTextColor: "#C3C3C3",
  },
  btnsesion555: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: "12vw",
    paddingStart: 30,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0,
    paddingTop: 5,
    position: 'relative',
    top: '10.1vw',
    borderRadius: "0.5vw",
    placeholderTextColor: "#C3C3C3",
  },
  subtitlewhite: {
    fontSize: 25,
    paddingStart: 30,
    paddingTop: 22,
    color: "#FFFFFF",
  },
  txtnormalwhite2: {
    color: "#FFFFFF",
    paddingStart: 30,
    fontSize: 16,
  },  
  txtnormalwhite: {
    color: "#FFFFFF",
    paddingStart: 0,    
    display: "flex",
    justifyContent: "justify",
    width: 'initial',
    paddingTop: 20,
  },
  txtnormalwhite2: {
    color: "#FFFFFF",
    paddingStart: 30,
    fontSize: 16,
  },  
  btnsesion5: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#8828FF",
    height: 50,
    width: "12vw",
    
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 10,   
    paddingTop: 5,
    borderRadius: "0.5vw",
    position: 'relative',
    top: '19vw',
    placeholderTextColor: "#C3C3C3",
  },
  btnsesion53: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#8828FF",
    height: 50,
    width: "12vw",    
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 10,   
    paddingTop: 5,
    borderRadius: "0.5vw",
    position: 'relative',
    top: '5vw',
    placeholderTextColor: "#C3C3C3",
  },
  btnsesion532: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#8828FF",
    height: 50,
    width: "12vw",    
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 10,   
    paddingTop: 5,
    borderRadius: "0.5vw",
    position: 'relative',
    top: '-3vw',
    left: '36vw',
    placeholderTextColor: "#C3C3C3",
  },
  btnsesion552: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#ffffff",
    height: 50,
    width: "12vw",    
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 0,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 10,   
    paddingTop: 5,
    borderRadius: "0.5vw",
    position: 'relative',
    top: '-3vw',
    placeholderTextColor: "#C3C3C3",
  },
  btnsesion52: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#8828FF",
    height: 50,
    width: "12vw",
    paddingStart: 30,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 50,
    marginLeft: 10,   
    paddingTop: 5,
    borderRadius: "0.5vw",
    position: 'relative',
    top: '7vw',
    placeholderTextColor: "#C3C3C3",
  },
  flexcard2: {

    
    flex: 1,
    width: "5vw",
    borderWidth: 1,
    height: 700,
    marginLeft: "3vw",
    marginRight: "3vw",
    backgroundColor: "#622FAE",
    color: "#ffffff",
    borderRadius: "1vw",
    padding: 5,
  },  
  txtbtn5: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingStart: 40,
    fontSize: 15,
  },
  txtbold: {
    fontWeight: "bold",
    color: "#1F184B",
    fontSize: 30,
    paddingStart: 30,
    paddingTop: 10,
  },
  txtnormal2: {
    color: "#1F184B",
    paddingStart: 30,
    fontSize: 16,
  },
  subtitlewhite: {
    fontSize: 25,
    paddingStart: 30,
    paddingTop: 22,
    color: "#FFFFFF",
  },
  txtboldwhite: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 30,
    paddingStart: 30,
    paddingTop: 10,
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
  labeltxtp:{
   color: "#1F184B",
   fontSize: 13,
   textAlign: 'left',    
   width: '40vw',    
 
   marginTop: 10,    
   paddingLeft: 3,
 },       
  containers:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',    
    height: '3vw',
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
  subtitle: {
    fontSize: 25,
    paddingStart: 30,
    paddingTop: 22,
    color: "#1F184B",
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
    height: "45%",
    
    width: "100vw",
    alignItems: "flex-start",
  },
  seccion1:{    
    
    height: 'max-content',
    width: width < 750 ? "100%" : "20%",
    marginLeft:  width < 750 ? '14vw' : '3vw',
    
  },
  seccion2:{
 
    width: width < 750 ? "100%" : "20%",    
    marginLeft:  width < 750 ? '14vw' : '3vw',
  },
  seccionconten:{
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: "55vw",    
    height: '20vw',
    backgroundColor: "#cccccc",
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
    height: 'fit-content',
    width: width < 750 ? "100%" : "50%",    
    marginLeft:  width < 750 ? '14vw' : '3vw',
    display: 'flex',
    justifyContent: 'space-between',
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
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
  },  
  containersroll:{
    height: '60vw',
  },
  screen: {
    margin: 20,
  }
 
});
