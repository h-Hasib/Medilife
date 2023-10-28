import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import ArStyles from '../common/ArStyles';
import { ShadowBox } from '../common/ShadowBox';
import { Img } from '../elements/images';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  imageName: string;
  OnPress: () => void;
}

export const ServiceCard = (props: Props) => {
  const { title, subtitle, description, imageName, OnPress } = props;
  return (
    <ShadowBox>
      <Pressable onPress={OnPress}>
        <View style={[ArStyles.rowSpaceBetween]}>
          <View style={{ width: '45%' }}>
            <Img name={imageName} alt="MLS Logo" />
          </View>
          <View style={{ width: '55%', marginLeft: 5 }}>
            <Text style={{ fontSize: 16 }}>{title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#259376' }}>{subtitle}</Text>
            <Text>{description}</Text>
          </View>
        </View>
      </Pressable>
    </ShadowBox>
  );
};
