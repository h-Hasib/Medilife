import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Divider, Text } from 'react-native-paper';
import ArStyles from '../common/ArStyles';
import { ShadowBox } from '../common/ShadowBox';

const MyReport = () => {
  return (
    <ShadowBox>
      <View style={ArStyles.rowSpaceBetween}>
        <View style={{ width: '15%' }}>
          <Avatar.Image size={50} source={require('src/assets/images/user_img.png')} />
        </View>
        <View style={{ width: '55%' }}>
          <Text variant="bodySmall" style={{ fontWeight: '500' }}>
            Report Title :
          </Text>
          <Text variant="bodyMedium" style={{ fontWeight: '700', color: '#3C9979' }}>
            CBC & USG of WA
          </Text>
        </View>
        <View style={{ width: '30%' }}>
          <Button
            mode="elevated"
            style={{ marginBottom: 5 }}
            labelStyle={{
              color: '#000',
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 1,
              paddingRight: 1,
            }}
            onPress={() => console.log('Pressed')}>
            Tag to Rx
          </Button>
          <Button
            labelStyle={{
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 1,
              paddingRight: 1,
            }}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            View Report
          </Button>
        </View>
      </View>
      <Divider style={{ height: 1.5, marginVertical: 10, backgroundColor: '#259376' }} />
      <View style={ArStyles.rowSpaceBetween}>
        <Text> ID : 5344344</Text>
        <View style={ArStyles.rowEnd}>
          <Text style={{ fontSize: 12 }}>Uploaded on :</Text>
          <Text style={{ fontSize: 12, fontWeight: '800' }}>15-Sep-2022</Text>
        </View>
      </View>
    </ShadowBox>
  );
};

export default MyReport;
