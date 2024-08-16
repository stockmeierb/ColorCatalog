import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "color";

export default function ColorDetails({ route }) {
  const { color: name } =  route.params;
  const color = Color(name);
  const textColor = {fontSize: 30, color: color.negate(name).toString()};
return (
    <View style={[styles.container, {backgroundColor: name}]}>
    <Text style={textColor}>Name: {name} </Text>
    <Text style={textColor}>RGB: {color.rgb().toString()} </Text>
    <Text style={textColor}>HSL: {color.hsl().toString()} </Text>
    <Text style={textColor}>Luminosity: {color.luminosity().toString()} </Text>
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