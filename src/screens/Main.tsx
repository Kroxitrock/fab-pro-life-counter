import React from 'react';
import {StyleSheet, View} from 'react-native';
import LifeCounter from '../components/LifeCounter';

const Main = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <LifeCounter isOwner={false} />
      <LifeCounter isOwner={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default Main;
