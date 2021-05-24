import React,{useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {globalStyles} from '../styles/globalStyles'

export default function ReviewDetail({navigation,route}) {
  const [postText, setPostText] = React.useState('');

  const {title,body}=route.params
 
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.headingText} >{body}</Text>
      
      <Button title="Go to home" onPress={()=>navigation.goBack()} />
    
    </View>
  );
}

const styles=StyleSheet.create({
  textBody:{
      paddingVertical:20,
      backgroundColor:"#c5cae9",
  }
})