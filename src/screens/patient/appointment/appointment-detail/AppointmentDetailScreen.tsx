import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientGetAppointmentDetail } from 'src/hooks/patient';

const AppointmentDetailScreen = () => {
  const { data } = usePatientGetAppointmentDetail('91280f57-a3e5-4943-123f-08db6d7134c3');
  return (
    <ScrollView>
      <Text style={styles.headLine}>AppointmentDetailScreen(with static appointment Id)</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default AppointmentDetailScreen;

const styles = StyleSheet.create({
  headLine: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  dataField: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
});
