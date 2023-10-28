import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import InfoTable from 'src/components/common/InfoTable';
import { Container } from 'src/components/containers/home-containers';
import {
  useDoctorAccountLastWeek,
  useDoctorAccountTodays,
  useDoctorAccountYesterdays,
} from 'src/hooks/doctor/account';
import { MyAccountPatient } from 'src/types/doctor';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const PatientAccountsScreen = () => {
  const todaysPatient = useDoctorAccountTodays();
  const tPatient: MyAccountPatient = todaysPatient?.data?.data.Data || ({} as MyAccountPatient);

  const yesterdaysPatient = useDoctorAccountYesterdays();
  const yPatient: MyAccountPatient = yesterdaysPatient?.data?.data.Data || ({} as MyAccountPatient);

  const lastweekPatient = useDoctorAccountLastWeek();
  const lwPatient: MyAccountPatient = lastweekPatient?.data?.data.Data || ({} as MyAccountPatient);

  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  const titleArray: string[] = ['Total Patient', 'New', 'Follow Up', 'Report', 'Total Amount'];
  const colNames = Object.keys(tPatient);
  return (
    <Container>
      <Header HeaderTitle="Patient Accounts" onPress={() => navigation.navigate('HomeScreen')} />
      <InfoBox mode={'primary'} hasStarBox={true}>
        <View style={{ padding: 10 }}>
          <Text>All the information below in coming from the Rx Software</Text>
        </View>
      </InfoBox>

      <View style={{ padding: 5 }}>
        <Text variant="bodyMedium" style={{ marginBottom: 10, color: '#525252' }}>
          From Today
        </Text>
        <View style={{ marginBottom: 15 }}>
          <InfoTable data={tPatient} colTitle={titleArray} colName={colNames} />
        </View>
      </View>

      <View style={{ padding: 5 }}>
        <Text variant="bodyMedium" style={{ marginBottom: 10, color: '#525252' }}>
          From Yesterday
        </Text>
        <View style={{ marginBottom: 15 }}>
          <InfoTable data={yPatient} colTitle={titleArray} colName={colNames} />
        </View>
      </View>

      <View style={{ padding: 5 }}>
        <Text variant="bodyMedium" style={{ marginBottom: 10, color: '#525252' }}>
          From Last Week
        </Text>
        <View>
          <InfoTable data={lwPatient} colTitle={titleArray} colName={colNames} />
        </View>
      </View>
    </Container>
  );
};

export default PatientAccountsScreen;
