import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const MyHealthReportsScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.headLine}>MyHealthReportsScreen</Text>
      <Text style={styles.dataField}>Currently There is no API for this feature.</Text>
    </ScrollView>
  );
};

export default MyHealthReportsScreen;

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
