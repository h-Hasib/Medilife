import { FieldProps } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';

interface CustomTextInputProps extends FieldProps {
  label: string;
  type?: 'default';
  mode?: 'flat' | 'outlined';
  placeholder?: string;
  [x: string]: any; // for other props
}

export const TextAreaField: React.FC<CustomTextInputProps> = ({
  label,
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
        style={{ minHeight: 75 }}
        multiline
        placeholder={placeholder}
        mode={mode}
        value={value}
        onChangeText={onChange(name)}
        onBlur={() => {
          onBlur(name);
          setTouched(true);
        }}
        theme={{ roundness: 25 }}
      />
      {touched && error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};
