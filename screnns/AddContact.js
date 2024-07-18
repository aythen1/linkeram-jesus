import {  
  StyleSheet,
  View, 
  ScrollView,  
} from "react-native";
import React  from "react";
import UsersList from "../components/Listados";



const AddContact = () => {
  
  
  return (
    <ScrollView>
      <View >
        <UsersList  />
      </View>
    </ScrollView>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  
  contenedor:{
    width: '100vw',
  }
});
