import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {formatText, WHITE_COLOR} from '../Constants';

const TimerComponent = ({timers}) => {
  const {miliscnds, scnds, minutes, hours} = timers;
  const showingHoursCondition = hours > 0;

  let showingHours = showingHoursCondition && formatText(hours, 'hours');
  let showingHoursColon = showingHoursCondition && ':';
  let showingMinutes = formatText(minutes, 'minutes');
  let showingSeconds = formatText(scnds, 'seconds');
  let showingMiliseconds = formatText(miliscnds, 'miliseconds');

  return (
    <View style={styles.container}>
      <Text
        style={[styles.timer, {fontSize: wp(showingHoursCondition ? 12 : 15)}]}>
        {showingHours}
        {showingHoursCondition && ' '}
        {showingHoursColon} {showingMinutes} : {showingSeconds} .{' '}
        {showingMiliseconds}
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
    color: WHITE_COLOR,
    fontWeight: '200',
  },
});
