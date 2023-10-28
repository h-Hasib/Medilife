import React from 'react';
import { Text, View } from 'react-native';
import ArStyles from '../common/ArStyles';
import { ShadowBox } from '../common/ShadowBox';

export const NotificationListItem = () => {
  return (
    <ShadowBox>
      <View style={ArStyles.rowSpaceBetween}>
        <View>
          <Text>Please Update Your App</Text>
        </View>
        <View>
          <Text>19-11-2022</Text>
        </View>
      </View>
    </ShadowBox>
  );
};
