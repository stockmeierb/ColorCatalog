import { Text, SafeAreaView, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native';
import React, {useState, useEffect} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [pet, setPet] = useState();
  const [loading, setLoading] = useState(false);

  

const loadPet = async () => {
  setLoading(true);
  const res = await fetch("http://pet-library.moonhighway.com/api/randomPet");
  const data = await res.json();
  await Image.prefetch(data.photo.full)
setPet(data);
setLoading(false);
}

useEffect(() => {
  loadPet();
  }, []);

if (!pet) return <ActivityIndicator size="large" />;
  return(
    <SafeAreaView style={styles.container}>
    <ScrollView
    refreshControl={<RefreshControl refreshing={loading} onRefresh={loadPet} />}>
    <Image style={styles.pic} source={{uri: pet.photo.full }} />
    <Text style= {styles.paragraph}> {pet.name} - {pet.category}</Text>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pic: {
    height: 500,
    width: 500
  },
  }
);
