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
import { TodaysPatientList } from 'src/components/doctors/TodaysPatientList';
import { useDoctorGetAllChamber } from 'src/hooks/doctor/chamber';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const TodaysPatientsScreen = () => {
  const data = useDoctorGetAllChamber();
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return (
    <View style={ArStyles.safeAreaView}>
      <Header HeaderTitle="Today's Patients" onPress={() => navigation.navigate('HomeScreen')} />
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

      <View style={{ marginBottom: 10 }}>
        <SearchBox />
      </View>

      <FlashList
        data={data?.data?.data.Data}
        showsVerticalScrollIndicator={false}
        estimatedListSize={{ height: 50, width: 50 }}
        estimatedItemSize={30}
        renderItem={({ item }) => (
          <CollapsibleBox
            title={item.ChamberName}
            description="For more information, please tap here"
            child={<TodaysPatientList chamberId={item.Id} shiftId={2} />}
          />
        )}
      />
    </View>
  );
};

export default TodaysPatientsScreen;
