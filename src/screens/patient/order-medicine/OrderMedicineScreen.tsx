import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrderMedicineScreen = () => {
  return (
    <View>
      <Text style={styles.headLine}>OrderMedicineScreen</Text>
      <Text style={styles.dataField}>Currently There is no API for this feature.</Text>
    </View>
  );
};

export default OrderMedicineScreen;

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
