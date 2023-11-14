import React from 'react';
import { View, Text, StyleSheet,Image, ScrollView, TextInput, Button, Alert } from 'react-native';

const Pokemon = () => {
  const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  const createThreeButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "green",
          }}
        >
          Snorlax Berrie
        </Text>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png',
          }}
          style={{ width: 300, height: 210, alignSelf: "center" }}
        />
      </View>
      <TextInput 
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        margin: 15,
      }}
      defaultValue="Digite aquiii!"
      />
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});



export default Pokemon
