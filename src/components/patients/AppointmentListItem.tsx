import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Divider, Text } from 'react-native-paper';
import ArStyles from '../common/ArStyles';
import { ShadowBox } from '../common/ShadowBox';

export const AppointmentListItem = () => {
  return (
    <ShadowBox>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ paddingRight: 5 }}>
          <Avatar.Image size={50} source={require('src/assets/images/marketplace/aroggo.png')} />
        </View>
        <View>
          <Text variant="bodySmall">Appointment of:</Text>
          <Text variant="bodyMedium" style={{ fontWeight: '800', color: '#3C9979' }}>
            Md Kamal Ahmed
          </Text>
        </View>
      </View>
      <Divider style={{ height: 1.5, marginVertical: 10, backgroundColor: '#259376' }} />
      <View style={ArStyles.rowSpaceBetween}>
        <View style={ArStyles.rowSpaceBetween}>
          <Text variant="bodySmall" style={{ fontWeight: '800', color: '#3C9979' }}>
            Serial: {''}
          </Text>
          <Text variant="bodySmall" style={{ fontWeight: '800' }}>
            1
          </Text>
        </View>
        <View style={ArStyles.rowSpaceBetween}>
          <Text variant="bodySmall" style={{ fontWeight: '800', color: '#3C9979' }}>
            Shift: {''}
          </Text>
          <Text variant="bodySmall" style={{ fontWeight: '800' }}>
            Evening
          </Text>
        </View>
      </View>
      <Divider style={{ height: 1.5, marginVertical: 10 }} />
      <View style={ArStyles.rowSpaceBetween}>
        <View style={ArStyles.rowSpaceBetween}>
          <Text variant="bodySmall" style={{ fontWeight: '800', color: '#3C9979' }}>
            Visit Type: {''}
          </Text>
          <Text variant="bodySmall" style={{ fontWeight: '800' }}>
            1
          </Text>
        </View>
        <View style={ArStyles.rowSpaceBetween}>
          <Text variant="bodySmall" style={{ fontWeight: '800', color: '#3C9979' }}>
            Appointment Date: {''}
          </Text>
          <Text variant="bodySmall" style={{ fontWeight: '800' }}>
            05-Dec-2022
          </Text>
        </View>
      </View>
      <Divider style={{ height: 1.5, marginVertical: 10 }} />
      <View style={ArStyles.rowEnd}>
        <Button
          theme={{ colors: { primary: '#3C9979' } }}
          mode="contained"
          style={{ marginRight: 13 }}
          labelStyle={{
            backgroundColor: '#3C9979',
            fontSize: 10,
            lineHeight: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          onPress={() => console.log('Pressed')}>
          Add Report
        </Button>
        <Button
          mode="contained"
          theme={{ colors: { primary: '#3C9979' } }}
          labelStyle={{
            fontSize: 10,
            lineHeight: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          onPress={() => console.log('Pressed')}>
          Add Rx
        </Button>
      </View>
    </ShadowBox>
  );
};
