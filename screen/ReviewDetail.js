import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ReviewDetail() {
  return (
    <View>
      <Text style={styles.container}>ReviewDetail Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});