import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Img } from '../elements/images';

interface Props {
  avatar: React.ReactNode;
  onPress: () => void;
  notificationCount: number;
}

const ProfileNotificationBadge = ({ avatar, onPress, notificationCount }: Props) => (
  <Pressable onPress={onPress}>
    <View style={{ marginTop: 2 }}>
      <Img name="logoIcon" resizeMode="contain" />
      <View style={{ position: 'relative', width: 66, height: 66 }}>
        <View style={{ width: 66, height: 66, borderRadius: 50, overflow: 'hidden' }}>
          {avatar}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 23,
            height: 23,
            backgroundColor: '#259376',
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>{notificationCount}</Text>
        </View>
      </View>
    </View>
  </Pressable>
);

export default ProfileNotificationBadge;

const styles = StyleSheet.create({});
