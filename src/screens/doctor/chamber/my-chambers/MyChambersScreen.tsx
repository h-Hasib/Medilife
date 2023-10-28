import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ArStyles from 'src/components/common/ArStyles';
import { CollapsibleBox } from 'src/components/common/CollapsibleBox';
import Header from 'src/components/common/Header';
import { InfoBox } from 'src/components/common/InfoBox';
import MyChamberDetails from 'src/components/doctors/MyChamberDetails';
import { useDoctorGetAllChamber } from 'src/hooks/doctor/chamber';
import { DoctorRootStackParamList } from 'src/types/navigation/DoctorNavigation';

const MyChambersScreen = () => {
  const chamberListData = useDoctorGetAllChamber();
  const navigation = useNavigation<StackNavigationProp<DoctorRootStackParamList>>();
  return (
    <View style={ArStyles.safeAreaView}>
      <Header HeaderTitle="My Chambers" onPress={() => navigation.navigate('HomeScreen')} />
      <InfoBox mode="secondary" hasStarBox={true}>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 12, paddingVertical: 5, color: '#fff' }}>
            All your chambers and workplace information is listed here. You can add new
            workplace/chamber, edit or delete existing chamber information also
          </Text>
        </View>
      </InfoBox>
      <Surface style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            console.log('first');
          }}>
          <View style={ArStyles.columnCenter}>
            <Icon name="plus" size={30} color="#525252" />
            <Text variant="titleMedium" style={{ color: '#525252' }}>
              Add Chamber
            </Text>
            <Text variant="bodyMedium" style={{ color: '#525252' }}>
              Add new chamber entry with information
            </Text>
          </View>
        </Pressable>
      </Surface>
      <Text variant="titleMedium" style={{ margin: 15, fontWeight: '700', color: '#525252' }}>
        Existing Chambers
      </Text>
      {chamberListData.data?.data.Data && (
        <FlatList
          data={chamberListData.data?.data.Data}
          renderItem={({ item }) => (
            <CollapsibleBox
              title={item.ChamberName}
              description={item.ChamberAddress}
              child={<MyChamberDetails chamberId={item.Id} />}
            />
          )}
          keyExtractor={item => item.Id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyChambersScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 15,
    margin: 10,
    backgroundColor: '#ffffff',
  },
  // button: {
  //   borderWidth: 0,
  //   borderRadius: 0,
  //   backgroundColor: 'transparent',
  //   paddingHorizontal: 12,
  //   paddingVertical: 8,
  // },
  // buttonLabel: {
  //   color: 'black',
  // },
});

{
  /* <Button style={styles.button} labelStyle={styles.buttonLabel} mode="outlined">
            <View>
              <Text> */
}
{
  /* </Text>
            </View>
          </Button> */
}
// chamberListData?.data?.data.Data
