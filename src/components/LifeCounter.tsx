import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Player from '../model/Player';
import LifeButton from './LifeButton';
import LifeButtonType from '../model/LifeButtonType';

const LifeCounter = ({isOwner}: Player): React.JSX.Element => {
  return (
    <View style={[styles.container, isOwner ? styles.owner : styles.opponent]}>
      <LifeButton type={LifeButtonType.Plus} />
      <Text style={styles.text}>40</Text>
      <LifeButton type={LifeButtonType.Minus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%',
    height: '49%',
    margin: 'auto',
    borderRadius: 10,
  },
  owner: {
    backgroundColor: 'blue',
  },
  opponent: {
    backgroundColor: 'red',
    transform: 'rotate(180deg)',
  },
  text: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LifeCounter;
