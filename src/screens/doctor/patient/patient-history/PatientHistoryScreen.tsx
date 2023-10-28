import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import SearchBox from 'src/components/common/SearchBox';
import { Container } from 'src/components/containers/home-containers';
import PatientHistoryBox from 'src/components/doctors/PatientHistoryBox';
import { useDoctorPatientHistory } from 'src/hooks/doctor/patient';
import { PatientHistory } from 'src/types/doctor';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const PatientHistoryScreen = () => {
  const patientHistory = useDoctorPatientHistory();
  const data: PatientHistory[] = patientHistory?.data?.data.Data || [];
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return (
    <Container>
      <Header
        HeaderTitle="Find Patients History"
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
      <View style={ArStyles.rowCenter}>
        <Text variant="bodyLarge" style={{ fontWeight: '800' }}>
          Need to Add Search Drop Down
        </Text>
      </View>

      <View style={{ marginBottom: 15 }}>
        <SearchBox />
      </View>

      <PatientHistoryBox data={data} />
    </Container>
  );
};

export default PatientHistoryScreen;
