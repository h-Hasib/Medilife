import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import { CollapsibleBox } from 'src/components/common/CollapsibleBox';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import SearchBox from 'src/components/common/SearchBox';
import AppointmentWithinRangeList from 'src/components/doctors/AppointmentWithinRangeList';
import { useDoctorGetAllChamber } from 'src/hooks/doctor/chamber';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const ListAppointmentsScreen = () => {
  const data = useDoctorGetAllChamber();
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return (
    <View style={ArStyles.safeAreaView}>
      <Header
        HeaderTitle="List Of Appointments"
        onPress={() => navigation.navigate('HomeScreen')}
      />
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
      <Text variant="titleMedium" style={{ margin: 15, fontWeight: '700', color: '#525252' }}>
        Appointment History
      </Text>
      <View style={{ marginBottom: 15 }}>
        <SearchBox />
      </View>
      <FlashList
        data={data?.data?.data.Data}
        showsVerticalScrollIndicator={false}
        estimatedListSize={{ height: 80, width: 50 }}
        estimatedItemSize={70}
        renderItem={({ item }) => (
          <CollapsibleBox
            title={item.ChamberName}
            description="For more information, please tap here"
            child={
              <AppointmentWithinRangeList
                chamberId={item.Id}
                shiftId={2}
                fromDate={'2023-07-03T14:09:56Z'}
                toDate={'2023-08-07T14:09:56Z'}
              />
            }
          />
        )}
      />
    </View>
  );
};
export default ListAppointmentsScreen;
