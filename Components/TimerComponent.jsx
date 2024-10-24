import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {formatText, WHITE_COLOR} from '../Constants';

const TimerComponent = ({timers}) => {
  const {miliscnds, scnds, minutes} = timers;

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {formatText(minutes, 'minutes')} : {formatText(scnds, 'seconds')} .{' '}
        {formatText(miliscnds, 'miliseconds')}
      </Text>
    </View>
  );
};

export default TimerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: wp(15),
    color: WHITE_COLOR,
    fontWeight: '200',
  },
});
