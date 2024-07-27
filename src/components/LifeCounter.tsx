import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Player from '../model/Player';

const LifeCounter = ({isOwner}: Player): React.JSX.Element => {
  return (
    <View style={[styles.container, isOwner ? styles.owner : styles.opponent]}>
      <Text>Da</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '45%',
    margin: 'auto',
  },
  owner: {
    backgroundColor: 'blue',
  },
  opponent: {
    backgroundColor: 'red',
  },
});

export default LifeCounter;
