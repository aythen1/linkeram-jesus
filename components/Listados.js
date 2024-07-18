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
    title: 'Google',
    subtitle: 'alexhamilton@gmail.com',
    image: require('../assets/google.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 2,
    title: 'WhatsApp',
    subtitle: '+0000000000',
    image: require('../assets/whatsapp.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 3,
    title: 'Instagram',
    subtitle: '@AlexHamilton',
    image: require('../assets/instagram.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 4,
    title: 'Youtube',
    subtitle: '@AlexHamilton',
    image: require('../assets/youtube.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 5,
    title: 'Google My Business',
    subtitle: 'alexhamilton@gmail.com',
    image: require('../assets/facebook.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 6,
    title: 'Amazon',
    subtitle: '@AlexHamilton',
    image: require('../assets/amazon.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 7,
    title: 'Shopify',
    subtitle: '@AlexHamilton',
    image: require('../assets/shoppifay.png'),
    icon: require('../assets/iconverde.png'),
  },
  {
    id: 8,
    title: 'Stripe',
    subtitle: '@AlexHamilton',
    image: require('../assets/strippe.png'),
    icon: require('../assets/iconverde.png'),
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>    
    <Text style={[styles.subtitle, {color: textColor}]}>{item.subtitle}</Text>
    <ImageBackground style={styles.estilosimg} source={item.image}/>
    <ImageBackground style={styles.estilosimg2} source={item.icon}/>

    
  </TouchableOpacity>
);

const Listados = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FAFAFA' : '#FAFAFA';
    const color = item.id === selectedId ? 'black' : 'black';

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
    <SafeAreaView style={styles.container}>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  estilosimg:{
    width: '5vw',
    height: '5vw',
    position: 'relative',
    left: '0vw',
    top: '-5vw',
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
    fontSize: 32,
    paddingLeft: 100,
   
    
  },
});

export default Listados;