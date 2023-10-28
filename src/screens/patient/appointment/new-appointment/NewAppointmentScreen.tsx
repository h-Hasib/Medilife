import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Avatar, Button } from 'react-native-paper';
import { Container } from 'src/components/containers/home-containers';
import DoctorsCard from 'src/components/patients/DoctorsCard';
import { PatientRootStackParamList } from 'src/types/navigation/PatientNavigation';

const NewAppointmentScreen = () => {
  const navigation = useNavigation<StackNavigationProp<PatientRootStackParamList>>();
  return (
    <Container>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.BackAction
          style={{ margin: 0, padding: 0 }}
          onPress={() => {
            null;
          }}
        />
        <Appbar.Content titleStyle={{ fontSize: 18, fontWeight: '700' }} title="New Appointment" />
      </Appbar.Header>

      <DoctorsCard
        name="Dr. Md Sirajur Rahman"
        designation="Assistant Professor"
        department="Cardiology"
        onlineAppointmentAllow={true}
        userAvatar={
          <Avatar.Image
            size={60}
            source={require('../../../../assets/images/patient/service1.png')}
          />
        }
      />

      <DoctorsCard
        name="Dr. Syed Uddin Helal"
        designation="Consultant, Neurosurgery"
        department="Neurosurgery"
        onlineAppointmentAllow={false}
        userAvatar={
          <Avatar.Image
            size={60}
            source={require('../../../../assets/images/patient/service1.png')}
          />
        }
      />
      <Button
        style={{ marginTop: 10 }}
        mode="contained"
        onPress={() => navigation.navigate('CreateAppointmentScreen')}>
        Create Appointment
      </Button>
    </Container>
  );
};

export default NewAppointmentScreen;

const styles = StyleSheet.create({
  headerStyle: {
    padding: 0,
    margin: 0,
    marginTop: -50,
  },
});
