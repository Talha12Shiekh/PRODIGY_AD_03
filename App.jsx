import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BG_COLOR } from './Constants'
import TimerComponent from './Components/TimerComponent'
import ButtonsComponent from './Components/ButtonsComponent'

const App = () => {
  const [timers,setimers] = useState({
    miliscnds:0,
    scnds:0,
    minutes:0,
  });

  return (
    <View style={styles.container}>
      <TimerComponent
      timers={timers}
      />
      <ButtonsComponent
       timers={timers}
      setimers={setimers}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:BG_COLOR
  }
})