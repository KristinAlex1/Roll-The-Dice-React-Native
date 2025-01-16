import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


export default function App() {
  const [diceValue, setDiceValue] = useState(1);
  const [diceColor1, setDiceColor1] = useState('lightblue');
  const [diceColor2, setDiceColor2] = useState('lightblue');
  const [diceColor3, setDiceColor3] = useState('lightblue');
  const [diceColor4, setDiceColor4] = useState('lightblue');
  const [diceColor5, setDiceColor5] = useState('lightblue');
  const [diceColor6, setDiceColor6] = useState('lightblue');
  const [diceColor7, setDiceColor7] = useState('lightblue');
  const [diceColor8, setDiceColor8] = useState('lightblue');
  const [diceColor9, setDiceColor9] = useState('lightblue');


  function setValue(roll) {

    if (roll === 1){
      setDiceColor5('black');
    }
    if (roll === 2){
      setDiceColor1('black');
      setDiceColor9('black');
    }
    if (roll === 3){
      setDiceColor1('black');
      setDiceColor5('black');
      setDiceColor9('black');
    }
    if (roll === 4){
      setDiceColor1('black');
      setDiceColor3('black');
      setDiceColor7('black');
      setDiceColor9('black');
    }
    if (roll === 5){
      setDiceColor1('black');
      setDiceColor3('black');
      setDiceColor5('black');
      setDiceColor7('black');
      setDiceColor9('black');
    }
    if (roll === 6){
      setDiceColor1('black');
      setDiceColor4('black');
      setDiceColor4('black');
      setDiceColor6('black');
      setDiceColor7('black');
      setDiceColor9('black');
    }

  } 

  function resetDice() {
    setDiceColor1('lightblue');
    setDiceColor2('lightblue');
    setDiceColor3('lightblue');
      setDiceColor4('lightblue');
      setDiceColor5('lightblue');
      setDiceColor6('lightblue');
      setDiceColor7('lightblue');
      setDiceColor9('lightblue');
      setDiceColor8('lightblue');

  }

  const diceRoll = () => {
    ReactNativeHapticFeedback.trigger("impactLight", options);
    let roll = 1;

    for (let i = 1; i < 7; i++) {
      roll = Math.floor(Math.random() * 7);
    }
    
    {roll === 0 ? diceRoll() : setDiceValue(roll)};
    resetDice();
    setValue(roll);
    
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appContainer}>
        <View style={styles.dice}>
          <View style={styles.diceRow1}>
            <View style={[{ backgroundColor: diceColor1 },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor2  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor3  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor4  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor5  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor6  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor7  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor8  },styles.diceValue ]}/>
            <View style={[{ backgroundColor: diceColor9  },styles.diceValue ]}/>
          </View>
        </View>
        
        

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
    borderRadius: 30,
    margin:17,
    
    
    
  },
});
