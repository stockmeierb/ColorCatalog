import { useState, useEffect } from "react";
import { generate } from "shortid";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useColors = () => {
    const [colors, setColors] = useState([]);
    
    //Load colors from Async Storage
    const loadColors = async () => {
        const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
        if (colorData) {
            const colors = JSON.parse(colorData);
            setColors(colors)
        }
    }

    //Save Colors when colors array changes
    useEffect(() => {
        AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors))
    }, [colors])
    
    //Invokes Load Colors
    useEffect(() => {
        if (colors.length) return;
        loadColors();
    }, []);

    const addColor = color => {
      const newColor = {id: generate(), color};
      setColors([newColor, ...colors]);
    }
    return { colors, addColor };
  }
  