import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
  active: boolean;
}

const RoundBadge = ({ text, active }: Props) => {
  return (
    <View style={[styles.badgeContainer, { backgroundColor: active ? '#259376' : '#E1E1E1' }]}>
      <Text style={{ color: '#fff' }}>{text}</Text>
    </View>
  );
};

export default RoundBadge;

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    marginRight: 2,
    borderRadius: 50,
  },
});
