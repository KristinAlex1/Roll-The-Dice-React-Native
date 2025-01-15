import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [diceValue, setDiceValue] = useState(1);

  const diceRoll = () => {
    let roll = 1;

    for (let i = 1; i < 7; i++) {
      roll = Math.floor(Math.random() * 7);
    }
    {
      roll === 0 ? diceRoll() : setDiceValue(roll);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appContainer}>
        <View style={styles.dice}>
          <View style={styles.diceRow1}>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
            <View style={styles.diceValue}></View>
          </View>
        </View>
        
        <Text style={styles.diceTxt}>{diceValue}</Text>

        <TouchableOpacity onPress={diceRoll} style={styles.Button}>
          <Text style={styles.rollTxt}>Roll</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dice: {
    height: 300,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  diceTxt: {
    fontSize: 20,
  },
  diceRow1:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'

  },
  Button: {
    marginVertical: 20,
    height: 50,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rollTxt: {
    fontSize: 20,
  },
  diceValue: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
    borderRadius: 30,
    marginHorizontal: 12,
    marginVertical: 18,
    marginBottom: 20
    
  },
});
