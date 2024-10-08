import React, {useState, useRef} from "react";
import { StyleSheet, View, Text, TextInput, Button} from "react-native";

export default function ColorForm({ onNewColor=f => f }) {
    const [inputValue, setValue] = useState("");
    const input = useRef();
    // console.log(" -> ", inputValue);
    return (
        <View style={styles.container}>
            <TextInput
            ref={input} 
            style={styles.txtInput}
            value={inputValue}
            onChangeText={setValue}
            autoCapitalize="none"
            placeholder="Enter a color..."/>
            <Button title="add" 
            onPress={() =>  {
                input.current.blur();
                onNewColor(inputValue);
                setValue("");
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center"
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5

    }
});