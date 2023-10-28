import { Field, Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Text } from 'react-native-paper';
import { TextField } from 'src/components/elements/inputs';
import ArStyles from '../common/ArStyles';
import { ShadowBox } from '../common/ShadowBox';

const handleSubmit = (values: any) => {
  // Handle form submission
  console.log(values);
};

const CreateAppointmentCard = () => {
  return (
    <ShadowBox>
      <View style={ArStyles.rowSpaceBetween}>
        <View style={[ArStyles.row, { alignItems: 'center' }]}>
          <Avatar.Image
            size={50}
            source={require('src/assets/images/user_img.png')}
            style={{ marginRight: -80, marginTop: 10, borderRadius: 30 }}
          />
        </View>
        <View style={ArStyles.columnStart}>
          <View>
            <Text variant="bodyMedium" style={{ color: '#3C9979', fontWeight: '800' }}>
              Dr. Md Sirajur Rahman
            </Text>
          </View>
          <View style={ArStyles.rowStart}>
            <Text style={{ color: '#525252', fontWeight: '700' }}>Assistant Professor</Text>
          </View>
          <View>
            <Text variant="bodyMedium" style={{ color: '#525252', fontWeight: '400' }}>
              Cardiology
            </Text>
          </View>
        </View>

        <View style={ArStyles.row}>
          <Avatar.Image
            size={38}
            source={require('src/assets/images/icon/telephone-call.png')}
            style={{ marginRight: 10, borderRadius: 19 }}
          />
        </View>
      </View>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <View style={{ flex: 1 }}>
            <Field
              component={TextField}
              name="shift"
              label=""
              placeholder="Select Shift - Morning 9 am - 1 pm"
            />
            <Field
              component={TextField}
              name="Book"
              label=""
              placeholder="Book For - Own ( Isahaque Miah )"
            />
          </View>
        )}
      </Formik>
      <View style={{ padding: 5, marginTop: 10, marginLeft: 10 }}>
        <Text style={{ color: '#525252', fontWeight: '800' }}>Summery of your Appointment</Text>
      </View>

      <View style={{ padding: 20, width: '100%' }}>
        <Divider style={{ height: 1 }} />
        <View style={[ArStyles.rowStart, { paddingVertical: 5 }]}>
          <Text style={{ color: '#259376', fontWeight: '800' }}>Patient Name :</Text>
          <Text style={{ color: '#259376', fontWeight: '800' }}> Isahaque Miah</Text>
        </View>
        <Divider style={{ height: 1 }} />
        <View style={[ArStyles.rowStart, { paddingVertical: 5 }]}>
          <Text style={{ color: '#259376', fontWeight: '800' }}>Chamber :</Text>
          <Text style={{ color: '#A6A6A6', fontWeight: '500' }}> OASIS HOSPITAL SYLHET, LTD</Text>
        </View>
        <Divider style={{ height: 1 }} />
        <View style={[ArStyles.rowStart, { paddingVertical: 5 }]}>
          <Text style={{ color: '#259376', fontWeight: '800' }}>Shift :</Text>
          <Text style={{ color: '#A6A6A6', fontWeight: '500' }}> MORNING (9 am - 1 pm)</Text>
        </View>
        <Divider style={{ height: 1 }} />
        <View style={[ArStyles.rowStart, { paddingVertical: 5 }]}>
          <Text style={{ color: '#259376', fontWeight: '800' }}>Tentative Serial :</Text>
          <Text style={{ color: '#A6A6A6', fontWeight: '500' }}> 7</Text>
        </View>
        <Divider style={{ height: 1 }} />
        <View style={[ArStyles.rowStart, { paddingVertical: 5 }]}>
          <Text style={{ color: '#259376', fontWeight: '800' }}>Approx Time :</Text>
          <Text style={{ color: '#A6A6A6', fontWeight: '500' }}> 10:15 am</Text>
        </View>
        <Divider style={{ height: 1 }} />
        <View style={[ArStyles.rowStart, { paddingVertical: 5 }]}>
          <Text style={{ color: '#259376', fontWeight: '800' }}>Note :</Text>
          <Text style={{ color: '#A6A6A6', fontWeight: '500' }}> </Text>
        </View>
      </View>
      <View style={ArStyles.row}>
        <View style={{ padding: 4 }}>
          <Button
            theme={{ colors: { primary: '#259376' } }}
            mode="contained"
            style={{ marginRight: 13, width: 200, borderRadius: 5 }}
            labelStyle={{
              backgroundColor: '#3C9979',
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => console.log('Pressed')}>
            Book Appointment Now
          </Button>
        </View>
        <View style={{ padding: 4 }}>
          <Button
            mode="contained"
            style={{ marginRight: 13, width: 200, borderRadius: 5 }}
            theme={{ colors: { primary: '#2FBB96' } }}
            labelStyle={{
              fontSize: 10,
              lineHeight: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => console.log('Pressed')}>
            Book By Phone Call
          </Button>
        </View>
      </View>
    </ShadowBox>
  );
};

export default CreateAppointmentCard;

const styles = StyleSheet.create({});
