import React from "react";
import { View, Text, StyleSheet } from "react-native";

export Default Function ColorDetails() {
return (
    <View style={styles.container}>
    <Text>Color Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

{/* <Text style={styles.button} onPress={() => setBackgroundColor("green")} >green</Text> */}
{/* <Text style={styles.button} onPress={() => setBackgroundColor("red")} >red</Text> */}

  {/* <ActivityIndicator size="large" color={"#61DBFB"} /> */}
  {/* <Button title="click me"  onPress={onButtonPress} onButtonPress /> */}
{/* <Text>OS: {Platform.OS}</Text> */}
{/* <Text>Height: {height}</Text> */}
{/* <Text>Width: {width}</Text> */}
{/* <Text>Snack.expo.dev</Text> */}