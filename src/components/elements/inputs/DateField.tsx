import { FieldProps } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HelperText, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomDateInputProps extends FieldProps {
  label: string;
  icon?: React.ReactNode;
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
  mode?: 'date' | 'time' | 'datetime';
  placeholder?: string;
  [x: string]: any; // for other props
}

export const DateField = ({
  label,
  placeholder = 'Select date',
  mode = 'date',
  maxDate = undefined,
  minDate = undefined,
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched, setFieldValue },
  ...rest
}: CustomDateInputProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)} style={{ marginVertical: 5 }}>
        {label && <Text>{label}</Text>}
        <TextInput
          placeholder={placeholder}
          mode={'outlined'}
          value={value?.toLocaleDateString('en-GB') || ''}
          editable={true}
          onPressIn={() => setOpen(true)}
          onChangeText={onChange(name)}
          onBlur={() => {
            onBlur(name);
            setFieldTouched(name, true);
          }}
          theme={{ roundness: 25 }}
          placeholderTextColor={'#999'}
          right={<TextInput.Icon icon={() => <Icon name="calendar" size={21} />} />}
          {...rest}
        />
        {touched[name] && errors[name] ? (
          <HelperText type="error">{errors[name] as string}</HelperText>
        ) : null}
      </TouchableOpacity>

      <DatePicker
        modal
        mode={mode}
        open={open}
        date={date}
        maximumDate={maxDate}
        minimumDate={minDate}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setFieldValue(name, date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
