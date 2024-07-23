import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ImageBackground } from 'react-native-web';

const DATA = [
  {
    id: 1,
    title: 'Andrew Boston ha empezado a seguirte',
    subtitle: '23 mins ago',
    image: require('../assets/fotoprinc.png'),    
  },
  {
    id: 2,
    title: 'Andrew Boston se ha suscrito a tu lista de correo',
    subtitle: '23 mins ago',
    image: require('../assets/fotoprinc.png'),    
  },
  {
    id: 3,
    title: 'Andrew Boston se ha desuscrito de tu lista de correo',
    subtitle: '23 mins ago',
    image: require('../assets/fotoprinc.png'),    
  },
  {
    id: 4,
    title: 'Tu “Link” ha sido visto + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/linkfr.png'),    
  },
  {
    id: 5,
    title: 'Tu “Archivo” ha sido visto + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/nube.png'),    
  },
  {
    id: 6,
    title: 'Tu “elemento” ha sido visto + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/nube.png'),    
  },
  {
    id: 7,
    title: 'Tu  “post de Instagram” ha sido visto + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/foto.png'),    
  },
  {
    id: 8,
    title: 'Tu  “enlace o post de Youtube” ha sido visto + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/insta.png'),    
  },
  {
    id: 9,
    title: 'Tu  “producto” ha sido visto + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/video.png'),    
  },
  {
    id: 10,
    title: 'Tu “producto” ha sido comprado + de 10K de veces.',
    subtitle: '30 mins ago',
    image: require('../assets/cart.png'),    
  },
  {
    id: 11,
    title: 'Andrew Boston ha comprado tu elemento “producto”.',
    subtitle: '30 mins ago',
    image: require('../assets/fotocand.png'),    
  },
  {
    id: 13,
    title: 'Andrew Boston ha descargado tu elemento “producto”.',
    subtitle: '30 mins ago',
    image: require('../assets/fotocand.png'),    
  },
  {
    id: 14,
    title: 'Andrew Boston ha añadido un nuevo elemento.',
    subtitle: 'April 23',
    image: require('../assets/fotoprinc.png'),    
  },
  {
    id: 15,
    title: 'Andrew Boston se ha unido a Linkeram.',
    subtitle: 'April 23',
    image: require('../assets/fotoprinc.png'),
  },
];


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>
      {item.title.split(' ').map((word, index) => {
        
        if (index < 2) {
          return <Text style={{fontWeight: 'bold'}}>{word} </Text>;
        } else {
          return word + ' ';
        }
      })}
    </Text>
    <Text style={[styles.subtitle, {color: textColor}]}>{item.subtitle}</Text>
    <ImageBackground style={styles.estilosimg} source={item.image}/>
  </TouchableOpacity>
);

const Listados2 = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FAFAFA' : '#FAFAFA';
    const color = item.id === selectedId ? '#1F184B' : '#1F184B';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        
      />
    );
  };


  

  return (
    <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}> 
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '55vw',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  estilosimg:{
    width: 46,
    height: 45,
    position: 'relative',
    left: '2vw',
    top: '-3vw',
  },
   estilosimg2:{
    width: 16,
    height: 15,
    position: 'relative',
    left: '95%',
    top: '-8vw',
  },
  subtitle:{
    paddingLeft: 100,
  },
  item: {
    padding: 0,    
    marginHorizontal: 0,
    height: '6vw',  
    width: '55vw',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    paddingTop: 20,
    paddingLeft: 100,
   
    
  },
});

export default Listados2;