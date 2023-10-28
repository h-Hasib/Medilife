import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { usePatientGetAllFavoriteDoctor } from 'src/hooks/patient';

const MyDoctorsScreen = () => {
  const { data } = usePatientGetAllFavoriteDoctor();
  return (
    <ScrollView>
      <Text style={styles.headLine}>MyDoctorsScreen</Text>
      <Text style={styles.dataField}>{JSON.stringify(data?.data, null, 2)}</Text>
    </ScrollView>
  );
};

export default MyDoctorsScreen;

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
