import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PatientRootStackParamList } from 'src/types/navigation/PatientNavigation';

export type PatientScreen = StackNavigationProp<PatientRootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<PatientScreen>();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Home Screen</Text>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Text style={styles.buttonText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('TodaysAppointmentScreen')}>
          <Text style={styles.buttonText}>TodaysAppointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyDoctorsScreen')}>
          <Text style={styles.buttonText}>MyDoctors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyFamilyMembersScreen')}>
          <Text style={styles.buttonText}>MyFamilyMembers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyPrescriptionsScreen')}>
          <Text style={styles.buttonText}>MyPrescriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyHealthReportsScreen')}>
          <Text style={styles.buttonText}>MyHealthReports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyAppointmentsScreen')}>
          <Text style={styles.buttonText}>MyAppointments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('CreateAppointmentScreen')}>
          <Text style={styles.buttonText}>Create Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AppointmentDetailScreen')}>
          <Text style={styles.buttonText}>AppointmentDetail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyHealthFilesScreen')}>
          <Text style={styles.buttonText}>MyHealthFiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('InternationalDoctorsScreen')}>
          <Text style={styles.buttonText}>InternationalDoctors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('OrderMedicineScreen')}>
          <Text style={styles.buttonText}>OrderMedicine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.buttonText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('OtherServicesScreen')}>
          <Text style={styles.buttonText}>OtherServices</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: 'black',
    padding: 5,
  },
  label: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0C49D',
  },
  item: {
    backgroundColor: '#C4D7B2',
    width: '90%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
