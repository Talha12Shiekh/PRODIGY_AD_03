import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BG_COLOR} from './Constants';
import TimerComponent from './Components/TimerComponent';
import ButtonsComponent from './Components/ButtonsComponent';

// https://www.linkedin.com/posts/talha-shiekh-a99b4b313_reactjs-materialui-jobportal-activity-7243315750013177856-pnHV?utm_source=share&utm_medium=member_desktop

const App = () => {
  const [timers, setimers] = useState({
    miliscnds: 87,
    scnds:58,
    minutes: 59,
    hours:99
  });

  return (
    <View style={styles.container}>
      <TimerComponent timers={timers} />
      <ButtonsComponent timers={timers} setimers={setimers} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
});
