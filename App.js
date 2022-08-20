import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
// import StartScreen from 'screens/StartScreen'
// import GetPhotoScreen from 'screens/GetPhotoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import { useFonts } from "expo-font";

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    NunitoSans: require('./assets/fonts/NunitoSans-Black.ttf'),
    RaleWay: require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
        />
        <Stack.Screen
          name="GetPhoto"
          component={GetPhotoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={{ color: 'red', fontSize: 50, fontFamily: 'RaleWay', }}> FightBite</Text>
      <Image height source={require('./assets/logo.png')} style={{ width: 300, height: 300 }} />
      <StatusBar style="auto" />
      <Button
        title="Start"
        onPress={() => {
          navigation.navigate('GetPhoto');
          console.log("start button clicked");
        }}
      />

    </View>
  );
}

function GetPhotoScreen() {
  return (<View>
    <Text>
      Test
    </Text>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
