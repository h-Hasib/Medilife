import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import ArStyles from './ArStyles';
interface Props {
  data: any;
  colTitle: string[];
  colName: string[];
}
const InfoTable = (param: Props) => {
  const { data, colTitle, colName } = param;
  return (
    <Surface style={styles.shadowBox}>
      <View style={{ padding: 5, width: '100%' }}>
        {colTitle.map((title, index) => (
          <React.Fragment key={index}>
            <View style={[ArStyles.rowSpaceBetween, { paddingVertical: 5 }]}>
              <Text>{title}</Text>
              <Text>{data[colName[index]] ?? 'N/A'}</Text>
            </View>
            {index !== colTitle.length - 1 && <Divider style={{ height: 1 }} />}
          </React.Fragment>
        ))}
      </View>
    </Surface>
  );
};

export default InfoTable;
const styles = StyleSheet.create({
  shadowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
  },
});
