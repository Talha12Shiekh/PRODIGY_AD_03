import {StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import SingleButton from './SingleButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  BLUE_BTN_BG,
  GREY_COLOR,
  LIGHT_BLUE_BTN_BG,
  RED_COLOR,
} from '../Constants';

const ButtonsComponent = ({setimers, timers}) => {
  const [timerStatus, settimerStatus] = useState('Start');
  const timerRef = useRef(null);

  function toggleTimerStatus() {
    switch (timerStatus) {
      case 'Start':
        settimerStatus('Stop');
        break;
      case 'Stop':
        settimerStatus('Resume');
        break;
      case 'Resume':
        settimerStatus('Stop');
        break;

      default:
        settimerStatus('Start');
        break;
    }
  }

  function handleStartTimer() {
    console.log('Hello world');
    timerRef.current = setInterval(() => {
      setimers(prev => {
        return {
          ...prev,
          miliscnds: prev.miliscnds + 1,
        };
      });
    },10);
    console.log(timers.miliscnds);
    toggleTimerStatus();
  }

  function handleStopTimer() {
    clearInterval(timerRef.current);
    toggleTimerStatus();
  }

  function handleResetTimer() {
    setimers({
      miliscnds: 0,
      scnds: 0,
      minutes: 0,
    });
    clearInterval(timerRef.current);
    settimerStatus('Start');
  }

  function RenderButton() {
    switch (timerStatus) {
      case 'Start': {
        return (
          <SingleButton
            onPress={handleStartTimer}
            text={'Start'}
            bgcolor={BLUE_BTN_BG}
          />
        );
      }
      case 'Stop': {
        return (
          <SingleButton
            onPress={handleStopTimer}
            text="Stop"
            bgcolor={RED_COLOR}
          />
        );
      }
      case 'Resume': {
        return (
          <SingleButton
            onPress={handleStartTimer}
            text="Resume"
            bgcolor={LIGHT_BLUE_BTN_BG}
          />
        );
      }
    }
  }

  return (
    <View style={styles.container}>
      <SingleButton
        onPress={handleResetTimer}
        disabled={timerStatus !== 'Resume'}
        text="Reset"
        bgcolor={GREY_COLOR}
      />
      {RenderButton()}
    </View>
  );
};

export default ButtonsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: wp(12),
    paddingBottom: wp(10),
  },
});
