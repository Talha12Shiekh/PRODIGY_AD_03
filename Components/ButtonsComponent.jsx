import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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

  const TIMER_SPEED = 50;

  useEffect(() => {
    if (timers.miliscnds >= 100) {
      setimers(prev => {
        return {
          ...prev,
          miliscnds:prev.miliscnds - 100,
          scnds: prev.scnds + 1, // Increment seconds
        };
      });
    }

    if (timers.scnds >= 60) {
      setimers(prev => {
        return {
          ...prev,
          scnds:prev.scnds - 60,
          minutes: prev.minutes + 1, // Increment minutes
        };
      });
    }



  }, [timers, setimers]); // Dependency array includes timers and setimers

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
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setimers(prev => {
        return {
          ...prev,
          miliscnds: prev.miliscnds + 1,
        };
      });
    }, TIMER_SPEED);
    toggleTimerStatus();
  }

  function resetTimer() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function handleStopTimer() {
    resetTimer();
    toggleTimerStatus();
  }

  function handleResetTimer() {
    setimers({
      miliscnds: 0,
      scnds: 0,
      minutes: 0,
    });
    resetTimer();
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
