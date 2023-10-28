import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ArStyles from 'src/components/common/ArStyles';

interface Props {
  HeaderTitle: string;
  onPress: () => void;
}

const Header = (props: Props) => {
  const { HeaderTitle, onPress } = props;
  return (
    <View style={[ArStyles.rowSpaceBetween, { margin: 5, marginBottom: 10, marginTop: 15 }]}>
      <Pressable onPress={onPress}>
        <AntDesign name="left" size={22} color="black" />
      </Pressable>
      <Text style={styles.title}>{HeaderTitle}</Text>
      <Entypo name="dots-three-vertical" size={20} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 20,
  },
});
