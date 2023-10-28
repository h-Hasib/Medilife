import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

export const ShadowBox = (props: PropsWithChildren) => {
  const { children } = props;
  return <Surface style={styles.shadowBox}>{children}</Surface>;
};

const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    margin: 3.5,
  },
});
