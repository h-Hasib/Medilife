import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import { useDoctorNotification } from 'src/hooks/doctor/notification';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const NotificationScreen = () => {
  const data = useDoctorNotification();
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return (
    <View style={ArStyles.safeAreaView}>
      <Header HeaderTitle="Notification" onPress={() => navigation.navigate('HomeScreen')} />
      <InfoBox mode="secondary" hasStarBox={true}>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '800', paddingVertical: 3, color: '#2F5C3D' }}>
            Process
          </Text>
          <Text style={{ fontSize: 12, paddingVertical: 5, color: '#fff' }}>
            Select Available Doctors {'>'} Filter Doctor {'>'} Create Appointment
          </Text>
        </View>
      </InfoBox>
      <Text variant="titleMedium" style={{ paddingLeft: 5, marginTop: 20, marginBottom: 15 }}>
        All Notifications
      </Text>
      <FlashList
        data={data?.data?.data.Data}
        estimatedListSize={{ height: 100, width: 50 }}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <Surface style={styles.shadowBox}>
            <View style={ArStyles.rowSpaceBetween}>
              <View>
                <Text>{item.Message}</Text>
              </View>
              <View>
                <Text>{item.CreatedAt}</Text>
              </View>
            </View>
          </Surface>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    margin: 4,
  },
});
