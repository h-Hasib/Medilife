import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientGetTodayAppointment } from 'src/hooks/patient';

const TodaysAppointmentScreen = () => {
  const { data } = usePatientGetTodayAppointment();
  return (
    <ScrollView>
      <Text style={styles.headLine}>TodaysAppointmentScreen</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default TodaysAppointmentScreen;

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
