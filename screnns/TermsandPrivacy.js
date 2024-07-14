import { Text, StyleSheet, View,ImageBackground, TextInput , TouchableOpacity, Image, Dimensions,ScrollView,FlatList  } from 'react-native'
import React, { Component ,useState} from 'react'
import logo from '../assets/logo.png'
import link from '../assets/link.png'

const { width } = Dimensions.get('window');

const TermsandPrivacy = () => {
            

        const data = [
            { id: 1, title: 'Registrarse' },
            { id: 2, title: 'Iniciar Sesión' },
            { id: 3, title: 'Buscador' },
            { id: 4, title: 'Sobre Nosotros' },
            { id: 5, title: 'Planes' },
            { id: 6, title: 'Centro de Ayuda' },
            { id: 7, title: 'Términos y Políticas' },
            
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

    <View style={styles.logo}>
        <ImageBackground source={logo} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
            <View></View>
        </ImageBackground>        
        </View>

        </View> 
 

        <View style={styles.correo}>
            <Text style={styles.correobold}>info.linkeram@gmail.com</Text>        
        </View>   
        <View style={styles.padre}>      
        <View style={styles.terminos}>
        <Text style={[styles.tituloh1,styles.alturaheight]}>Términos & Políticas</Text>
       
       <Text style={styles.parrafo}>
       Al acceder o utilizar nuestra Plataforma, aceptas cumplir con nuestros Términos y Políticas. Por favor, léalos detenidamente antes de usar Linkeram.
       Al acceder o utilizar la Plataforma, aceptas quedar vinculado por estos Términos y Políticas. Si no estás de acuerdo con alguna parte de estos, no podrás usar la Plataforma.
       </Text>
       <Text style={styles.titulouso}>
       Uso de la Plataforma
       </Text>
       <Text style={styles.parrafo}>
       <br/>
       Debes tener al menos 16 años para usar la Plataforma. Al acceder o utilizar la Plataforma, declaras y garantizas que tienes al menos 16 años.<br/><br/>
       Eres el único responsable del contenido que publiques en la Plataforma ("Contenido del Usuario"). Al compartir Contenido del Usuario, declaras y garantizas que tienes los derechos necesarios para hacerlo y que tu Contenido del Usuario no viola los derechos de terceros ni ninguna ley o regulación aplicable.<br/><br/>
       Uso de Linkeram Marketplace.<br/><br/>
       El uso del mercado de Linkeram está reservado para personas mayores de 18 años o de 21 años, según lo establecido por las leyes del país en el que se encuentren los usuarios. Al acceder o utilizar el mercado de Linkeram, los usuarios declaran y garantizan que cumplen con la edad mínima requerida según las leyes de su país de residencia.
       </Text>
       <Text style={styles.titulouso}>
       Conducta Prohibida
       </Text>
       <Text style={styles.parrafo}>
       Aceptas no participar en ninguna conducta que viole estos Términos o infrinja los derechos de terceros. La conducta prohibida incluye pero no se limita a: <br/>
       Cargar o compartir contenido que infrinja los derechos de propiedad intelectual de otros.<br/>
       Participar en actividades fraudulentas o engañosas.<br/>
       Hostigar, abusar o amenazar a otros usuarios.<br/>
       Cargar o compartir contenido que sea ilegal, obsceno o dañino.<br/>

       </Text>
       <Text style={styles.titulouso}>
       Limitación de Responsabilidad y Seguridad
       </Text>
       <Text style={styles.parrafo}>
       En la medida máxima permitida por la ley aplicable, Linkeram no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, derivados de o en conexión con tu uso de la Plataforma.<br/>
       Tomamos medidas razonables para proteger tu información contra el acceso, uso o divulgación no autorizados. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar seguridad absoluta.<br/>


       </Text>
       <Text style={styles.titulouso}>
       Política de Compras
       </Text>
       <Text style={styles.parrafo}>
       Esta política describe los términos y condiciones que rigen las compras realizadas en la plataforma de Linkeram. Al realizar una compra en Linkeram, aceptas cumplir con esta política. Por favor, léele cuidadosamente antes de realizar una compra.<br/>
       Los usuarios pueden tener la opción de vender contenido digital a través de la Plataforma. Linkeram puede facilitar transacciones entre compradores y vendedores, pero no es parte de ninguna transacción. Linkeram no es responsable de la calidad, precisión o legalidad del contenido vendido en la Plataforma.<br/>

       </Text>
       <Text style={styles.titulouso}>
       Compras
       </Text>
       <Text style={styles.parrafo}>
       Al realizar una compra en Linkeram, aceptas pagar el precio especificado por el contenido digital. Las transacciones pueden ser facilitadas a través de procesadores de pago de terceros, y puedes estar sujeto a sus términos y condiciones.


       </Text>
       <Text style={styles.titulouso}>
       Propiedad
       </Text>
       <Text style={styles.parrafo}>
       Al comprar contenido digital en Linkeram, adquieres una licencia para acceder y usar el contenido con fines personales y no comerciales. No adquieres la propiedad del contenido, y el creador retiene todos los derechos, título e interés en el contenido.

       </Text>
       <Text style={styles.titulouso}>
       Reembolsos
       </Text>
       <Text style={styles.parrafo}>
       Todas las ventas en Linkeram son finales. No ofrecemos reembolsos por compras de contenido digital a menos que lo exija la ley.<br/>
       Linkeram no es responsable de la calidad, precisión o legalidad del contenido digital vendido en la plataforma. Al realizar una compra en Linkeram.
       </Text>
       <Text style={styles.titulouso}>
       Política de Privacidad
       </Text>
       <Text style={styles.parrafo}>
       Tu uso de la Plataforma está sujeto a nuestra Política de Privacidad, la cual está incorporada a estos Términos por referencia. Al usar la Plataforma, consientes la recopilación y el uso de tu información según se describe en la Política de Privacidad.<br/>
       Esta Política de Privacidad describe cómo Linkeram ("nosotros", "nos" o "nuestro") recopila, utiliza y comparte tu información cuando usas nuestra plataforma. Al acceder o utilizar la Plataforma, aceptas los términos de esta Política de Privacidad.
       </Text>
       <Text style={styles.titulouso}>
       Cómo Usamos tu Información
       </Text>
       <Text style={styles.parrafo}>
       Utilizamos la información que recopilamos para proporcionar, mantener y mejorar la Plataforma, incluyendo personalizar tu experiencia, comunicarnos contigo y analizar los patrones de uso.<br/>
       También podemos usar tu información para responder a tus consultas, cumplir con tus solicitudes y enviarte mensajes administrativos y promocionales<br/>
       Podemos compartir tu información con terceros para diversos fines, incluyendo proporcionar servicios en nuestro nombre, analizar patrones de uso y enviar publicidad dirigida.<br/>
       También podemos compartir tu información en respuesta a solicitudes legales o para proteger nuestros derechos o los derechos de otros.<br/>


       </Text>
       <Text style={styles.titulouso}>
       Cambios en los Términos y Políticas
       </Text>
       <Text style={styles.parrafo}>
       Linkeram se reserva el derecho de modificar o reemplazar estos Términos y Políticas en cualquier momento, sin previo aviso. Cualquier cambio en estos Términos será efectivo inmediatamente después de su publicación en la Plataforma. Tu uso continuado de la Plataforma después de la publicación de cualquier cambio en estos Términos y Políticas constituye la aceptación de esos cambios.       </Text>
       
       <Text style={styles.titulouso}>Contáctanos</Text><br/>
       <Text style={styles.parrafobold}>info.linkeram@gmail.com</Text><br/>
       </View>
       </View>
      </ScrollView>
    )
  
}

export default TermsandPrivacy


const styles = StyleSheet.create({
    header: {
      display: 'flex',
      backgroundColor: '#fff', 
      width: '100%',
      
      justifyContent: 'space-between',      
      flexDirection: 'row',

    },
    contenedor: {
      height: '65%',
      width: '100vw',      
      alignItems: 'flex-start',
      
    }, 
    tituloart:{
        marginLeft: '3vw',
       
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
      padre:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      terminos:{
        width: '70%',
        paddingBottom: 100,
      },
      alturaheight:{
        marginTop: '-28vw',
      },
      titulouso:{
        color: "#1F184B", 
        fontWeight: 'bold',
        fontSize: 26,
        paddingLeft: 50,
        textAlign: 'left', 
      },
      parrafo:{
        color: "#6D6D6D",
        textAlign: 'center',
        paddingLeft: 50,
        fontSize: 'medium',
        textAlign: 'left',
        paddingBottom: 20,
      },
      parrafobold:{
        color: "#6D6D6D",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 50,
        fontSize: 'medium',
        textAlign: 'left',
        paddingBottom: 20,
      },
    txtinput:{
      height: '20%',
      width: '80%',
      alignItems: 'flex-start',
      padding: 10,
      marginTop: 120,
      borderBottomWidth: 1,
      borderBottomColor: "#C3C3C3",      
    },
    logo: {
        height: '4vw',
        width: '18vw',
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
        height: '10%',
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
        marginLeft: '15vw',
        marginTop: '3vw',               
      }, 
  });
  