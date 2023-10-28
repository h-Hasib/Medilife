import { FieldProps } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto';

interface CustomTextInputProps extends FieldProps {
  label: string;
  icon?: React.ReactNode;
  type?: 'default' | 'email' | 'password';
  mode?: 'flat' | 'outlined';
  placeholder?: string;
  [x: string]: any; // for other props
}

export const TextField: React.FC<CustomTextInputProps> = ({
  label,
  icon,
  type = 'default',
  form,
  field,
  placeholder,
  mode = 'outlined',
}) => {
  const [touched, setTouched] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const { name, value, onBlur, onChange } = field;
  const { touched: touchedFields, errors } = form;

  React.useEffect(() => {
    if (touchedFields[name]) {
      setTouched(true);
      setError(errors[name] as string | undefined);
    }
  }, [touchedFields, errors, name]);

  return (
    <View style={{ marginVertical: 5 }}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={styles.inputControl}
        placeholder={placeholder}
        mode={mode}
        value={value}
        onChangeText={onChange(name)}
        onBlur={() => {
          onBlur(name);
          setTouched(true);
        }}
        theme={{ roundness: 25 }}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        placeholderTextColor={''}
        left={icon ? <TextInput.Icon style={{ paddingTop: 8 }} icon={() => icon} /> : null}
      />
      {touched && error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputControl: {
    height: 45,
    // fontSize: 16,
  },
});
