import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../utils';

export const LoadingFullscreen: React.FC = () => {
  return (
    <View style={styles.loadingFullscreen}>
      <ActivityIndicator size="large" color={COLORS.ORANGE} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingFullscreen: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flex: 1,
    zIndex: 1,
  },
});
