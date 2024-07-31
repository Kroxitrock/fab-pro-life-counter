import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LifeButtonProps from '../model/LifeButtonProps';
import LifeButtonType from '../model/LifeButtonType';

const LifeButton = ({type}: LifeButtonProps): React.JSX.Element => {
  const isPlus = type === LifeButtonType.Plus;
  const style = isPlus ? styles.plusButton : styles.minusButton;
  const text = isPlus ? '+' : '-';
  return (
    <View style={[styles.button, style]}>
      <Text style={styles.text}> {text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    top: 0,
  },
  minusButton: {
    bottom: 0,
  },
  text: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LifeButton;
