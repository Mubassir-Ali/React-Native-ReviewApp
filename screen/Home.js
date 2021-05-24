import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { posts } from "../assets/data/posts";

export default function Home({ navigation, route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>User Posts</Text>

      <FlatList
        data={posts}      
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('details', item)}>
            <Text style={globalStyles.headingText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

   
    </View>
  );
}

const styles=StyleSheet.create({
    posts:{
        flex:1
    }
})