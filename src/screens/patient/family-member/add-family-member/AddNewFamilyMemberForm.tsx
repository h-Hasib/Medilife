import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import ArStyles from 'src/components/common/ArStyles';
import { ShadowBox } from 'src/components/common/ShadowBox';
import { TextAreaField, TextField } from 'src/components/elements/inputs';

const handleSubmit = (values: any) => {
  // Handle form submission
  console.log(values);
};

function AddNewFamilyMemberForm() {
  return (
    <ShadowBox>
      <View>
        <View style={ArStyles.rowStart}>
          <View style={[ArStyles.row, { alignItems: 'center' }]}>
            <Avatar.Image
              size={50}
              source={require('src/assets/images/default.png')}
              style={{ marginRight: -80, marginTop: 10, borderRadius: 5 }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              theme={{ colors: { primary: '#525252' } }}
              mode="contained"
              style={{ marginLeft: 80, width: 200, borderRadius: 20 }}
              labelStyle={{
                backgroundColor: '#525252',
                fontSize: 12,
                lineHeight: 15,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 5,
              }}
              onPress={() => console.log('Pressed')}>
              Upload Profile Picture
            </Button>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            borderBottomColor: '#259376',
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
        />

        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <View style={{ flex: 1 }}>
              <Field
                component={TextField}
                borderRadius={5}
                name="fullname"
                placeholder="Full Name"
              />
              <Field component={TextField} borderRadius={5} name="age" placeholder="Age" />
              <Field component={TextField} borderRadius={5} name="gender" placeholder="Gender" />
              <Field
                component={TextField}
                borderRadius={5}
                name="dob"
                placeholder="Date of Birth"
              />
              <Field
                component={TextField}
                borderRadius={5}
                name="contactNo"
                placeholder="Contact Number"
              />
              <Field component={TextField} borderRadius={5} name="email" placeholder="Email" />
              <Field
                component={TextField}
                borderRadius={5}
                name="relationship"
                placeholder="Relationship"
              />
              <Field component={TextAreaField} name="address" placeholder="Address" />
              <View style={[ArStyles.row, { alignItems: 'center', marginTop: 10 }]}>
                <Button
                  theme={{ colors: { primary: '#259376' } }}
                  mode="contained"
                  style={{ marginRight: 13, width: 200, borderRadius: 30 }}
                  labelStyle={{
                    backgroundColor: '#259376',
                    fontSize: 15,
                    lineHeight: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                  }}
                  onPress={() => console.log('Pressed')}>
                  Add Member
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ShadowBox>
  );
}

export default AddNewFamilyMemberForm;
