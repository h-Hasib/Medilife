import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientGetAllAppointment } from 'src/hooks/patient';

const MyAppointmentsScreen = () => {
  const { data } = usePatientGetAllAppointment();
  return (
    <ScrollView>
      <Text style={styles.headLine}>MyAppointmentsScreen</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default MyAppointmentsScreen;

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
