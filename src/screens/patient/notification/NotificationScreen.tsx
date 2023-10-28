import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import { usePatientGetAllNotification } from 'src/hooks/patient';
import { PatientRootStackParamList } from 'src/types/navigation/PatientNavigation';

export const NotificationScreen = () => {
  const data = usePatientGetAllNotification();
  const navigation = useNavigation<StackNavigationProp<PatientRootStackParamList>>();
  return (
    <View style={ArStyles.safeAreaView}>
      <Header HeaderTitle="Notification" onPress={() => navigation.navigate('HomeScreen')} />
      <InfoBox mode={'primary'} hasStarBox={true}>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '800', paddingVertical: 3, color: '#2F5C3D' }}>
            Process
          </Text>
          <Text style={{ fontSize: 12, paddingVertical: 5, color: '#fff' }}>
            Select Available Doctors {'>'} Filter Doctor {'>'} Create Appointment
          </Text>
        </View>
      </InfoBox>
      <FlashList
        data={data?.data?.data.Data}
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
      />
    </View>
  );
};
const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    margin: 4,
  },
});
