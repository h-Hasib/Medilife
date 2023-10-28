import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientGetAllPrescriptions } from 'src/hooks/patient';

const MyPrescriptionsScreen = () => {
  const { data } = usePatientGetAllPrescriptions();
  return (
    <ScrollView>
      <Text style={styles.headLine}>MyPrescriptionsScreen</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default MyPrescriptionsScreen;

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
